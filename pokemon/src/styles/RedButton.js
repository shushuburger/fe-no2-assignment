import styled from 'styled-components';

const RedButton = styled.button`
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    padding: 5px 10px;
  }
`;

export default RedButton;
