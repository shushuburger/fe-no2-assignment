import styled from 'styled-components';
import Dashboard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';
import MOCK_DATA from '../data/mock';
import { useState } from 'react';

const DexPage = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 16px;
`;

const Section = styled.section`
  padding: 40px 24px;
  background-color: #f8f8f8;
  border-radius: 16px;
  margin-bottom: 24px;
`;

const Dex = () => {
  const [selectedList, setSelectedList] = useState([]);

  const handleAdd = (pokemon) => {
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

  const handleRemove = (id) => {
    setSelectedList(selectedList.filter(p => p.id !== id));
  };

  return (
    <DexPage>
      <Section>
        <Dashboard selectedList={selectedList} onRemove={handleRemove} />
      </Section>
      <Section>
        <PokemonList pokemonList={MOCK_DATA} onAdd={handleAdd} />
      </Section>
    </DexPage>
  );
};

export default Dex;
