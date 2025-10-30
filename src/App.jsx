import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import List from "./components/List";
import Login from "./components/Login";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <ThemeProvider>
      {isLoggedIn ? <List /> : <Login handleLogin={handleLogin} />}
    </ThemeProvider>
  );
}

export default App;
