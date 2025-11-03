import { useEffect, useState } from "react";
import type {User} from "../types/user.ts";

export function useUsers() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);
                const res = await fetch("/data/users.json");
                if (!res.ok) throw new Error("Errore durante il caricamento utenti");
                const data: User[] = await res.json();
                setUsers(data);
                setTimeout(() => setLoading(false), 200);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    return { users, loading, error };
}
