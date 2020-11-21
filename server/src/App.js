import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Container from './components/Container';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Header from './components/Header';
import Content from './components/Content';
import Map from './components/Map';
import Footer from './components/Footer';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (
    <Container>
      <LoginButton />
      <LogoutButton />
      <Header />
      <Content />
      <Map />
      <Footer />
    </Container>
  );
}

export default App;
