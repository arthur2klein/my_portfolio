import Projet from "./Projet";

const ProjetGPS: React.FC = () => {
    return (
        <Projet
            nom="GPS tracking"
            contexte="Cy-Tech"
            date="December 2023 - January 2024"
            description={[
                "Creation of a Kafka producer to send plausible GPS data",
                "Creation of a consumer to communicate with a service storing the data",
                "Creation of a backend to get this data",
                "Creation of a frontend to use this data in real time",
                "Usage of Docker to start the application",
            ]}
            competences={[
                "Python",
                "FastAPI",
                "JavaScript",
                "PostgreSQL",
                "Svelte",
                "Docker",
                "Kafka",
            ]}
            link="https://github.com/HeavY-Futhark/kafka_gps"
        />
    );
};

export default ProjetGPS;
