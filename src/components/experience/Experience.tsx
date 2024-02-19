import './Experience.css';

interface ExperienceProps {
  fonction: string;
  lieu: string;
  date: string;
  description: string[];
  competences: string[];
}

const Experience: React.FC<ExperienceProps> = ({
  fonction,
  lieu,
  date,
  description,
  competences,
}) => {
  return (
    <div className="container">

      <div className="experience">
        <h1 id="fonction">{ fonction }</h1>
        <h2 id="lieu">{ lieu }</h2>
        <h3 id="date">{ date }</h3>
        <h4>Missions: </h4>
        <ul id="description">
          {description.map((item) => (
            <li>{ item }</li>
          ))}
        </ul>
        <h4>Compétences: </h4>
        <ul id="competences">
          {competences.map((item) => (
            <li>{ item }</li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default Experience;

