import './Competences.css';

const CompetencesMath: React.FC = () => {
  return (
    <div className="container">

      <h1> Mathématiques et Simulation </h1>
      
      <div className="line">

        <div className="domain">
          <h2>Mathématiques</h2>
          <ul>
            <li>Formation en CPGE MP*</li>
            <li>Optimisation linéaire</li>
            <li>Probabilité et prévisions</li>
          </ul>
        </div>

        <div className="domain">
          <h2>Algorithmes d'IA</h2>
          <ul>
            <li>Méthode de Bayes</li>
            <li>Arbre de prédiction</li>
            <li>Random Forest</li>
            <li>Neural network</li>
            <li>PSO</li>
            <li>LAHC</li>
            <li>Recuit simulé</li>
          </ul>
        </div>


        <div className="domain">
          <h2>Outils d'IA</h2>
          <ul>
            <li>Pyspark</li>
            <li>Scipy</li>
            <li>TensorFlow</li>
            <li>Pandas</li>
        </ul>
        </div>

      </div>
    </div>
  );
};

export default CompetencesMath;

