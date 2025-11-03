import { ROUTES } from "../../constants/routes";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
    const routes = [ROUTES.HOME, ROUTES.USER_DASHBOARD];

    return (
        <aside className="sidebar" aria-label="Menu di navigazione principale">
            <div className="sidebar-header">
                <h2 className="app-title">UserHub</h2>
            </div>

            <nav className="sidebar-nav" role="navigation">
                <ul>
                    {routes.map(({ path, label, icon: Icon }) => (
                        <li key={path}>
                            <NavLink
                                to={path}
                                className={({ isActive }) =>
                                    `sidebar-link ${isActive ? "active" : ""}`
                                }
                            >
                                {Icon && <Icon className="icon" size={18} />}
                                <span>{label}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}