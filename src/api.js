import axios from "axios";

const request = axios.create({
  baseURL: "https://nchelp.herokuapp.com/api",
});

export const getAllArticles = () => {
  return request.get("/articles").then(({ data }) => {
    return data.articles;
  });
};

export const getArticleById = (article_id) => {
  return request.get(`/articles/${article_id}`).then(({ data }) => {
    return data.articles.articles[0];
  });
};

export const getCommentsByArticleId = (article_id) => {
  return request.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments.comments;
  });
};

export const getTopicByQuery = (slug) => {
  return request.get(`/articles?topic=${slug}`).then(({ data }) => {
    return data.articles;
  });
};

export const getTopics = () => {
  return request.get(`/topics`).then(({ data }) => {
    return data.topics;
  });
};

export const getUsers = () => {
  return request.get(`/users`).then(({ data }) => {
    return data.users;
  });
};

export const getUserByUsername = (username) => {
  return request.get(`/users/${username}`).then(({ data }) => {
    return data.user;
  });
};

export const changeVotes = (article_id, increment, word) => {
  return request.patch(`/${word}/${article_id}/`, { inc_votes: increment });
};

export const submitComment = (article_id, value) => {
  return request
    .post(`/articles/${article_id}/comments`, {
      userName: "jessjelly",
      body: value,
    })
    .catch((err) => {
      console.dir(err);
    })
    .then((res) => {
      return res.data.article;
    });
};

export const sortBy = (word) => {
  return request.get(`/articles?sort_by=${word}`).then((res) => {
    return res.data.articles;
  });
};
