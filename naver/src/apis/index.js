import axios from "axios";

export const getMovies = async (params) => {
  const result = await axios.get("/v1/search/movie.json", {
    headers: {
      "X-Naver-Client-Id": "sjVQsE4KdQWfwMrFpH03",
      "X-Naver-Client-Secret": "fw7b_GPWIV",
    },
    params,
  });

  return result.data;
};
