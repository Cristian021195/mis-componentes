import React from 'react'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <nav className='col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2'>
        <ul>
            <li>
                <Link to="/">home</Link>
            </li>
            <li>
                <Link to="/botones">botones</Link>
            </li>
            <li>
                <Link to="/acordeon">acordeon</Link>
            </li>
            <li>
                <Link to="/forms">forms</Link>
            </li>
            <li>
                <Link to="/loaders">loaders</Link>
            </li>
            <li>
                <Link to="/offcanvas">offcanvas</Link>
            </li>
            <li>
                <Link to="/cards">cards</Link>
            </li>
            <li>
                <Link to="/fieldsets">fieldsets</Link>
            </li>
            <li>
                <Link to="/alerts">alerts</Link>
            </li>
            <li>
                <Link to="/bottom">bottom</Link>
            </li>
            <li>
                <Link to="/modals">modals</Link>
            </li>
            <li>
                <Link to="/toasts">toasts</Link>
            </li>
            <li>
                <Link to="/tooltips">tooltips</Link>
            </li>
            <li>
                <Link to="/carousel">carousel</Link>
            </li>
            <li>
                <Link to="/dropdown">dropdown</Link>
            </li>
            <li>
                <Link to="/progess">progess</Link>
            </li>            
        </ul>
    </nav>
  )
}
