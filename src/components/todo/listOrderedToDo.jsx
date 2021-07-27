import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '../partComponents/button'
import { actionCreators } from '../redux/constants/addTodo'
import { Todo_list } from './setTodoList/todo_list'


export const Todo = () => {

    const Auto_increment_id = (todos) => {
        const max = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), 0);
        return max + 1
    }

    const dispatch = useDispatch()
    const [todo, setTodo] = useState('');

    const selector = useSelector((state) => state.todo.todos)
    const todoStatus = useSelector((state) => state.todo.showTodosWithStatus)

    const User = useSelector((state) => state.user.currentlyUser)

    const add = () => {
        if (todo === '') {
            alert('add any value')
        }

        else {
            dispatch(actionCreators.addTodo({
                id: Auto_increment_id(selector),
                user_id: User[0].id,
                item: todo,
                status: todoStatus !== 'all' ? todoStatus : 'todo'
            }));
            setTodo('')
        }
    }

    const handleChange = (e) => setTodo(e.target.value);

    return (
        <div className="list__addTodo">
            <input
                name='todo'
                type='text'
                className='todo__input'
                placeholder='add todo'
                value={todo}
                onChange={handleChange}
            />
            <Button
                buttonValue='Add'
                buttonType='submit'
                buttonClass='todo__btn'
                buttonHandleClick={add}
            />

            {selector?.length > 0 && selector?.map((item) => {
                if (item.user_id === User[0].id) {

                    if (todoStatus === 'all') {
                        return <Todo_list userId={item.user_id} value={item.item} id={item.id} status={item.status} key={item.id + item.item} />
                    }
                    else if (item.status === todoStatus) {
                        return <Todo_list userId={item.user_id} value={item.item} id={item.id} status={item.status} key={item.id + item.item} />
                    }
                }
            })}

            {selector?.length === 0 && <h1 className='alert__message'>Nothing for show!</h1>}

        </div>
    )
}