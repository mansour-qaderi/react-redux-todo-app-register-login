import React, { useState } from 'react';
import { Navigation } from './PageComponents/navbar';
import '../sass/homeMainScss.scss';
import { Todo } from './todo/listOrderedToDo';
import { useDispatch, useSelector } from 'react-redux'
import { actionCreators } from './redux/constants/addTodo'
import styled from 'styled-components';


const HomePage = () => {
    const dispatch = useDispatch()
    const todoStatus = useSelector((state) => state.todo.showTodosWithStatus)
    console.log('todoStatus in', todoStatus)

    const handleStatus = (status) => {
        dispatch(actionCreators.showWithStatus({
            status: status
        }))
    }


    const TodoList = styled.span`
        margin: 2rem;
        cursor: pointer;
        color: ${props => props.color === todoStatus ? '#829abd' : props.color === todoStatus ? '#829abd' : props.color === todoStatus ? '#829abd' : props.color === todoStatus ? '#829abd' : '#0d6efd'};
    `

    return (
        <section className="section-todo-list">
            <Navigation />
            <div className="todo-list__main">
                <div className="todo-list__pages">
                    <TodoList color='all' onClick={() => handleStatus('all')} className="todo-list__pages--todo">All</TodoList>
                    <TodoList color='todo' onClick={() => handleStatus('todo')} className="todo-list__pages--todo">Todo</TodoList>
                    <TodoList color='in Progress' onClick={() => handleStatus('in Progress')} className="todo-list__pages--todo">InProgress</TodoList>
                    <TodoList color='done' onClick={() => handleStatus('done')} className="todo-list__pages--todo">Done</TodoList>
                </div>
                <div className="todo-list__container">
                    <Todo />
                </div>
            </div>
        </section>
    )
}

export default HomePage