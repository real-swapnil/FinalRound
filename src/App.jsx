import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TopBar from "./Components/TopBar";
import NavigationBar from "./Components/NavigationBar";
import HeroSection from "./Components/HeroSection";
import QuoteSec from "./Components/QuoteSec";
import Insurance from "./Components/Insurance";
import Service from "./Components/Service";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TopBar />
      <NavigationBar />
      <HeroSection />
      <QuoteSec />
      <Insurance />
      <Service />
    </>
  );
}

export default App;
