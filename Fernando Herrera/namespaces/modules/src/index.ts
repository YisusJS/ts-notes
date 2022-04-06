import { getPokemon } from './generics/get-pokemon';

getPokemon(2)
  .then((pokemon) => console.log(pokemon.name))
  .catch((error) => console.error(error));
