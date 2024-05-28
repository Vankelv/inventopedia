import React from "react";
import Routers from "./frontend/routes/Routers";
import DarkMode from "./frontend/ui/components/DarkMode";

function App() {
  return (
    <div className="App">
      <Routers />
      <DarkMode />
    </div>
  );
}

export default App;
