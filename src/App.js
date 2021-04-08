import { Router } from "@reach/router";
import { Component } from "react";
import "./App.css";
import AddArticle from "./components/AddArticle";
import ArticleList from "./components/ArticleList";
import Header from "./components/Header";
import IndividualArticleComments from "./components/IndividualArticleComments";
import IndividualArticle from "./components/IndividualArticles";
import Navbar from "./components/Navbar";
import SubHeader from "./components/SubHeader";
import SubNavbar from "./components/SubNavbar";
import TopicPage from "./components/TopicPage";
import Topics from "./components/Topics";
import { Users } from "./components/Users";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <Header />
        <SubHeader />
        <Router>
          <ArticleList path="/" />
          <IndividualArticle path="/article/:article_id" />
          <Topics path="/topics" />
          <TopicPage path="/articles/:slug" />
          <AddArticle path="/add-article" />
          <IndividualArticleComments path="/articles/:article_id/comments" />
          <Users path="/users/:user_id" />
        </Router>
        <SubNavbar />
        <Navbar />
      </div>
    );
  }
}

export default App;
