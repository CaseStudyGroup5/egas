import React from 'react'
import { Link } from 'react-router-dom'
//import styles from 'styled-components'
import './HeaderComponent.css'
const HeaderComponent = () =>
{
    return (
        <div>
            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid">
                    <a class="navbar-brand" href="# ">Online EGas</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="nav">
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                            <Link to="/"class="nav-link" >Home</Link>
                            </li>
                            <li class="nav-item">
                            <Link to="/about" class="nav-link">About</Link>
                            </li>
                            <li class="nav-item">
                            <Link to="/admin" class="nav-link">Admin</Link>
                            </li>
                            <li class="nav-item">
                            <Link to="/customer" class="nav-link">Customer</Link>
                            </li>
                            <li class="nav-item">
                            <Link to="/dealer"class="nav-link" >Dealer</Link>
                            </li>
                            <li class="nav-item">
                            <Link to="/stafflogin" class="nav-link">Staff Delivery</Link>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default HeaderComponent