export interface User {
    id: number;
    nome: string;
    cognome: string;
    email: string;
    ruolo: "Admin" | "Editor" | "Viewer";
    status: "Attivo" | "Sospeso";
}