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
