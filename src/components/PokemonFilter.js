import PropTypes from 'prop-types';

const PokemonFilter = ({ event }) => {
  const categoryList = ['fire', 'water', 'grass', 'normal', 'electric', 'ice', 'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost', 'dragon', 'fairy'];
  return (
    <div className="category">
      <select name="categories" onChange={event}>
        <option value="All" selected>All Types</option>
        {categoryList.map(item => <option value={item} key={`${item}_option`}>{item}</option>)}
      </select>
    </div>
  );
};

export default PokemonFilter;

PokemonFilter.propTypes = {
  event: PropTypes.func.isRequired,
};
