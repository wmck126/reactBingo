import './App.css';
import {Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Game from './pages/Game';
import CardSelect from './pages/CardSelect';
import { useState } from 'react';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

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
            <Route
              path="/signup"
              element={<SignUp />}
              />
            <Route
              path="/login"
              element={<Login />}
            />
          </Routes>
        </div>
      
  );
}

export default App;
