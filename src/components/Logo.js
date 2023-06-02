import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <Link to={'/'} className="logo d-flex align-items-center scrollto me-auto me-lg-0">
            <h1>HeroBiz<span>.</span></h1>
        </Link>
    )
}