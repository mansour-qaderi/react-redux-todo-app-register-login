import React, { useState, useEffect } from 'react'
import default_image from '../../img/default-image.png';
import 'material-icons/iconfont/material-icons.css';
import '../../sass/navbarMainScss.scss';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { ActionCreators } from '../redux/constants/profile'
import { useRef } from 'react';


export const Navigation = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const selector = useSelector((state) => state.user);
    const User = selector.currentlyUser

    const [image, setImage] = useState(User[0].image);
    const [imageName, setImageName] = useState(User?.imageName);

    const firstUpdate = useRef(true)
    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }

        else {
            console.log('user id', User[0].id)
            dispatch(ActionCreators.uploadImage({
                id: parseInt(User[0].id),
                image: image,
                image_name: imageName
            }))
        }
    }, [image, imageName])

    const onFileChange = (e) => {
        console.log('set file', true)
        setImage(URL.createObjectURL(e.target.files[0]));
        setImageName(e.target.files[0].name);
    };


    const handleLogout = () => {
        dispatch(ActionCreators.userAccess(false))
        history.push('/login')
    }

    return (
        <section className="section-navbar">
            <div className="navbar__view">
                <span onClick={handleLogout} className="material-icons navbar__view--icons">logout</span>
                <span className="material-icons navbar__view--icons">settings</span>
            </div>
            <div className="navbar__user">
                <span className="navbar__user--username">{User[0].fullname}</span>

                {image ? <img src={image} alt="user image" className="navbar__user--image" /> : (
                    <div className='navbar__image'>
                        <img src={default_image} alt="user image" className="navbar__image--default" />
                        <label htmlFor="upload-image">
                            <span className="navbar__image--icon material-icons navbar__view--icons">add_a_photo</span>
                        </label>
                    </div>
                )}

                <input type="file" onChange={onFileChange} id='upload-image'
                    accept="image/*" multiple style={{ display: "none" }} />
            </div>
        </section>
    )
}
