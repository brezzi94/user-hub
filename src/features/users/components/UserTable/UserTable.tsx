import {Card, Table} from "react-bootstrap";
import "./UserTable.css";
import type {User} from "../../types/user.ts";

interface UsersTableProps {
    users: User[];
}

export default function UsersTable({ users } : UsersTableProps) {
    return (
        <Card className="table-card">
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
                        {users.length === 0 ? (
                            <tr>
                                <td colSpan={4} className="text-center py-3 text-muted">
                                    Nessun utente trovato.
                                </td>
                            </tr>
                        ) : (
                            users.map((user) => (
                                <tr key={user.id}
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