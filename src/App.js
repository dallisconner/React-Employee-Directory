import './App.css';
import React from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Container />
    </div>
  );
}

export default App;
