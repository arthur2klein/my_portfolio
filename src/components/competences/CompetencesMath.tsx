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
            <li>Arbre de prédiction</li>
            <li>Convolutional Neural Network</li>
            <li>Data Assimilation</li>
            <li>Generative Adversarial Network</li>
            <li>Neural Network</li>
            <li>Random Forest</li>
          </ul>
        </div>


        <div className="domain">
          <h2>Outils d'IA</h2>
          <ul>
            <li>CoreNLP</li>
            <li>Google colab</li>
            <li>Jupyter</li>
            <li>Pandas</li>
            <li>Pyspark</li>
            <li>Scipy</li>
            <li>Spark</li>
            <li>SparkNLP</li>
            <li>TensorFlow</li>
        </ul>
        </div>

      </div>
    </div>
  );
};

export default CompetencesMath;

