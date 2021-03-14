import { useParams } from 'react-router-dom';
import useFetch from '../logic/useFetch';

const PokemonDetails = () => {
  const { id } = useParams();
  const { data: pokemon } = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  return (
    <div>
      <h1>{pokemon.name}</h1>
    </div>
  );
};

export default PokemonDetails;
