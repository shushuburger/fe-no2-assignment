import styled from 'styled-components';
import pokemonBall from '../assets/pokemonBall.png';
import RedButton from '../styles/RedButton';

const Container = styled.div`
  background-color: #fefefe;
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  padding: 40px 20px;
  margin-bottom: 40px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
`;

const Title = styled.h2`
  color: #ff4d4d;
  margin-bottom: 24px;
`;

const Grid = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 40px;

  @media (max-width: 480px) {
    gap: 20px;
  }
`;

const Card = styled.div`
  width: 120px;
  height: 180px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
  padding: 16px;
  text-align: center;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.1);
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 160px;
  }
`;

const Img = styled.img`
  width: 60px;
  height: 60px;
`;

const Label = styled.p`
  font-size: 14px;
  margin: 4px 0;
`;

const EmptySlot = styled.div`
  width: 80px;
  height: 100px;
  border: 2px dashed #ccc;
  border-radius: 12px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;

  @media (max-width: 480px) {
    width: 70px;
    height: 90px;
  }
`;


const PokeballImg = styled.img`
  width: 40px;
`;

const Dashboard = ({ selectedList, onRemove }) => {
    const filledSlots = selectedList.map((pokemon) => (
        <Card key={pokemon.id}>
            <Img src={pokemon.img_url} alt={pokemon.korean_name} />
            <Label><strong>{pokemon.korean_name}</strong></Label>
            <Label>No. {pokemon.id.toString().padStart(3, '0')}</Label>
            <RedButton onClick={() => onRemove(pokemon.id)}>삭제</RedButton>    
        </Card>
    ));

    const emptySlots = Array(6 - selectedList.length).fill(null).map((_, i) => (
        <EmptySlot key={`empty-${i}`}>
            <PokeballImg src={pokemonBall} alt="pokemonBall" />
        </EmptySlot>
    ));

    return (
        <Container>
            <Title>나만의 포켓몬</Title>
            <Grid>
                {filledSlots.concat(emptySlots)}
            </Grid>
        </Container>
    );
};

export default Dashboard;
