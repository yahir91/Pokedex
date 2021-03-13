// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// const useFetch = () => {
//   const [isPending, setIsPending] = useState(true);
//   const [error, setError] = useState(null);
//   const { pokemonList } = useSelector(state => state.pokemon);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const abortCont = new AbortController();

//     for (i = 1; i < 151; i++) {
//       fetch(`https://pokeapi.co/api/v2/pokemon/${i}`, { signal: abortCont.signal })
//         .then(res => {
//           if (!res.ok) {
//             throw Error('could not fetch the data for that resource');
//           }
//           return res.json();
//         })
//         .then(data => {
//           setIsPending(false);
//           dispatch(addPokemon(data));
//           setError(null);
//           console.log(data.results[0].url);
//         })
//         .catch(err => {
//           setIsPending(false);
//           setError(err.message);
//         });
//     }

//     return () => abortCont.abort();
//   }, [url]);

//   return { data, isPending, error };
// };

// export default useFetch;
