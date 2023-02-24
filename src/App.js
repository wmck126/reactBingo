import './App.css';
import {Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Game from './pages/Game';
import CardSelect from './pages/CardSelect';
import { useEffect, useState } from 'react';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import { UserContext } from './components/Context';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';

function App() {

  const [numberCards, setNumberCards] = useState(5)
  const [user, setUser] = useState(null)
  const [loggedIn, setLoggedIn] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth,(user) => {
      if (user){
        setUser(user)
        setLoggedIn(true)
      } else {
        navigate("/login")
        setUser(null)
        setLoggedIn(false)
      }
    })
  }, [])


  
  return (
        <div className="App">
          <UserContext.Provider value={user}>
            <Routes>
              <Route 
                path="/" 
                exact
                element={<Welcome user={user} setLoggedIn={setLoggedIn}/>}
              />
              <Route 
                path="/bingoCard"
                element={<CardSelect user={user} setNumberCards={setNumberCards} />}
              />
              <Route 
                path="/game"
                element={<Game numberCards={numberCards} user={user}/>}
                />
              <Route
                path="/signup"
                element={<SignUp loggedIn={loggedIn}/>}
                />
              <Route
                path="/login"
                element={<Login />}
              />
            </Routes>
          </UserContext.Provider>
        </div>
      
  );
}
export default App;
