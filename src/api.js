import axios from "axios";

const request = axios.create({
  baseURL: "https://nchelp.herokuapp.com/api",
});

export const getAllArticles = () => {
  return request.get("/articles").then(({ data }) => {
    return data.articles;
  });
};
