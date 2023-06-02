import { Link } from "react-router-dom";

//components
import Logo from "./Logo";
import Navbar from "./Navbar";

export default function Header() {
    return (
        <header id="header" className="header fixed-top" data-scrollto-offset="0">
            <div className="container-fluid d-flex align-items-center justify-content-between">
                <Logo />
                <Navbar />
                <Link className="btn-getstarted scrollto" to={'/'}>Get Started</Link>
            </div>
        </header>
    )
}