import '../styles/pokemon.css';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import PropTypes from 'prop-types';
import Badge from 'react-bootstrap/Badge';
import useFetch from '../logic/useFetch';
import changeBackgroundColor from '../logic/backgroundColor';

const Pokemon = ({ pokemons, index }) => {
  const { data: pokemon } = useFetch(pokemons.url);
  // console.log(pokemon.types);
  const color = pokemon ? changeBackgroundColor(pokemon.types[0].type.name) : '';

  return (
    <Col
      className="card"
    >
      { pokemon
      && (
      <>
        <Image
          style={{
            backgroundColor: color,
          }}
          className="sprite"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/${index + 1}.png`}
        />
        <h1 className="pokemonName">{pokemon.name}</h1>
        {pokemon.types.map(item => (
          <Badge
            pill
            className={item.type.name}
            key={`${item} + ${Math.random(0, 100)}`}
          >
            {item.type.name}
          </Badge>
        ))}
      </>
      )}
    </Col>
  );
};

Pokemon.propTypes = {
  index: PropTypes.number.isRequired,
  pokemons: PropTypes.exact(
    {
      name: PropTypes.string,
      url: PropTypes.string,
    },
  ).isRequired,
};

export default Pokemon;
