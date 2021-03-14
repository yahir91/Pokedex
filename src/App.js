import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>

      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <PokemonList />
          </Route>
          <Route path="/pokemon/:id">
            <PokemonDetails />
          </Route>
        </Switch>

      </div>

    </Router>
  );
}

export default App;
