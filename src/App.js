import React, {useState} from 'react';
import './App.css';

function App() {
  const dictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState("");

  const searchHandler = (e) => {
    e.preventDefault();
    const foundWord = dictionary.find(
      (item) => item.word.toLowerCase() === searchTerm.toLowerCase()
    );
    if (foundWord) {
      setResult(foundWord.meaning);
    } else {
      setResult("Word not found in the dictionary.");
    }
  };

  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <input value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} 
          placeholder="Search for a word..."></input>
      <button onClick={searchHandler}>Search</button>
      <h4>Defination: </h4>
      <p>{result}</p>
    </div>
  );
}

export default App;
