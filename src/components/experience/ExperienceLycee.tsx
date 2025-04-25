import Experience from "./Experience";

const ExperienceLycee: React.FC = () => {
    return (
        <Experience
            fonction="Bac S Abibac"
            date="September 2015- July 2019"
            lieu="Lycée Jean de Panges, Sarreguemines, France"
            description={[
                "Basic WebSite",
                "Cellular automaton in python",
                "Small games (minesweeper, 2048)",
            ]}
            competences={["Python", "html", "css"]}
        />
    );
};

export default ExperienceLycee;
