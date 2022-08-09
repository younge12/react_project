import { useState ,useEffect } from "react";

import { getMovies } from "../../apis";
import Form from "../templates/Form";
import List from "../templates/List";

// useEffect(() => {
//     // IIFE
//     (async () => {
//       const result = await getMovies();
//       console.log(result);
//     })();
//   }, []);

const Movie = () => {
  const [params , setParams] = useState({query:"", country:"all"});

  const {query, country} = params;
  useEffect(() => {
    refreshList();
  }, [country]);

  const refreshList = async () => {
    const params = {query}
    if(country !== "all"){
      params.country = country;
    }
    const result = await getMovies(params);
    setItems(result.items);
  };

  const handleChange = ({name , value}) =>{
    const newParams = {...params, [name] : value};
    setParams(newParams);
  }

  return (
    <>
      <h1>영화 검색</h1>
      <Form  data={params} onChagne={handleChange}/>
      <List />
    </>
  );
};

export default Movie;
