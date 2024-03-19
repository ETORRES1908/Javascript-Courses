import React, { useState } from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';



function App() {
const [keyword, setKeyword] = useState('tohsaka');
  return (
    <div className="App">
      <section className="App-content">
        <button onClick={() => setKeyword('saber') }>Cambiar Gifs</button> 
        <ListOfGifs keyword={keyword}></ListOfGifs>
      </section>
    </div>
  );
}

export default App;
