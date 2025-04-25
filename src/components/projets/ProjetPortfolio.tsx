import Projet from "./Projet";

const ProjetPortfolio: React.FC = () => {
    return (
        <Projet
            nom="This Portfolio"
            contexte="Cy-Tech"
            date="January 2024 - March 2024"
            description={["Creation of this Resume in React and Ionic"]}
            competences={["Ionic", "React", "TypeScript"]}
            link="https://github.com/arthur2klein/my_portfolio"
        />
    );
};

export default ProjetPortfolio;
