import styled from 'styled-components';
import PokemonCard from './PokemonCard';
import { usePokemon } from '../context/Context';

const ListDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 20px;

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const PokemonList = () => {
  const { pokemonList } = usePokemon();

  return (
    <ListDiv>
      {pokemonList.map(pokemon => (
        <PokemonCard key={pokemon.id} pokemon={pokemon}/>
      ))}
    </ListDiv>
  );
};

export default PokemonList;
