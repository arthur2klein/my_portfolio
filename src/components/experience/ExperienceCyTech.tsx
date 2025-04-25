import Experience from "./Experience";

const ExperienceCyTech: React.FC = () => {
    return (
        <Experience
            fonction="Degree in Cloud Computing Engineering"
            lieu="CY-Tech, Pau, France"
            date="September 2021 - July 2024"
            description={[
                "Creation of a GameBoy Emulator in Rust",
                "AI reading of old pdf with Tensorflow",
                "Creation of multiple websites with Sprint, Php, Angular, Svelte, PHP, ...",
                "Facial recognition using ACP in Java.",
                "GPS tracking app using a microservices architecture with Kafka",
                "Movie Recommendation with bubble.io and python",
                "This portfolio",
            ]}
            competences={[
                "Python",
                "C",
                "Java",
                "OCaml",
                "TypeScript",
                "Angular",
                "Other languages and frameworks",
                "Numerous technologies of data management",
                "Algorithms and usage of AI",
                "Big Data",
                "Architecture and Microservices",
            ]}
        />
    );
};

export default ExperienceCyTech;
