import styled from 'styled-components';
import PokemonCard from './PokemonCard';

const ListDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 20px;

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const PokemonList = ({ pokemonList, onAdd }) => {
  return (
    <ListDiv>
      {pokemonList.map(pokemon => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} onAdd={onAdd} />
      ))}
    </ListDiv>
  );
};

export default PokemonList;
