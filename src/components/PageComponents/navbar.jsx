import React from 'react'
import Developer from '../../img/mansour.jpg';
import 'material-icons/iconfont/material-icons.css';
import '../../sass/navbarMainScss.scss';


export const Navbar = () => {
    return (
        <section className="section-navbar">
            <div className="navbar__view">
                <span class="material-icons navbar__view--icons">logout</span>
                <span class="material-icons navbar__view--icons">settings</span>
                <span class="material-icons navbar__view--icons">message</span>
            </div>
            <div className="navbar__user">
                <span className="navbar__user--username">Mansour Qaderi</span>
                <img src={Developer} alt="user image" className="navbar__user--image" />
            </div>
        </section>
    )
}