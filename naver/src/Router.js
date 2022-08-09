import { BrowserRouter, Routes, Route } from "react-router-dom";

import Book from "./components/pages/Book";
import Main from "./components/pages/Main";
import Movie from "./components/pages/Movie";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/movie" element={<Movie />}></Route>
        <Route path="/book" element={<Book />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
