import React, { useState } from 'react';
import './App.css'; // You may need to adjust the CSS file path

function App() {
  const [inputs, setInputs] = useState({
    fixedAcidity: '',
    volatileAcidity: '',
    citricAcid: '',
    residualSugar: '',
    chlorides: '',
    freeSulfurDioxide: '',
    totalSulfurDioxide: '',
    density: '',
    pH: '',
    sulphates: '',
    alcohol: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can send the input data to your backend or perform any other actions
    console.log(inputs);
  };

  return (
    <div className="App">
      <h1>Wine Quality Prediction</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Fixed Acidity:</label>
          <input type="text" name="fixedAcidity" value={inputs.fixedAcidity} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Volatile Acidity:</label>
          <input type="text" name="volatileAcidity" value={inputs.volatileAcidity} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Citric Acid:</label>
          <input type="text" name="citricAcid" value={inputs.citricAcid} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Residual Sugar:</label>
          <input type="text" name="residualSugar" value={inputs.residualSugar} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Chlorides:</label>
          <input type="text" name="chlorides" value={inputs.chlorides} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Free Sulfur Dioxide:</label>
          <input type="text" name="freeSulfurDioxide" value={inputs.freeSulfurDioxide} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Total Sulfur Dioxide:</label>
          <input type="text" name="totalSulfurDioxide" value={inputs.totalSulfurDioxide} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Density:</label>
          <input type="text" name="density" value={inputs.density} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>pH:</label>
          <input type="text" name="pH" value={inputs.pH} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Sulphates:</label>
          <input type="text" name="sulphates" value={inputs.sulphates} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Alcohol:</label>
          <input type="text" name="alcohol" value={inputs.alcohol} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;

