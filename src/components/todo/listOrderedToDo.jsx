import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '../partComponents/button'
import { actionCreatores } from '../redux/constants/addTodo'
import 'material-icons/iconfont/material-icons.css';


export const Todo = () => {

    const auto_increment_id = (todos) => {
        const max = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
        return max + 1
    }


    const dispatch = useDispatch()
    const [todo, setTodo] = useState('');
    console.log(todo)

    const selector = useSelector((state) => state.todo)
    console.log('selector', selector)

    const add = () => {

        if (todo === '') {
            alert('add any value')
        }

        else {
            dispatch(actionCreatores.addTodo({
                id: auto_increment_id(selector),
                item: todo,
                status: 'todo'
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
                onChange={(e) => handleChange(e)}
            />
            <Button
                buttonValue='Submit'
                buttonType='submit'
                buttonClass='todo__btn'
                buttonHandleClick={() => add()}
            />

            <ul className='list__item'>
                {selector.length > 0 && selector.map((item) => {
                    return <li className='list__item--value' key={item.id}>{item.item}
                        <span class="material-icons list__icon">delete</span>
                        <span class="material-icons list__icon">update</span>
                    </li>
                })}
            </ul>
        </div>
    )
}