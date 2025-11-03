import * as React from "react";

export interface Route {
    path: string;
    label: string;
    icon?: React.ElementType;
}

import { Home, Users } from "lucide-react";

export const ROUTES: Record<string, Route> = {
    HOME: { path: "/", label: "Home", icon: Home },
    USER_DASHBOARD: { path: "/userDashboard", label: "Gestione utenti", icon: Users }
};
