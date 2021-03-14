import Container from 'react-bootstrap/Container';
import '../styles/pokemonList.css';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import Pokemon from './Pokemon';
import useFetch from '../logic/useFetch';
import PokemonFilter from './PokemonFilter';
import { addType } from '../redux/pokemonFilter';

const PokemonList = () => {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=150&offset=0';
  const { error, isPending, data: pokemonList } = useFetch(url);
  const { current } = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleType = e => {
    dispatch(addType(
      e.target.value,
      console.log(current),
    ));
  };

  return (
    <div className="whiteBody">
      <PokemonFilter event={handleType} />
      <Container className="cardContainer">
        <Row xs={4}>
          { error && <div>{ error }</div> }
          { isPending && <div>Loading...</div> }
          { pokemonList && pokemonList.results.map((item, index) => (
            <Pokemon index={index} pokemons={item} key={`${item} + ${Math.random(0, 100)}`} />
          )) }
        </Row>
      </Container>
    </div>
  );
};

export default PokemonList;
