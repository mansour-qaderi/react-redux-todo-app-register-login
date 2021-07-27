import React, { useState, useEffect } from 'react'
import default_image from '../../img/default-image.png';
import 'material-icons/iconfont/material-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../sass/navbarMainScss.scss';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { ActionCreators } from '../redux/constants/profile'
import { Form, Modal, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap'
import { useRef } from 'react';
import { actionCreatores } from '../redux/constants/addTodo'



export const Navigation = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const selector = useSelector((state) => state.user);
    const User = selector.currentlyUser

    const [image, setImage] = useState(User[0].image);
    const [imageName, setImageName] = useState(User[0].imageName);
    const [email, setEmail] = useState(User[0].email);
    const [fullname, setFullname] = useState(User[0].fullname);
    const [username, setUsername] = useState(User[0].username);
    const [password, setPassword] = useState(User[0].password);
    const [show, setShow] = useState(false);

    const { current: userFullname } = useRef(User[0].fullname)
    const { current: updateFullname } = useRef(fullname)
    const firstUpdate = useRef(true)

    const handleClose = () => {
        if (userFullname === updateFullname) {
            setFullname(userFullname)
        }
        setShow(false);
    }
    const handleShow = () => setShow(true);

    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }

        else {
            dispatch(ActionCreators.uploadImage({
                id: parseInt(User[0].id),
                image: image,
                image_name: imageName
            }))
        }
    }, [image, imageName])

    const onFileChange = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]));
        setImageName(e.target.files[0].name);
    };


    const handleLogout = () => {
        dispatch(ActionCreators.userAccess(false))
        history.push('/login')
    }

    const handleUserUpdata = (e) => {
        dispatch(ActionCreators.updateUser({
            id: parseInt(User[0].id),
            email: email,
            fullname: fullname,
            username: username,
            password: password
        }));
        setShow(false);
    }

    return (
        // <span onClick={handleLogout} className="material-icons navbar__view--icons">logout</span>
        // <span className="material-icons navbar__view--icons">settings</span>
        <section className="section-navbar">
            <div className="navbar__view">
                <Navbar bg="white" variant="light" expand='lg' sticky="top">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link className='navbar__logout' onClick={handleLogout}>
                                <span className="material-icons navbar__view--icons">logout</span>
                            </Nav.Link>
                            <NavDropdown title="Profile" id="basic-nav-dropdown">
                                <NavDropdown.Item onClick={handleShow}>Change Profile</NavDropdown.Item>

                                <NavDropdown.Item>Change image</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            <div className="navbar__user">
                <span className="navbar__user--username">{fullname}</span>

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

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title style={{ textAlign: 'center' }} >Profile</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicFullname">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" value={fullname} onChange={(e) => setFullname(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicUsername">
                                <Form.Label>User Name</Form.Label>
                                <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Passwrod</Form.Label>
                                <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your new Password' />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                    </Button>
                        <Button variant="primary" onClick={handleUserUpdata}>
                            Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </section >
    )
}
