import axios from "axios";

export const getMovies = async (params) => {
  const result = await axios.get("/v1/search/movie.json", {
    headers: {
      "X-Naver-Client-Id": "cXImhXldb32v4Yu5Hs9T",
      "X-Naver-Client-Secret": "kcNwJta1kV",
    },
    params,
  });

  return result.data;
};
