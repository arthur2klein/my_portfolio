import Experience from "./Experience";

const ExperienceTotal: React.FC = () => {
    return (
        <Experience
            fonction="Intern, Adaptation of a Python software"
            lieu="TotalEnergies, Pau, France"
            date="July 2023 - September 2023"
            description={[
                "Error Correction in a Data Assimilation program",
                "Several changes to the project architecture",
                "Adaptation to TotalEnergies's tools",
                "Small results analysis",
            ]}
            competences={["Python", "Data Assimilation", "Git"]}
        />
    );
};

export default ExperienceTotal;
