import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import { Community } from "./components/Community/Community";
import { About } from "./components/About/About";
import { Video } from "./components/Video/Video";
import { LearnMore } from "./components/LearnMore/LearnMore";
import { Footer } from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import "antd/dist/antd.min.css";

function App() {
  const [isopen, setisopen] = useState(false);
  const toggle = () => {
    setisopen(!isopen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isopen={isopen} toggle={toggle} />
      <Home />
      <Community />
      <About />
      <Video />
      <LearnMore />
      <Footer />
    </>
  );
}

export default App;
