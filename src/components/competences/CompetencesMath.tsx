import './Competences.css';

const CompetencesMath: React.FC = () => {
  return (
    <div className="container">

      <h1> IA et Simulation </h1>
      
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
            <li>Data Assimilation</li>
            <li>Arbre de prédiction</li>
            <li>Random Forest</li>
            <li>Neural Network</li>
            <li>Convolutional Neural Network</li>
            <li>Generative Adversarial Network</li>
          </ul>
        </div>


        <div className="domain">
          <h2>Outils d'IA</h2>
          <ul>
            <li>Pyspark</li>
            <li>Scipy</li>
            <li>TensorFlow</li>
            <li>Pandas</li>
            <li>Jupyter</li>
            <li>Google colab</li>
        </ul>
        </div>

      </div>
    </div>
  );
};

export default CompetencesMath;

