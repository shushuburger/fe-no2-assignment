import { createContext, useContext, useState } from 'react';
import MOCK_DATA from '../data/mock';

const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [selectedList, setSelectedList] = useState([]);
  const pokemonList = MOCK_DATA;

  const addPokemon = (pokemon) => {
    if (selectedList.some(p => p.id === pokemon.id)) {
      alert("이미 선택된 포켓몬입니다.");
      return;
    }
    if (selectedList.length >= 6) {
      alert("더 이상 선택할 수 없습니다.");
      return;
    }
    setSelectedList([...selectedList, pokemon]);
  };

  const removePokemon = (id) => {
    setSelectedList(selectedList.filter(p => p.id !== id));
  };

  return (
    <PokemonContext.Provider value={{ selectedList, addPokemon, removePokemon, pokemonList }}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemon = () => useContext(PokemonContext);
