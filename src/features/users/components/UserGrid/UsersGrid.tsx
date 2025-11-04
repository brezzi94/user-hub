import {Card, Spinner} from "react-bootstrap";
import "./UsersGrid.css";
import type {User} from "../../types/user.ts";

interface UsersGridProps {
    users: User[];
    onSelect: (user: User) => void;
    loading: boolean;
}

export default function UsersGrid({ users, onSelect, loading }: UsersGridProps) {
    if (loading) {
        return <p className="spinner-grid d-flex justify-content-center text-center py-3">
            <Spinner animation="border" role="status" />
            <span className="span-grid ms-2 text-muted">Caricamento utenti...</span>
        </p>
    } else if (users.length === 0) {
        return <p className="text-center py-6">Nessun utente trovato.</p>;
    }

    return (
        <div className="users-grid" aria-label="Elenco utenti in visualizzazione card">
            {users.map((user) => (
                <Card
                    as="article"
                    key={user.id}
                    className="user-card"
                    role="button"
                    tabIndex={0}
                    aria-label={`Apri dettagli di ${user.nome} ${user.cognome}`}
                    onClick={() => onSelect(user)}
                    onKeyDown={(e) => e.key === "Enter" && onSelect(user)}
                >
                    <div className="user-card-header">
                        <div>
                            <h5 className="user-name">
                                {user.nome} {user.cognome}
                            </h5>
                            <p className="user-email">{user.email}</p>
                        </div>
                    </div>

                    <div className="user-card-footer">
                        <span className="user-role">{user.ruolo}</span>
                    </div>
                </Card>
            ))}
        </div>
    );
}