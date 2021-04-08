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
    return data.articles;
  });
};

export const getCommentsByArticleId = (article_id) => {
  return request.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data;
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
