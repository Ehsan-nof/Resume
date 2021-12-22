import React, { Component } from "react";
import TitlesSection from "./sections/TitlesSection";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import "./App.css";
import Navbar from "./components/Navbar/navbar.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <TitlesSection />
        <AboutSection />
        <SkillSection />
      </div>
    );
  }
}

export default App;
