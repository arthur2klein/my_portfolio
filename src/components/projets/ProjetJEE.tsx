import Projet from "./Projet";

const ProjetJEE: React.FC = () => {
    return (
        <Projet
            nom="Spring WebSite"
            contexte="Cy-Tech"
            date="November 2022 - December 2022"
            description={[
                "Creation of a small website to manage tennis tournament in Spring and Java",
                "Creation of a MariaDB database",
                "Dockerisation of the projet (November 2023)",
            ]}
            competences={["Java", "Spring", "MariaDB", "Docker"]}
            link="https://github.com/arthur2klein/projetJEE_MaghraouiMighisKlein"
        />
    );
};

export default ProjetJEE;
