import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';

function App() {
  return (
    <Router>

      <div>
        <Switch>
          <Route exact path="/">
            <PokemonList />
          </Route>
          <Route>
            <PokemonDetails path="/pokemon/:id" />
          </Route>
        </Switch>

      </div>

    </Router>
  );
}

export default App;
