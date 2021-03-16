import '../styles/pokemonFilter.css';
import PropTypes from 'prop-types';

const PokemonFilter = ({ event }) => {
  const categoryList = ['All', 'fire', 'water', 'grass', 'normal', 'electric', 'ice', 'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost', 'dragon', 'fairy'];
  return (
    <div className="category">
      <span>Select a type of Pokemon</span>
      <select className="categories" name="categories" onChange={event}>
        <option value="All">Type</option>
        {categoryList.map(item => <option value={item} key={`${item}_option`}>{item}</option>)}
      </select>
    </div>
  );
};

export default PokemonFilter;

PokemonFilter.propTypes = {
  event: PropTypes.func.isRequired,
};
