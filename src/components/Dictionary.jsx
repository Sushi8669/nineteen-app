import React, { useState } from 'react';
import axios from 'axios';

const Dictionary = () => {
  const [dist, setDist] = useState([]);
  const [word, setWord] = useState(' ');

  const fetchData = () => {
    axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then(res => {
        setDist(res.data);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="text-center my-10">
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="Type your word..."
          className="text-lg border border-gray-400 rounded px-3 py-2 w-72"
        />
        <button
          onClick={fetchData}
          className="ml-2 px-5 py-2 bg-blue-500 text-white text-lg rounded hover:bg-blue-600"
        >
          Search
        </button>
      </div>

      <div className="max-w-3xl mx-auto bg-white rounded p-6 shadow">
        {dist.map((d, index) => (
          <div key={index} className="mb-6">
            <h1 className="text-2xl font-bold text-black mb-2">Word: {d.word}</h1>
            <p className="text-gray-700 mb-3">Origin: {d.origin}</p>
            {d.meanings.map((meaning, i) => (
              <div key={i} className="mb-2">
                <h2 className="text-lg font-semibold text-blue-600">Part of Speech: {meaning.partOfSpeech}</h2>
                {meaning.definitions.map((def, j) => (
                  <p key={j} className="text-gray-800 ml-4">Definition: {def.definition}</p>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dictionary;
