import './App.css';
import React from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Container from "./components/Container";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <Wrapper>
      <Header />
      <SearchBar />
      <Container />
      </Wrapper>
    </div>
  );
}

export default App;
