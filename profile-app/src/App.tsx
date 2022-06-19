import React from 'react';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from './styles/theme';
import { Link, Routes, Route } from 'react-router-dom';
import { About } from './scenes/About';
import { Home } from './scenes/Home/index';


const Body = styled.div`
  background-color: ${props => props.theme.colors.background}
`

function App() {
  return (
  <ThemeProvider theme={darkTheme}>
    <Body className="App">
      <nav>
         <ul id="navigation">
             <li>
                 <Link to="/">Home</Link>
             </li>
             <li>
                 <Link to="/about">About</Link>
             </li>
         </ul>
     </nav>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/ >
      </Routes>
    </Body>
  </ThemeProvider>
  );
}

export default App;
