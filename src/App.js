import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as S from './styles';
import lightTheme from './themes/light';
import { ThemeProvider } from 'styled-components';
import darkTheme from './themes/dark';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
    <S.Container className="container">
      <S.Header area="fisica">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <S.Button color="#fff">botão</S.Button>
      </S.Header>
    </S.Container>
    </ThemeProvider>
  );
}

export default App;