import '../styles/pokemon.css';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import PropTypes from 'prop-types';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useFetch from '../logic/useFetch';
import changeBackgroundColor from '../logic/backgroundColor';

const Pokemon = ({ pokemons, index }) => {
  const { data: pokemon } = useFetch(pokemons.url);
  const color = pokemon
    ? changeBackgroundColor(pokemon.types[0].type.name)
    : '';
  const { current } = useSelector(state => state.filter);

  return (
    <>
      {pokemon && (
        <>
          {(current === 'All'
            ? true
            : current === pokemon.types[0].type.name
              || current
                === (pokemon.types[1] ? pokemon.types[1].type.name : false)) && (
                <Link to={`/pokemon/${index + 1}`}>
                  <Col className="card">
                    <Image
                      style={{
                        backgroundColor: color,
                      }}
                      className="sprite"
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                        index + 1
                      }.png`}
                    />
                    <h3 className="pokemonName">{pokemon.name}</h3>
                    <div className="badges">
                      {pokemon.types.map(item => (
                        <Badge
                          pill
                          className={item.type.name}
                          key={`${item} + ${Math.random(0, 100)}`}
                        >
                          {item.type.name}
                        </Badge>
                      ))}
                    </div>
                  </Col>
                </Link>
          )}
        </>
      )}
    </>
  );
};

Pokemon.propTypes = {
  index: PropTypes.number.isRequired,
  pokemons: PropTypes.exact({
    name: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default Pokemon;
