import {ROUTES} from "../../constants/routes.ts";
import {useLocation} from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    const location = useLocation();

    const currentRoute =
        Object.values(ROUTES).find((route) => route.path === location.pathname) ??
        ROUTES.HOME;

    return (
        <header className="navbar" role="banner">
            <h2 className="navbar-title">{currentRoute.label}</h2>
        </header>
    );
}
