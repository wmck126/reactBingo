import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import BingoCard from './components/BingoCard';
import Game from './pages/Game';

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
            <Route path="/game">
              <Game />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
      
  );
}

export default App;
