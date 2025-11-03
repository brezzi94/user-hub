import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import { Users } from "lucide-react";
import { Card, Container } from "react-bootstrap";
import "./HomePage.css";

export default function HomePage() {
    const navigate = useNavigate();

    return (
        <Container as="section" className="homepage-container" aria-labelledby="homepage-title">
            <div className="text-center mb-4">
                <h2 id="homepage-title" className="homepage-title">Benvenuto in <span className="brand-accent">UserHub</span></h2>
                <p className="homepage-subtitle">
                    Gestisci e visualizza gli utenti della piattaforma in modo semplice e intuitivo.
                </p>
            </div>

            <section
                className="homepage-sections"
                aria-label="Sezioni principali della dashboard"
            >
                <Card as="article"
                      role="button"
                      tabIndex={0}
                      className="homepage-card"
                      onClick={() => navigate(ROUTES.USER_DASHBOARD.path)}
                      onKeyDown={(e) => e.key === "Enter" && navigate(ROUTES.USER_DASHBOARD.path)}
                      aria-label="Vai alla sezione Gestione Utenti"
                >
                    <div className="homepage-card-content">
                        <div className="homepage-icon" aria-hidden="true">
                            <Users size={26} />
                        </div>
                        <div>
                            <h4 className="homepage-card-title">Gestione Utenti</h4>
                            <p className="homepage-card-text">
                                Visualizza e filtra i dettagli di ogni utente.
                            </p>
                        </div>
                    </div>
                </Card>
            </section>
        </Container>
    );
}