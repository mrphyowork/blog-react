import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import List from "./components/List";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider>
      <List />
    </ThemeProvider>
  );
}

export default App;
