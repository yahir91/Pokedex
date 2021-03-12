import Container from 'react-bootstrap/Container';
import '../styles/pokemonList.css';
import Row from 'react-bootstrap/Row';
import Pokemon from './Pokemon';
// import { useState, useEffect } from 'react';
import useFetch from '../logic/useFetch';

const PokemonList = () => {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=150&offset=0';
  const { error, isPending, data: pokemonList } = useFetch(url);

  return (
    <div className="whiteBody">
      <Container className="cardContainer">
        <Row xs={4}>
          { error && <div>{ error }</div> }
          { isPending && <div>Loading...</div> }
          { pokemonList && pokemonList.results.map((item, index) => (
            <Pokemon index={index} pokemon={item} key={`${item} + ${Math.random(0, 100)}`} />
          )) }
        </Row>
      </Container>
    </div>
  );
};

export default PokemonList;
