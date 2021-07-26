import React from 'react'
// import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'


// import React, { useState, useEffect } from "react";
// import 'material-icons/iconfont/material-icons.css';

// export function Test() {
//     const [image, setImage] = useState({ preview: "", raw: "" });
//     const [value, setValue] = useState(1);

//     const handleChange = e => {
//         if (e.target.files.length) {
//             setImage({
//                 preview: URL.createObjectURL(e.target.files[0]),
//                 raw: e.target.files[0]
//             });
//         }
//     };

//     useEffect(() => {
//         console.log('useEffect is runned')
//     }, [image])

//     console.log('Count is runned', value)


//     return (
//         <div>
//             <label htmlFor="upload-button" style={{ textAlign: 'center' }}>
//                 {image.preview ? (
//                     <img src={image.preview} alt="dummy" width="300" height="300" />
//                 ) : (
//                         <>
//                             <span className="navbar__image--icon material-icons navbar__view--icons">add_a_photo</span>
//                             <h5 className="text-center">Upload your photo</h5>
//                             <button onClick={() => setValue(count => count + 1)} >Increment</button>
//                         </>
//                     )}
//             </label>
//             <input
//                 type="file"
//                 id="upload-button"
//                 style={{ display: "none" }}
//                 onChange={handleChange}
//             />
//         </div >
//     );
// }




export function Test() {
    return (
        <div>
            <div className="row">
                <div className="col-md-12">

                    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                        <Navbar.Brand href="#home">React Bootstrap Navbar</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="#action">Home</Nav.Link>
                                <Nav.Link href="#action/2.1">Contact Us</Nav.Link>
                                <Nav.Link href="#action/2.2">About Us</Nav.Link>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>

                </div>
            </div>
        </div>
    )
}


{/* <section className="section-navbar">
        //     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        //         <Container>
        //             <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        //             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        //             <Navbar.Collapse id="responsive-navbar-nav">
        //                 <Nav className="me-auto">
        //                     <Nav.Link href="#features">Features</Nav.Link>
        //                     <Nav.Link href="#pricing">Pricing</Nav.Link>
        //                     <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        //                         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        //                         <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        //                         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        //                         <NavDropdown.Divider />
        //                         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        //                     </NavDropdown>
        //                 </Nav>
        //                 <Nav>
        //                     <Nav.Link href="#deets">More deets</Nav.Link>
        //                     <Nav.Link eventKey={2} href="#memes">
        //                         Dank memes
        //   </Nav.Link>
        //                 </Nav>
        //             </Navbar.Collapse>
        //         </Container>
        //     </Navbar>
        //     </section> */}