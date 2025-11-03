import {useState} from "react";
import UsersTable from "../components/UserTable/UserTable.tsx";
import {Button, Container} from "react-bootstrap";
import Select from "../../../components/ui/Select/Select.tsx";
import SearchBar from "../../../components/ui/SearchBar/SearchBar.tsx";
import "./UserDashboard.css";
import type {User} from "../types/user.ts";

const users: User[] = [
    {
        "id": 1,
        "nome": "Mario",
        "cognome": "Rossi",
        "email": "mario.rossi@example.com",
        "ruolo": "Admin",
        "status": "Attivo"
    }]

export default function UsersDashboard() {
    const [search, setSearch] = useState("");
    const [selectedRole, setSelectedRole] = useState<string>("all");

    return (
        <Container className="user-dashboard">
            <header className="dashboard-header mb-4">
                <h4 className="dashboard-title">
                    Filtra gli utenti per ruolo
                </h4>
            </header>

            <div className="filters mb-4">
                <div className="filter-group">
                    <Select
                        className="filter-select"
                        options={[" ", "Admin", "Editor", "Viewer"]}
                        value={selectedRole}
                        onChange={(value) => setSelectedRole(value)}
                    />
                    <Button
                        variant="secondary"
                        className="filter-button"
                    >
                        Cerca
                    </Button>
                </div>

                <div className="search-wrapper">
                    <SearchBar search={search} setSearch={setSearch} />
                </div>
            </div>

            <main>
                <UsersTable users={users}/>
            </main>
        </Container>
    );
}
