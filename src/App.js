import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import CategoryList from "./components/CategoryList";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <CategoryList />
      </div>
    );
  }
}

export default App;
