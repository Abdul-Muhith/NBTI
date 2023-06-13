import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    return (
        <nav>
            <Link className='nav-link' to='/office'>Office</Link>
            <Link className='nav-link' to='/courses'>Courses</Link>
            <Link className='nav-link' to='/contact'>Contact</Link>
            <Link className='nav-link' to='/about'>About</Link>

            {/* <nav class="navbar navbar-expand-lg bg-primary">
            <div class="container">
                <a class="navbar-brand text-white" href="#">Navbar</a>
                <a class="navbar-brand text-white" href="../pages/home">Home</a>
                <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item">
                            <a class="nav-link active text-danger" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Pricing</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white">Disabled</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> */}
        </nav>
    )
}
