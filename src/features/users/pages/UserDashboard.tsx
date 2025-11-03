import {useState} from "react";
import UsersTable from "../components/UserTable/UserTable.tsx";
import {Button, Container, Spinner} from "react-bootstrap";
import Select from "../../../components/ui/Select/Select.tsx";
import SearchBar from "../../../components/ui/SearchBar/SearchBar.tsx";
import "./UserDashboard.css";
import {useUsers} from "../hooks/useUsers.tsx";
import ModalCustom from "../../../components/ui/Modal/Modal.tsx";
import type {User} from "../types/user.ts";

export default function UsersDashboard() {
    const { users, loading, error } = useUsers();
    const [search, setSearch] = useState("");
    const [selectedRole, setSelectedRole] = useState<string>("all");
    const [role, setRole] = useState<string>("all");
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "200px" }}>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Caricamento...</span>
                </Spinner>
            </div>
        );
    }
    if (error)
        return <p className="text-center text-danger py-3">Errore: {error}</p>;

    const filteredUsers = users.filter((user) => {
        const matchesRole = role === "all" || user.ruolo.toLowerCase() === role;
        const matchesName = `${user.nome} ${user.cognome}`
            .toLowerCase()
            .includes(search.toLowerCase());
        return matchesRole && matchesName;
    });

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
                        onClick={() => setRole(selectedRole)}
                    >
                        Cerca
                    </Button>
                </div>

                <div className="search-wrapper">
                    <SearchBar search={search} setSearch={setSearch} />
                </div>
            </div>

            <main>
                {!loading && (
                    <UsersTable users={filteredUsers} onSelect={setSelectedUser}/>
                )}
            </main>

            <ModalCustom
                title="Dettaglio utente"
                show={!!selectedUser}
                handleClose={() => setSelectedUser(null)}
            >
                {selectedUser && (
                    <div className="user-modal-content text-center">
                        <img
                            src={`https://api.dicebear.com/9.x/initials/svg?seed=${selectedUser.nome}+${selectedUser.cognome}`}
                            alt={`${selectedUser.nome} ${selectedUser.cognome}`}
                            className="user-modal-avatar"
                        />

                        <h3 className="user-modal-name mt-3">
                            {selectedUser.nome} {selectedUser.cognome}
                        </h3>
                        <p className="user-modal-email">{selectedUser.email}</p>

                        <div className="user-modal-info mt-4">
                            <div className="info-item">
                                <span className="label">Ruolo</span>
                                <span className="value">{selectedUser.ruolo}</span>
                            </div>

                            <div className="info-item">
                                <span className="label">Stato</span>
                                <span
                                    className={`badge ${
                                        selectedUser.status === "Attivo"
                                            ? "badge-success"
                                            : "badge-danger"
                                    }`}
                                >
                                {selectedUser.status}
                                </span>
                            </div>
                        </div>
                    </div>
                )}
            </ModalCustom>
        </Container>
    );
}
