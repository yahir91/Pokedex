import Pokemon from './Pokemon'
import useFetch from '../logic/useFetch'

const PokemonList = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/bulbasaur'
    const { error, isPending, data: pokemon } = useFetch(url)

    // const pokemons = [
    //     {
    //         name: 'Charizard',
    //         type: 'Fire'
    //     },
    //     {
    //         name: 'Pikachu',
    //         type: 'Electric'
    //     }
    // ]

    return ( 
        <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { pokemon && <Pokemon pokemon={pokemon} /> }
    </div>
        // <div>
        //     {pokemons.map( item =>
        //         <Pokemon pokemon={item}/>
        //     )}
        // </div>
     );
}
 
export default PokemonList;