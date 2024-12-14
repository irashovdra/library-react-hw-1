import React from "react";
import "./App.css";

import { Name } from "./components/Name";
import { WelcomeMessage } from "./components/WelcomeMessage";
import { Image } from "./components/Image";
import { FavoriteSite } from "./components/FavoriteSite";
import { SumDisplay } from "./components/Sum";
import { ColorList } from "./components/ColorList";

export const App = () => {
  return (
    <div className="App">
      <Name />
      <WelcomeMessage />
      <Image />
      <FavoriteSite />
      <SumDisplay />
      <ColorList />
    </div>
  );
};

export default App;
