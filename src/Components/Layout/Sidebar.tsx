import React from 'react'
import { NavLink } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <nav className='col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2'>
        <h2 style={{color:'whitesmoke'}}>Mis Componentes</h2>
        <ul>
            <li>
                <NavLink className={({isActive}) => isActive ? "active" : ""} to="/">home</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? "active" : ""} to="/botones">botones</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? "active" : ""} to="/acordeon">acordeon</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? "active" : ""} to="/forms">forms</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? "active" : ""} to="/loaders">loaders</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? "active" : ""} to="/offcanvas">offcanvas</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? "active" : ""} to="/cards">cards</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? "active" : ""} to="/fieldsets">fieldsets</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? "active" : ""} to="/alerts">alerts</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? "active" : ""} to="/bottom">bottom</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? "active" : ""} to="/modals">modals</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? "active" : ""} to="/toasts">toasts</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? "active" : ""} to="/tooltips">tooltips</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? "active" : ""} to="/carousel">carousel</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? "active" : ""} to="/dropdown">dropdown</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? "active" : ""} to="/progess">progess</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? "active" : ""} to="/bottom-bar-navigation">Bottom Bar Navigation</NavLink>
            </li>
        </ul>
    </nav>
  )
}
