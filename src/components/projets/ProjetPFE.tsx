import Projet from "./Projet";

const ProjetPFE: React.FC = () => {
    return (
        <Projet
            nom="Final year project: Secured Messaging App"
            contexte="Cy-Tech"
            date="January 2024 - March 2024"
            description={[
                "Creation of a secured messaging app in React and Python",
                "Implementation of measures for application security",
            ]}
            competences={["Python", "FastAPI", "React", "Cybersecurity", "PostgreSQL"]}
            link=""
        />
    );
};

export default ProjetPFE;
