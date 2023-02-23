import './App.css';
import {Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Game from './pages/Game';
import CardSelect from './pages/CardSelect';
import { useEffect, useState } from 'react';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import {db} from './firebase'
import {collection, doc, getDocs} from 'firebase/firestore'
import { UserContext } from './components/Context';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

function App() {

  const [numberCards, setNumberCards] = useState(5)
  const [user, setUser] = useState(null)
  const usersCollectionRef = collection(db, "users")
  const navigate = useNavigate()


  useEffect(() => {
    onAuthStateChanged(auth,(user) => {
      if (user){
        const uid = user.uid
        setUser(user)
        console.log('user', user)
      } else {
        console.log('user is signed out')
      }
    })
  }, [])

  if (!user) return (<Login />)
  
  return (
        <div className="App">
          <UserContext.Provider value={user}>
            <Routes>
              <Route 
                path="/" 
                exact
                element={<Welcome user={user} />}
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
                element={<SignUp />}
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
