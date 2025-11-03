import * as React from "react";
import Navbar from "./Navbar.tsx";
import Sidebar from "./Sidebar.tsx";
import "./Layout.css";

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="layout">
            <Sidebar />
            <div className="main-content">
                <Navbar />
                <main id="main-content" className="page-content" role="main" tabIndex={-1}>
                    {children}
                </main>
            </div>
        </div>
    )
}