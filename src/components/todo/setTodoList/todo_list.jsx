import { useDispatch } from 'react-redux';
import { actionCreators } from '../../redux/constants/addTodo'
import { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import styled from 'styled-components';


export const Todo_list = (props) => {
    const [statusValue, setStatusValue] = useState('todo')
    const [itemValue, setItemValue] = useState(props.value)

    const dispatch = useDispatch()

    const handleDelete = (e) => {
        dispatch(actionCreators.deleteTodo({
            id: parseInt(e.target.id),
        }));
    }

    const handleUpdate = (e) => {
        console.log(e.target.id)
        dispatch(actionCreators.editTodo({
            id: parseInt(e.target.id),
            newItem: itemValue,
            status: statusValue
        }));
    }


    const status = [
        { label: 'todo', value: 'Todo' },
        { label: 'in Progress', value: 'In Progress' },
        { label: 'done', value: 'Done' },
    ]


    const TodoStatus = styled.span`
        margin: auto 1rem;
        display: inline-block;
        padding: .2rem .8rem;
        border-radius: .6rem;
        border: 1px solid #aea7e0;
        background: ${props => props.backgroundColor === 'done' ? "#388e38" : props.backgroundColor === 'in Progress' ? "#3d3da5" : "#98983c"};
        color: #e4eefb;
    `

    const AutoChoiceColor = props.status === 'done' ? 'done' : props.status === 'in Progress' ? 'in Progress' : 'todo'


    return (
        <>
            <div className="list__item">
                <span className='list__item--value' key={props.id}>
                    <span className='list__item--id'>{props.id}</span>
                    {props.value}</span>
                <span className="list__item--state">
                    <TodoStatus key={props.id}
                        backgroundColor={AutoChoiceColor}>
                        {props.status}
                    </TodoStatus>
                    <Popup className='list__item--popup' position="right center" trigger={
                        <span className="material-icons list__popup" id={props.id}>more_horiz</span>}>
                        <div className='list__item--settings'>Todo Settings</div>
                        <label className='list__item--status'>Todo status:</label>
                        <select value={statusValue} className='list__item--select-box' onChange={(e) => setStatusValue(e.target.value)} >
                            {status.map(({ label, value }) => {
                                return <option className='list__item--options' defaultValue='Todo' key={label} value={label}>{value}</option>
                            })}
                        </select>
                        <input className='input-update' type="text" value={itemValue} onClick={handleUpdate} onChange={(e) => setItemValue(e.target.value)} />
                        <button onClick={handleDelete} id={props.id} className='btn-delete' type='button'>Delete</button>
                        <button onClick={handleUpdate} id={props.id} className='btn-update' type='button'>Update</button>
                    </Popup>
                </span>
            </div>
        </>
    )
}

// {props.status} === 'done' ? 'primary' : props.status === 'in Progress' ? 'secondary' : 'thirnary'


{/* <span onClick={handleDelete} class="material-icons list__icon" id={props.id}>delete</span>
<span onChange={() => handleUpdate(props.id)} class="material-icons list__icon" >update</span> */}