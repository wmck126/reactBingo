import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {


  return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/testing">
              <h1>Test Route</h1>
            </Route>
            <Route path="/" exact>
              <h1>Page counter</h1>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
      
  );
}

export default App;
