import React from 'react';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from './styles/theme';
import { Routes } from './Routes';
import { MainHeader } from './components/MainHeader';
import useLocalStorage from 'use-local-storage';
import { ThemeModeEnum } from './Types/theme';


const Body = styled.div`
  background-color: ${props => props.theme.colors.background};
  height:100%;
`

function App() {

  const [theme, setTheme] = useLocalStorage('theme', ThemeModeEnum.DARK)

  return (
  <ThemeProvider theme={theme === ThemeModeEnum.DARK ? darkTheme : lightTheme}>
    <Body className="App">
     <MainHeader themeMode={theme} setTheme={setTheme} />
     <Routes />
    </Body>
  </ThemeProvider>
  );
}

export default App;
