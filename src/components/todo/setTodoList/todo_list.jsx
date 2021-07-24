import { useDispatch } from 'react-redux';
import { actionCreatores } from '../../redux/constants/addTodo'
import { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Select from 'react-select'


export const Todo_list = (props) => {
    const [open, setOpen] = useState(false)


    const dispatch = useDispatch()

    const handleDelete = (e) => {
        dispatch(actionCreatores.deleteTodo({
            id: e.target.id,
        }));
    }

    const handleUpdate = (e) => {
        dispatch(actionCreatores.editTodo({
            id: e.target.id,
            item: e.target.id
        }));
    }

    const status = [
        { label: 'Todo', value: 'Todo' },
        { label: 'In Progress', value: 'In Progress' },
        { label: 'Done', value: 'Done' },
    ]



    return (
        <>
            <div className="list__item">
                <span className='list__item--value' key={props.id}>
                    <span className='list__item--id'>{props.id}</span>
                    {props.value}</span>
                <span className="list__item--state">
                    <span className='list__item--status' key={props.id}>{props.status}</span>
                    <Popup position="right center" trigger={
                        <span class="material-icons list__popup" id={props.id}>more_horiz</span>}>
                        <div>Todo Settings</div>
                        Todo Status :<Select options={status} />
                    </Popup>
                </span>
            </div>
        </>
    )
}


{/* <span onClick={handleDelete} class="material-icons list__icon" id={props.id}>delete</span>
<span onChange={() => handleUpdate(props.id)} class="material-icons list__icon" >update</span> */}