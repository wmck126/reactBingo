import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import BingoCard from './components/BingoCard';

function App() {


  return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" exact>
              <Welcome />
            </Route>
            <Route path="/bingoCard">
              <BingoCard />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
      
  );
}

export default App;
