import React from "react";
import Home from "./components/Home/Home";
import Chapter1 from "./components/Chapter1/Chapter1";
import Chapter2 from "./components/Chapter2/Chapter2";
import Chapter3 from "./components/Chapter3/Chapter3";
import Chapter4 from "./components/Chapter4/Chapter4";
import Footer from "./components/Footer/Footer";
import useLenis from "./hooks/useLenis"; // ✅ Add this line


function App() {
  useLenis();
  return (
    <div className="App">
      <Home />
      <Chapter1 />
      <Chapter2 />
      <Chapter3 />
      <Chapter4 />
      <Footer />
    </div>
  );
}

export default App;