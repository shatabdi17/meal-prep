import React from "react";
import spoon from "../images/spoon.png";
import whisk from "../images/whisk.png";

const Header = () => (
  <header className="App-header">
    <h1 className="header">
      <img
        className="icon-spoon"
        src={spoon}
        alt="Restaurant by Trisula from the Noun Project"
      />
      Meal Prep
      <img
        className="icon-whisk"
        src={whisk}
        alt="Whisk by DinosoftLab from the Noun Project"
      />
    </h1>
  </header>
);

export default Header;
