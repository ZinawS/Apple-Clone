import React from "react";
import { BrowserRouter as Router } from "react-router-dom/cjs/react-router-dom.min";

import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";
import Header from "./Components/Nav/Nav";

// import general css
import "./css/styles.css";
import Youtube from "./Components/Youtube/Youtube";

function App() {
  return (
    <Router>
      <Header />
      <Main />
      <Youtube />
      <Footer />
    </Router>
  );
}

export default App;
