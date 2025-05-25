import styled from 'styled-components';
import Dashboard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';
import { usePokemon } from '../context/Context';

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
  usePokemon();

  return (
    <DexPage>
      <Section>
        <Dashboard />
      </Section>
      <Section>
        <PokemonList/>
      </Section>
    </DexPage>
  );
};

export default Dex;
