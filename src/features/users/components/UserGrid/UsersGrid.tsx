import { Card } from "react-bootstrap";
import "./UsersGrid.css";
import type {User} from "../../types/user.ts";

interface UsersGridProps {
    users: User[];
    onSelect: (user: User) => void;
}

export default function UsersGrid({ users, onSelect }: UsersGridProps) {
    if (users.length === 0) {
        return <p className="text-center py-6">Nessun utente trovato.</p>;
    }

    return (
        <div className="users-grid">
            {users.map((user) => (
                <Card
                    key={user.id}
                    className="user-card"
                    onClick={() => onSelect(user)}
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
