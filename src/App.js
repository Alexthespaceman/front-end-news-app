import { Router } from "@reach/router";
import { Component } from "react";
import "./App.css";
import ArticleList from "./components/ArticleList";
import Header from "./components/Header";
import IndividualArticleComments from "./components/IndividualArticleComments";
import IndividualArticle from "./components/IndividualArticles";
import IndividualUser from "./components/IndividualUser";
import MostVotes from "./components/MostVotes";
import Navbar from "./components/Navbar";
import NoMatch from "./components/NoMatch";
import SortByAuthor from "./components/SortByAuthor";
import TopicPage from "./components/TopicPage";
import Topics from "./components/Topics";
import Users from "./components/Users";

class App extends Component {
  state = {
    user: {
      username: "jessjelly",
      avatar_url:
        "https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141",
      name: "Jess Jelly",
    },
  };

  render() {
    console.log("hello");
    return (
      <div className="App">
        <div className="head">
          <Header />
        </div>
        <Router>
          <ArticleList path="/" />
          <IndividualArticle path="/article/:article_id" />
          <IndividualArticleComments path={`/articles/:article_id/comments`} />
          <Topics path="/topics" />
          <TopicPage path="/articles/:slug" />
          <Users path="/users" />
          <IndividualUser path="/users/:username" />
          <MostVotes path="/articles/most-votes" word="votes" />
          <SortByAuthor path="/articles/author" word="author" />
          <NoMatch default />
        </Router>
        <div className="nav">
          <Navbar />
        </div>
      </div>
    );
  }
}

export default App;
