import {useEffect, useState} from "react";
import UsersTable from "../components/UserTable/UserTable.tsx";
import { useUsers } from "../hooks/useUsers";
import { LayoutGrid, Table } from "lucide-react";
import {Button, Container} from "react-bootstrap";
import Select from "../../../components/ui/Select/Select.tsx";
import UsersGrid from "../components/UserGrid/UsersGrid.tsx";
import ModalCustom from "../../../components/ui/Modal/Modal.tsx";
import SearchBar from "../../../components/ui/SearchBar/SearchBar.tsx";
import "./UserDashboard.css";
import PaginationCustom from "../../../components/ui/Pagination/PaginationCustom.tsx";
import type {User} from "../types/user.ts";

export default function UsersDashboard() {
    const { users, loading, error } = useUsers();
    const [search, setSearch] = useState("");
    const [selectedRole, setSelectedRole] = useState<string>("all");
    const [role, setRole] = useState<string>("all");
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [view, setView] = useState<"table" | "grid">("table");

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState<number>(view === "table" ? 5 : 8);

    const indexOfLastUser = currentPage * Number(itemsPerPage);
    const indexOfFirstUser = indexOfLastUser - Number(itemsPerPage);

    if (error)
        return <p className="text-center text-danger py-3">Errore: {error}</p>;

    const filteredUsers = users.filter((user) => {
        const matchesRole = role === "all" || user.ruolo.toLowerCase() === role;
        const matchesName = `${user.nome} ${user.cognome}`
            .toLowerCase()
            .includes(search.toLowerCase());
        return matchesRole && matchesName;
    });

    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser)

    const handlePageChange = (page: number) => setCurrentPage(page);

    useEffect(() => {
        setCurrentPage(1)
    }, [view, itemsPerPage]);

    useEffect(() => {
        setItemsPerPage(view === "table" ? 5 : 8)
    }, [view]);

    return (
        <Container as="section" className="user-dashboard" aria-labelledby="user-dashboard-title">
            <header className="dashboard-header d-flex justify-content-between align-items-center flex-wrap mb-4">
                <h4 id="user-dashboard-title" className="dashboard-title">
                    Filtra gli utenti per ruolo
                </h4>

                <div className="view-toggle d-flex gap-2 mt-2 mt-md-0">
                    <Button
                        variant={view === "table" ? "secondary" : "light"}
                        onClick={() => setView("table")}
                        aria-pressed={view === "table"}
                        aria-label="Visualizza in tabella"
                    >
                        <Table size={16} /> Tabella
                    </Button>
                    <Button
                        variant={view === "grid" ? "secondary" : "light"}
                        onClick={() => setView("grid")}
                        aria-pressed={view === "grid"}
                        aria-label="Visualizza in card"
                    >
                        <LayoutGrid size={16} /> Card
                    </Button>
                </div>
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
                        onClick={() => setRole(selectedRole)}
                        aria-label="Applica filtro per ruolo"
                        className="filter-button"
                    >
                        Cerca
                    </Button>
                </div>

                <div className="search-wrapper">
                    <SearchBar search={search} setSearch={setSearch} aria-label="Cerca per nome o cognome" />
                </div>
            </div>

            <main>
                    <>
                        {view === "table" ? (
                            <UsersTable users={currentUsers} onSelect={setSelectedUser} loading={loading} />
                        ) : (
                            <UsersGrid users={currentUsers} onSelect={setSelectedUser} loading={loading}/>
                        )}

                            <div className="pagination-container d-flex justify-content-between align-items-center mt-3 flex-wrap">
                                <div className="d-flex align-items-center gap-2 mostra-wrapper mb-2 mb-md-0">
                                    <label htmlFor="mostra-select" className="mb-0 text-muted small">
                                        Mostra
                                    </label>
                                    <Select
                                        className="mostra-select"
                                        options={view==="table" ? ["5", "10", "20", "30"] : ["8", "16", "32", "64"]}
                                        value={String(itemsPerPage)}
                                        onChange={(value) => setItemsPerPage(Number(value))}
                                    />
                                    <span className="text-muted small">per pagina</span>
                                </div>

                                <PaginationCustom
                                    currentPage={currentPage}
                                    handlePageChange={handlePageChange}
                                    itemsPerPage={Number(itemsPerPage)}
                                    elements={filteredUsers}
                                />
                            </div>
                    </>
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