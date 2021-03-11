import Pokemon from 'Pokemon'

const PokemonList = () => {
    const pokemons = [
        {
            name: 'Charizard',
            type: 'Fire'
        },
        {
            name: 'Pikachu',
            type: 'Electric'
        }
    ]

    return ( 
        <div>
            {pokemons.map( item =>
                <Pokemon pokemon={item}/>
            )}
        </div>
     );
}
 
export default PokemonList;