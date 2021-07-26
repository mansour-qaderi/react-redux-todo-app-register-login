import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Navigation } from './PageComponents/navbar';
import '../sass/homeMainScss.scss';
import { Todo } from './todo/listOrderedToDo';

const HomePage = () => {

    return (
        <section className="section-todo-list">
            <Navigation />
            <div className="todo-list__main">
                <div className="todo-list__pages">
                    <Link className="todo-list__pages--page" to='/home'>Todo</Link>
                    <Link className="todo-list__pages--page" to='/home'>InProgress</Link>
                    <Link className="todo-list__pages--page" to='/home'>Done</Link>
                </div>
                <div className="todo-list__container">
                    <Todo />
                </div>
            </div>
        </section>
    )
}

export default HomePage