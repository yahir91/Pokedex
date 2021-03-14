import '../styles/pokemonDetails.css';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import useFetch from '../logic/useFetch';

const PokemonDetails = () => {
  const { id } = useParams();
  const { data: pokemon } = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  return (
    <div className="whiteBody">
      <Container>
        {pokemon
        && (
        <>
          <h1>{`${pokemon.name} N.${id} `}</h1>
          <Row className="rowDetails">
            <Col className="imgContainer">
              <Image className="sprite" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
            </Col>
            <Col>
              <h1>Base Status</h1>
              <p>{`HP: ${pokemon.stats[0].base_stat}`}</p>
              <p>{`Attack: ${pokemon.stats[1].base_stat}`}</p>
              <p>{`Defense: ${pokemon.stats[2].base_stat}`}</p>
              <p>{`Special Attack: ${pokemon.stats[3].base_stat}`}</p>
              <p>{`Special Defense: ${pokemon.stats[4].base_stat}`}</p>
              <p>{`Speed: ${pokemon.stats[5].base_stat}`}</p>
            </Col>
          </Row>

        </>
        )}
      </Container>
    </div>
  );
};

export default PokemonDetails;
