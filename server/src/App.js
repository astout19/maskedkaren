import React from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import Content from "./components/Content";
import Map from "./components/Map";
import Footer from "./components/Footer";

function App() {
  return (
    <Container>
      <Header />
      <Content />
      <Map />
      <Footer />
    </Container>
  );
}

export default App;
