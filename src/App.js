import { Router } from "@reach/router";
import { Component } from "react";
import "./App.css";
import AddArticle from "./components/AddArticle";
import ArticleList from "./components/ArticleList";
import Form from "./components/Form";
import Header from "./components/Header";
import IndividualArticleComments from "./components/IndividualArticleComments";
import IndividualArticle from "./components/IndividualArticles";
import IndividualUser from "./components/IndividualUser";
import Navbar from "./components/Navbar";
import SubHeader from "./components/SubHeader";
import SubNavbar from "./components/SubNavbar";
import TopicPage from "./components/TopicPage";
import Topics from "./components/Topics";
import Users from "./components/Users";

class App extends Component {
  state = [
    {
      username: "jessjelly",
      avatar_url:
        "https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141",
      name: "Jess Jelly",
    },
  ];

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
          <Form path="/articles/:article_id/comments/add-comment" />
          <Users path="/users" />
          <IndividualUser path="/users/:username" />
        </Router>
        <SubNavbar />
        <Navbar />
      </div>
    );
  }
}

export default App;
