import './App.css';
import {Routes, Route, useNavigate } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Game from './pages/Game';
import CardSelect from './pages/CardSelect';
import { useEffect, useState } from 'react';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import { UserContext } from './components/Context';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { signOut } from 'firebase/auth'

function App() {

  const [numberCards, setNumberCards] = useState(5)
  const [user, setUser] = useState(null)
  const [loggedIn, setLoggedIn] = useState(false)
  const [userData, setUserData] = useState([])
  const [difficulty, setDifficulty] = useState(0)
  const [pot, setPot] = useState(0)
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleReturnToHome() {
    navigate('/')
  }

  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate("/login")
      setLoggedIn(false)
      console.log("Signed out successfully")
    }).catch((error) => {
      console.log(error)
    })
  }

  if (!user) return(
    <Routes>
      <Route 
        path="/" 
        exact
        element={<Login />}
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
  )
  
  return (
        <div className="App">
          <UserContext.Provider value={user}>
            <nav id="navbar">
              <img 
                id="bingoLogo" 
                src='https://img.freepik.com/free-vector/bingo-neon-lettering-explosion_1262-20711.jpg' 
                alt="bingoLogo"
                onClick={() => handleReturnToHome()}
              />
              <ul className="dropdown">
                <li className='username-nav'><button className='dropdown' >{userData.username}</button>
                  <ul>
                    <li onClick={handleLogout}><button href='#'>Logout</button></li>
                  </ul>
                  </li>
              </ul>
            </nav>
            <Routes>
              <Route 
                path="/" 
                exact
                element={<Welcome
                  user={user} 
                  setLoggedIn={setLoggedIn} 
                  setUserData={setUserData} 
                  userData={userData}/>}
              />
              <Route 
                path="/bingoCard"
                element={<CardSelect 
                  setPot={setPot} 
                  user={user} 
                  setNumberCards={setNumberCards} 
                  userData={userData} 
                  setDifficulty={setDifficulty}/>}
              />
              <Route 
                path="/game"
                element={<Game 
                  numberCards={numberCards} 
                  user={user} 
                  userData={userData} 
                  difficulty={difficulty}
                  pot={pot}
                  />}
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
