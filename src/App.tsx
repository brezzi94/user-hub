import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from "./features/home/pages/HomePage.tsx";
import Layout from "./components/layout/Layout.tsx";
import {ROUTES} from "./constants/routes.ts";
import 'bootstrap/dist/css/bootstrap.min.css';
import UsersDashboard from "./features/users/pages/UserDashboard.tsx";


function App() {

    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path={ROUTES.HOME.path} element={<HomePage />} />
                    <Route path={ROUTES.USER_DASHBOARD.path} element={<UsersDashboard />} />
                </Routes>
            </Layout>
        </Router>
    )
}

export default App
