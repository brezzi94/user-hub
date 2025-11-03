import {ROUTES} from "../../constants/routes.ts";
import {useLocation} from "react-router-dom";
import "./Navbar.css";
import {useAppContext} from "../../context/AppContext.tsx";

export default function Navbar() {
    const location = useLocation();
    const { loggedUser} = useAppContext();

    const currentRoute =
        Object.values(ROUTES).find((route) => route.path === location.pathname) ??
        ROUTES.HOME;

    return (
        <header className="navbar" role="banner">
            <h2 className="navbar-title">{currentRoute.label}</h2>

            <div>

                {loggedUser && (
                    <div className="user-info" role="group" aria-label="Profilo utente">
                        <span className="user-name">{loggedUser.name}</span>
                        <img
                            src={loggedUser.avatarUrl}
                            alt={`Avatar di ${loggedUser.name}`}
                            className="navbar-user-avatar"
                        />
                    </div>
                )}
            </div>
        </header>
    );
}
