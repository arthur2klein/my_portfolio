import Experience from "./Experience";

const ExperiencePrepa: React.FC = () => {
    return (
        <Experience
            fonction="CPGE MP*"
            date="Septembre 2019 - Juillet 2021"
            lieu="Lycée Fabert, Metz, France"
            description={[
                "Several examination exercises with python and OCaml",
                "Simulation of the evacuation of a buildind in C++",
            ]}
            competences={[
                "Mathematics",
                "Python",
                "OCaml",
                "C++",
                "Algorithms",
                "Time Complexity",
                "Data Structure",
            ]}
        />
    );
};

export default ExperiencePrepa;
