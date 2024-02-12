import './Experience.css';

const ExperienceLycee: React.FC = () => {
  return (
    <div className="container">

      <div className="experience">
        <h1 id="fonction">Bac S Abibac</h1>
        <h3 id="date">Septembre 2015- Juillet 2019</h3>
        <h2 id="lieu">Lycée Jean de Panges, Sarreguemines, France</h2>
        <ul id="description">
          <li>Sites web basiques</li>
          <li>Automates cellulaires en python</li>
          <li>Jeux divers (démineur, 2048)</li>
        </ul>
        <ul id="competences">
          <li>Python</li>
          <li>html</li>
          <li>css</li>
        </ul>
      </div>

    </div>
  );
};

export default ExperienceLycee;

