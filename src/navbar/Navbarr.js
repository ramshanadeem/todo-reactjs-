import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom';
export default function Navbarr() {
    return (
        <div className="navbar-main">
            <div className="nav">
               <p className="logo">Todos</p>
                    <div className="links">
                        <NavLink exact className="link" to="/home" activeClassName="underline">Home</NavLink>
                        <NavLink  className="link" to="/todo" activeClassName="underline">todo</NavLink>

                    </div>

               
            </div>
            
        </div>
    )
}
