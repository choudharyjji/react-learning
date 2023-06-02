import { NavLink } from "react-router-dom";

export default function Navbar () {
    return (
        <nav id="navbar" className="navbar">
            <ul>
                <li className="dropdown">
                    <NavLink to={'/'}>
                        <span>Home</span> <i className="bi bi-chevron-down dropdown-indicator"></i>
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                        className="nav-link scrollto" 
                        to={'/about'}
                    >About</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link scrollto" to={'/services'}>Services</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link scrollto" to={'/portfolio'}>Portfolio</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link scrollto" to={'/team'}>Team</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link scrollto" to={'/blog'}>Blog</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link scrollto" to={'/contact'}>Contact</NavLink>
                </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle d-none"></i>
        </nav>
    )
}