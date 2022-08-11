import axios from "axios";

const instance = axios.create({
  headers: {
    "X-Naver-Client-Id": "sjVQsE4KdQWfwMrFpH03",
    "X-Naver-Client-Secret": "fw7b_GPWIV",
  },
});

export const getMovies = async (params) => {
  const result = await instance.get("/v1/search/movie.json", {
    params,
  });

  return result.data;
};

export const getBooks = async (params) => {
  const result = await instance.get("/v1/search/book.json", {
    params,
  });

  return result.data;
};

export const getBook = async (params) => {
  const result = await instance.get("/v1/search/book_adv.json", {
    params,
  });

  return result.data;
};
