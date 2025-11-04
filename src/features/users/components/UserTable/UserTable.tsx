import {Card, Spinner, Table} from "react-bootstrap";
import "./UserTable.css";
import type {User} from "../../types/user.ts";

interface UsersTableProps {
    users: User[];
    onSelect: (user: User) => void;
    loading: boolean;
}

export default function UsersTable({ users, onSelect, loading }: UsersTableProps) {
    return (
        <Card className="table-card" aria-label="Elenco utenti">
            <div className="table-responsive">
                <Table hover className="align-middle mb-0">
                    <thead className="table-light">
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Cognome</th>
                        <th scope="col">Email</th>
                        <th scope="col">Ruolo</th>
                    </tr>
                    </thead>
                    <tbody>
                    {loading ? (
                        <tr>
                            <td colSpan={4} className="text-center py-3">
                                <Spinner animation="border" role="status" />
                                <span className="ms-2 text-muted">Caricamento utenti...</span>
                            </td>
                        </tr>
                    ) : users.length === 0 ? (
                        <tr>
                            <td colSpan={4} className="text-center py-3 text-muted">
                                Nessun utente trovato.
                            </td>
                        </tr>
                    ) : (
                        users.map((user) => (
                            <tr
                                key={user.id}
                                onClick={() => onSelect(user)}
                                onKeyDown={(e) => e.key === "Enter" && onSelect(user)}
                                role="button"
                                tabIndex={0}
                                aria-label={`Dettagli di ${user.nome} ${user.cognome}`}
                            >
                                <td>{user.nome}</td>
                                <td>{user.cognome}</td>
                                <td>{user.email}</td>
                                <td>{user.ruolo}</td>
                            </tr>
                        ))
                    )}
                    </tbody>
                </Table>
            </div>
        </Card>
    );
}