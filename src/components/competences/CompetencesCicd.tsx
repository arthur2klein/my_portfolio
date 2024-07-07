import './Competences.css';

const CompetencesCicd: React.FC = () => {
  return (
    <div className="container">

      <h1> CICD </h1>
      
      <div className="line">

        <div className="domain">
          <h2>VCS</h2>
          <ul>
            <li>Git</li>
            <li>Github</li>
            <li>Gitlab</li>
          </ul>
        </div>

        <div className="domain">
          <h2>Conteneurisation</h2>
          <ul>
            <li>Docker</li>
            <li>Kubernetes</li>
          </ul>
        </div>

        <div className="domain">
          <h2>Gestion de Clusters</h2>
          <ul>
            <li>Ansible</li>
            <li>Terraform</li>
          </ul>
        </div>

        <div className="domain">
          <h2>Pipeline</h2>
          <ul>
            <li>Gilab CI</li>
            <li>Github actions</li>
            <li>Jenkins</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default CompetencesCicd;

