import Container from 'react-bootstrap/Container';
import '../styles/pokemonList.css';
import Row from 'react-bootstrap/Row';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pokemon from './Pokemon';
import { addPokemon } from '../redux/pokemon';
// import useFetch from '../logic/useFetch';

const PokemonList = () => {
  // const url = 'https://pokeapi.co/api/v2/pokemon?limit=150&offset=0';
  // const { error, isPending, data: pokemonList } = useFetch(url);
  const { pokemonList } = useSelector(state => state.pokemon);
  const dispatch = useDispatch();

  useEffect(() => {
    for (let i = 1; i < 20; i += 1) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then(res => {
          if (!res.ok) {
            throw Error('could not fetch the data for that resource');
          }
          return res.json();
        })
        .then(data => {
          dispatch(addPokemon(data));
        });
    }
    console.log(pokemonList);
  }, []);

  return (
    <div className="whiteBody">
      <Container className="cardContainer">
        <Row xs={4}>
          { pokemonList && pokemonList.map((item, index) => (
            <Pokemon index={index} pokemon={item} key={`${item} + ${Math.random(0, 100)}`} />
          )) }
        </Row>
      </Container>
    </div>
  );
};

export default PokemonList;
