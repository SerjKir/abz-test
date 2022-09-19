import React, {useRef} from 'react';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import Wrapper from './components/Wrapper/Wrapper';
import Hero from './components/Hero/Hero';
import {createTheme, ThemeProvider} from '@mui/material';
import Users from './components/Users/Users';

const theme = createTheme({
  typography: {
    allVariants: {
      color: 'rgba(0, 0, 0, 0.87)',
      lineHeight: '26px',
      fontSize: '16px',
    },
    fontFamily: [
      "Nunito",
      "Helvetica Neue",
      "Arial",
      "sans-serif",
    ].join(","),
  }
});

const App = () => {
  const usersRef = useRef(null);
  const signRef = useRef(null);


  return (
    <ThemeProvider theme={theme}>
      <Container className={'sticky'}>
        <Wrapper>
          <Header signRef={signRef} usersRef={usersRef}/>
        </Wrapper>
      </Container>
      <Container bg='light-gray'>
        <Wrapper fullwidth={true}>
          <Hero signRef={signRef}/>
        </Wrapper>
        <Wrapper>
          <Users usersRef={usersRef} signRef={signRef} className="block"/>
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
};

export default App;