import React from 'react'
import Developer from '../../img/mansour.jpg';
import 'material-icons/iconfont/material-icons.css';
import '../../sass/navbarMainScss.scss';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { ActionCreators } from '../redux/constants/profile'


export const Navbar = () => {

    const history = useHistory()
    const selector = useSelector((state) => state.user);
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(ActionCreators.userAccess(false))
        history.push('/login')
    }

    return (
        <section className="section-navbar">
            <div className="navbar__view">
                <span onClick={handleLogout} class="material-icons navbar__view--icons">logout</span>
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