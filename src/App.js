import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SubHeader from "./components/SubHeader";
import SubNavbar from "./components/SubNavbar";

function App() {
  return (
    <div className="app">
      <Header />
      <SubHeader />
      <Router>
        <ArticleList path="/articles" />
      </Router>
      <SubNavbar />
      <Navbar />
    </div>
  );
}

export default App;
