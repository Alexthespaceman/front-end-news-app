import { Link } from "@reach/router";
import { Component } from "react";
import * as api from "../api";
class ArticleList extends Component {
  state = { articles: [], isLoading: true };

  componentDidMount() {
    api.getAllArticles().then(({ articles }) => {
      this.setState({ articles: articles });
    });
  }

  // componentDidUpdate(previousProps, previousState) {
  //   const { article } = this.props;
  //   if (article !== previousProps.article) {
  //     api.getAllArticles(article);
  //   }
  // }

  render() {
    console.log(this.state);
    const { articles } = this.state;
    return (
      <div>
        {articles.map((article) => {
          const { author, title, topic, votes, comment_count } = article;
          return (
            <div className="articles">
              <Link to="/article_id">
                <p>{author}</p>
              </Link>
              <p>{title}</p>
              <p>{topic}</p>
              <p>{votes}</p>
              <p>{comment_count}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ArticleList;
