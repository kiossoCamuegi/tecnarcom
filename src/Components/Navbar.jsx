import React from 'react'
import { Link } from 'react-router-dom'
import { RiMenu3Line } from "react-icons/ri";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Logo = require("../images/logo1.png")


function Navbar() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='fh-navbar'>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <menu className="center-menu">
                        <li><a href="#">Sobre nós</a></li>
                        <li><a href="#">Serviços</a></li>
                        <li><a href="#">Ensighs</a></li>
                        <li><a href="#">Comição executiva</a></li>
                        <li><a href="#">Clientes</a></li>
                        <button className="btn bg-main col">Consultar Agora</button>
                    </menu>
                </Offcanvas.Body>
            </Offcanvas>
            <div className="wrapper">
                <div className="nav-items">
                    <div className="item">
                        <Link to={"/"}><img src={Logo} alt="" /></Link>
                    </div>
                    <ul className="item it">
                        <li><a href="#">Sobre nós</a></li>
                        <li><a href="#">Serviços</a></li>
                        <li><a href="#">Ensighs</a></li>
                        <li><a href="#">Comição executiva</a></li>
                        <li><a href="#">Clientes</a></li>
                    </ul>
                    <div className="item it">
                        <button className="btn bg-main">Consultar Agora</button>
                    </div>
                   <button className="btn toggle bg-main text-light" onClick={handleShow}><RiMenu3Line /></button> 
                </div>
            </div>
        </div>
    )
}

export default Navbar