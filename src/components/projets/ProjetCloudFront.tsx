import Projet from "./Projet";

const ProjetCloudFront: React.FC = () => {
    return (
        <Projet
            nom="Cloud Front Project"
            contexte="Cy-Tech"
            date="November 2024 - December 2024"
            description={[
                "Creation of an organization app in Angular",
                "Association with a Firebase database",
            ]}
            competences={["TypeScript", "Angular", "Firebase"]}
            link="https://github.com/arthur2klein/CloudFront_2023"
        />
    );
};

export default ProjetCloudFront;
