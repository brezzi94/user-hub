import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import UsersTable from "../features/users/components/UserTable/UserTable.tsx";
import type {User} from "../features/users/types/user.ts";

const mockUsers: User[] = [
    { id: 1, nome: "Luca", cognome: "Rossi", email: "luca@ex.com", ruolo: "Admin", status: "Attivo" },
    { id: 2, nome: "Maria", cognome: "Verdi", email: "maria@ex.com", ruolo: "Editor", status: "Attivo" },
];

describe("UsersTable component", () => {
    it("renders all users", () => {
        render(<UsersTable users={mockUsers} onSelect={() => {}} />);
        expect(screen.getByText("Luca")).toBeInTheDocument();
        expect(screen.getByText("Maria")).toBeInTheDocument();
    });

    it("shows message when no users", () => {
        render(<UsersTable users={[]} onSelect={() => {}} />);
        expect(screen.getByText(/nessun utente trovato/i)).toBeInTheDocument();
    });

    it("calls onSelect when a row is clicked", () => {
        const handleSelect = vi.fn();
        render(<UsersTable users={mockUsers} onSelect={handleSelect} />);
        const firstRow = screen.getByText("Luca");
        fireEvent.click(firstRow);
        expect(handleSelect).toHaveBeenCalledOnce();
    });
});
