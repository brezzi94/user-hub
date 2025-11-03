import { describe, it, expect } from "vitest";

interface User {
    id: number;
    nome: string;
    cognome: string;
    email: string;
    ruolo: "Admin" | "Editor" | "Viewer";
}

const users: User[] = [
    { id: 1, nome: "Luca", cognome: "Rossi", email: "luca@ex.com", ruolo: "Admin" },
    { id: 2, nome: "Maria", cognome: "Verdi", email: "maria@ex.com", ruolo: "Editor" },
    { id: 3, nome: "Marco", cognome: "Bianchi", email: "marco@ex.com", ruolo: "Viewer" },
];

function filterUsers(users: User[], search: string, role: string) {
    return users.filter((u) => {
        const matchesRole = role === "all" || u.ruolo.toLowerCase() === role;
        const matchesName = `${u.nome} ${u.cognome}`.toLowerCase().includes(search.toLowerCase());
        return matchesRole && matchesName;
    });
}

describe("filterUsers", () => {
    it("filtra correttamente per ruolo", () => {
        const result = filterUsers(users, "", "admin");
        expect(result).toHaveLength(1);
        expect(result[0].nome).toBe("Luca");
    });

    it("filtra correttamente per nome", () => {
        const result = filterUsers(users, "mar", "all");
        expect(result.length).toBeGreaterThanOrEqual(1);
        expect(result.some(u => u.nome === "Marco")).toBe(true);
    });

    it("filtra per nome e ruolo insieme", () => {
        const result = filterUsers(users, "ma", "editor");
        expect(result).toHaveLength(1);
        expect(result[0].nome).toBe("Maria");
    });
});
