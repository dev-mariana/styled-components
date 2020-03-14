import styled from 'styled-components';

const x = {
    "biologia": "green",
    "quimica": "pink",
    "fisica": "blue",
}

export const Container = styled.div``;

export const Header = styled.header`
  background-color: ${props => x[props.area]};
// width: ${props => props.width};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const Button = styled.button`
  background-color: green;
  color: ${props => props.color};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid white;
  border-radius: 6px;
`;