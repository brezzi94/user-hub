import { createContext, useContext, useState } from "react";
import * as React from "react";
import type {LoggedUser} from "../types/loggedUser.ts";

interface AppContextType {
    loggedUser: LoggedUser | null;
    setLoggedUser: (loggedUser: LoggedUser | null) => void;
    logout: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function useAppContext() {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
}

export function AppProvider({ children }: { children: React.ReactNode }) {
    const [loggedUser, setLoggedUser] = useState<LoggedUser | null>({
        name: "C. Breazzano",
        email: "c.breazzano@example.com",
        avatarUrl: "https://api.dicebear.com/9.x/initials/svg?seed=C%20B",
    });

    const logout = () => setLoggedUser(null);

    return (
        <AppContext.Provider value={{ loggedUser, setLoggedUser, logout }}>
            {children}
        </AppContext.Provider>
    );
}
