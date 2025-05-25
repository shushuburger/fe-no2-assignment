import { useLocation, useNavigate } from 'react-router-dom';
import MOCK_DATA from '../data/mock';
import styled from 'styled-components';

const DetailPage = styled.div`
  max-width: 480px;
  margin: 80px auto;
  padding: 40px 24px;
  text-align: center;

  @media (max-width: 480px) {
    padding: 20px 16px;
  }
`;

const Img = styled.img`
  width: 160px;
  height: 160px;
  margin-bottom: 20px;
`;

const Name = styled.h2`
  color: #ff4d4d;
  font-size: 24px;
  margin-bottom: 12px;
`;

const TypeText = styled.p`
  font-size: 16px;
  margin-bottom: 12px;
`;

const Description = styled.p`
  font-size: 15px;
  line-height: 1.5;
  margin-bottom: 24px;
`;

const BackButton = styled.button`
  padding: 10px 20px;
  background-color: #f2f2f2;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const PokemonDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search);
  const id = Number(query.get('id'));

  const pokemon = MOCK_DATA.find(p => p.id === id);
  if (!pokemon) return <p>포켓몬을 찾을 수 없습니다.</p>;

  return (
    <DetailPage>
      <Img src={pokemon.img_url} alt={pokemon.korean_name} />
      <Name>{pokemon.korean_name}</Name>
      <TypeText>타입: {pokemon.types.join(', ')}</TypeText>
      <Description>{pokemon.description}</Description>
      <BackButton onClick={() => navigate(-1)}>뒤로 가기</BackButton>
    </DetailPage>
  );
};

export default PokemonDetail;
