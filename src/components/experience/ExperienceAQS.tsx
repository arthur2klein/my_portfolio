import Experience from "./Experience";

const ExperienceAQS: React.FC = () => {
    return (
        <Experience
            fonction="Intern and Analyst Programmer, R&D and Project teams at Anaqua Services"
            lieu="Anaqua Services, Pau, France"
            date="April 2024 - Now"
            description={[
                "Development of a Scala + React autonomous and comprehensive application to scrape monitor, and present news related to Intellectual Property for the law team,",
                "Participation to the reworking of internal tooling in PHP and React, tackling challenges with graph representation and handling,",
                "Contributions to the Docker images to allow for safer testing and version upgrades.",
                "Contribution to group projects using PHP and Typescript to rework internal tools used by the legal team and create a pleasant and complete tool,",
                "Small projects to allow and improve scalability and overall architecture using Python and Go to manage RabbitMQ and Azure services,",
                "Improvements to DevOps related tools to improve the CI pipeline and local testing.",
            ]}
            competences={[
                "PHP",
                "Symfony",
                "Typescript",
                "React",
                "Gitlab CI",
                "Docker",
                "Scala",
                "Go",
                "Python",
                "SparkNLP",
                "Test Driven Development",
                "Domain Driven Development",
            ]}
        />
    );
};

export default ExperienceAQS;
