import React from 'react'
import { useState } from 'react';
import { Link } from "gatsby"
import "../styles/navbar.css"

const Navbar : React.FC = () => {

    const [isActive, setIsActive] = useState(false);

    return (
        <nav className="navbar">
            <div className="brand">
                <Link to="/">MIF</Link>
            </div>
            <div className="menu">
                <Link activeClassName="active" to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar