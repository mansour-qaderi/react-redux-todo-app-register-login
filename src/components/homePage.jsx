import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Navbar } from './PageComponents/navbar';
import '../sass/homeMainScss.scss';
import { Todo } from './todo/listOrderedToDo';


const HomePage = () => {

    return (
        <section className="section-todo-list">
            <Navbar />
            <div className="todo-list__main">
                <div className="todo-list__pages">
                    <span className="todo-list__pages--page">Todo</span>
                    <span className="todo-list__pages--page">InProgress</span>
                    <span className="todo-list__pages--page">Done</span>
                </div>
                <div className="todo-list__container">
                    <div className="list__todo"></div>
                    <Todo />
                    <div className="list__time"></div>
                </div>
            </div>
        </section>
    )
}

export default HomePage