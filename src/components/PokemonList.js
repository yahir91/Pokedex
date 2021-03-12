import Pokemon from './Pokemon'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button';
// import { useState, useEffect } from 'react';
import useFetch from '../logic/useFetch'

const PokemonList = () => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=150&offset=0`
    const { error, isPending, data: pokemonList } = useFetch(url)

    return ( 
        <Container>
            <Row xs={4}>
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { pokemonList && pokemonList.results.map(item => (
          < Pokemon pokemon={item} />
      )) }
      </Row>
    </Container>
     );
}
 
export default PokemonList;