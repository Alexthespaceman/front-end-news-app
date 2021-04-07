import { Router } from "@reach/router";
import { Component } from "react";
import "./App.css";
import AddArticle from "./components/AddArticle";
import ArticleList from "./components/ArticleList";
import Header from "./components/Header";
import IndividualArticles from "./components/IndividualArticle";
import Navbar from "./components/Navbar";
import SubHeader from "./components/SubHeader";
import SubNavbar from "./components/SubNavbar";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <Header />
        <SubHeader />
        <Router>
          <ArticleList path="/articles" />
          <IndividualArticles path="/articles/:article_id" />
          <AddArticle path="/add-article" />
        </Router>
        <SubNavbar />
        <Navbar />
      </div>
    );
  }
}

export default App;
