import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import RedButton from '../styles/RedButton';

const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 640px;
  text-align: center;
`;

const Home = () => {
  const navigate = useNavigate();

  const goToDex = () => {
    navigate('/dex');
  };

  return (
    <HomePage>
      <RedButton onClick={goToDex}>포켓몬 도감 시작하기</RedButton>
    </HomePage>
  );
};

export default Home;
