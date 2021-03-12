import '../styles/pokemon.css';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import PropTypes from 'prop-types';

const Pokemon = ({ pokemon, index }) => (
  <Col className="card ">
    <Image className="sprite" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${index + 1}.gif`} />
    <h1>{pokemon.name}</h1>
  </Col>
);

Pokemon.propTypes = {
  index: PropTypes.number.isRequired,
  pokemon: PropTypes.exact(
    {
      name: PropTypes.string,
    },
  ).isRequired,
};

export default Pokemon;
