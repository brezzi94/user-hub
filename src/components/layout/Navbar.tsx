import {ROUTES} from "../../constants/routes.ts";
import {useLocation} from "react-router-dom";
import "./Navbar.css";
import {Button} from "react-bootstrap";
import {useTheme} from "../../hooks/useTheme.tsx";
import {Moon, Sun} from "lucide-react";
import {useAppContext} from "../../context/AppContext.tsx";

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const location = useLocation();
    const { loggedUser} = useAppContext();

    const currentRoute =
        Object.values(ROUTES).find((route) => route.path === location.pathname) ??
        ROUTES.HOME;

    return (
        <header className="navbar" role="banner">
            <h2 className="navbar-title">{currentRoute.label}</h2>

            <div className="navbar-right">
                <Button
                    variant="light"
                    onClick={toggleTheme}
                    className="p-2"
                    aria-label={`Passa al tema ${theme === "light" ? "scuro" : "chiaro"}`}
                >
                    {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
                </Button>

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
