import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import RedButton from '../styles/RedButton';
import { usePokemon } from '../context/Context';

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 16px;
  text-align: center;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.1);
  }
`;

const Img = styled.img`
  width: 80px;
  height: 80px;
  cursor: pointer;
`;

const PokemonCard = ({ pokemon }) => {
  const navigate = useNavigate();
  const { addPokemon } = usePokemon();

  const goToDetail = () => {
    navigate(`/pokemon-detail?id=${pokemon.id}`);
  };

  return (
    <Card>
      <Img src={pokemon.img_url} alt={pokemon.korean_name} onClick={goToDetail} />
      <h4>{pokemon.korean_name}</h4>
      <p>No. {pokemon.id.toString().padStart(3, '0')}</p>
      <RedButton onClick={() => addPokemon(pokemon)}>추가</RedButton>
    </Card>
  );
};

export default PokemonCard;
