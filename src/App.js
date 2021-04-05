import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PokemonList from './container/PokemonList';
import PokemonDetails from './components/PokemonDetails';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <PokemonList />
        </Route>
        <Route path="/pokemon/:id">
          <PokemonDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
