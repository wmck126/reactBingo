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

function App() {

  const [numberCards, setNumberCards] = useState(5)
  const [users, setUsers] = useState([])
  const usersCollectionRef = collection(db, "users")


  useEffect(() => {
    const getUsers = async () =>{
      const data = await getDocs(usersCollectionRef)
      setUsers(data.docs.map((docs) => ({...doc.data(), id: doc.id})))
    }
    getUsers()
  }, [])


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
