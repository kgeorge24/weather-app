import React, { useState } from "react";
import Search from "./components/Search/Search";
import { SearchContextProvider } from "./store/search-context";
import "./App.css";

function App() {
  const [windowResized, setWindowResized] = useState(false);

  // triggers a component rerender on chan
  window.addEventListener("resize", (event) => {
    if (window.innerWidth > 900 && windowResized === false) {
      setWindowResized(true);
    } else if (window.innerWidth < 900 && windowResized === true) {
      setWindowResized(false);
    }
  });

  return (
    <div className="App">
      <SearchContextProvider>
        <Search />
      </SearchContextProvider>
    </div>
  );
}

export default App;
