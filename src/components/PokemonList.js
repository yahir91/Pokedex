import Pokemon from './Pokemon'
// import { useState, useEffect } from 'react';
import useFetch from '../logic/useFetch'

const PokemonList = () => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=150&offset=0`
    const { error, isPending, data: pokemonList } = useFetch(url)

    return ( 
        <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { pokemonList && pokemonList.results.map(item => (
          < Pokemon pokemon={item} />
      )) }
    </div>
     );
}
 
export default PokemonList;