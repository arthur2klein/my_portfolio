import Experience from "./Experience";

const ExperienceKarnten: React.FC = () => {
    return (
        <Experience
            fonction="Intern, mobile development"
            lieu="CISMAT (Carinthia Institute of Smart Materials), Fachhochschule Kärnten, Villach, Autriche"
            date="June 2022 - August 2022"
            description={[
                "Development of an Android application to view and export data",
                "Development of a Java program to transmit data from a captor to the app using Sockets",
            ]}
            competences={["Kotlin Framework for Android", "German"]}
        />
    );
};

export default ExperienceKarnten;
