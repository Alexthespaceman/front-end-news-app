import { Router } from "@reach/router";
import { Component } from "react";
import "./App.css";
import ArticleList from "./components/ArticleList";
import Header from "./components/Header";
import IndividualArticleComments from "./components/IndividualArticleComments";
import IndividualArticle from "./components/IndividualArticles";
import IndividualUser from "./components/IndividualUser";
import LoggedInUser from "./components/LoggedInUser";
// import Navbar from "./components/Navbar";
import NoMatch from "./components/NoMatch";
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
    return (
      <div className="App">
        <div className="head">
          <Header />
        </div>
        <Router>
          <ArticleList path="/" icon="fas fa-thumbs-up" />
          <IndividualArticle path="/article/:article_id" />
          <IndividualArticleComments path={`/articles/:article_id/comments`} />
          <Topics path="/topics" />
          <TopicPage path="/articles/:slug" />
          <LoggedInUser path="jess-jelly" />
          <Users path="/users" />
          <IndividualUser path="/users/:username" />
          <NoMatch default />
        </Router>
      </div>
    );
  }
}

export default App;
