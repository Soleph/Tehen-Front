import React from 'react';
import Nav from './components/Navbar/NavIndex';
import Routes from './Routes';
import GlobalStyled from './styles/global';

const App = () => (
  <>
    <Nav />
    <GlobalStyled />
    <Routes />
  </>
);

export default App;
