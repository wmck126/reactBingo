import './App.css';
import {Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Game from './pages/Game';
import CardSelect from './pages/CardSelect';
import { useState } from 'react';

function App() {

  const [numberCards, setNumberCards] = useState(5)

  return (
        <div className="App">
          <Routes>
            <Route 
              path="/" 
              exact
              element={<Welcome />}
            />
            <Route 
              path="/bingoCard"
              element={<CardSelect setNumberCards={setNumberCards} />}
            />
            <Route 
              path="/game"
              element={<Game numberCards={numberCards}/>}
              />
          </Routes>
        </div>
      
  );
}

export default App;
