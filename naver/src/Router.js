import { BrowserRouter, Routes, Route } from "react-router-dom";

import Book from "./components/pages/Book";
import Main from "./components/pages/Main";
import Movie from "./components/pages/Movie";
import Header from "./components/organisms/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        {/* 중첩라우팅 Outlet 위치를 정할수있음*/}
        <Route element={<Header />}>
          <Route path="/movie" element={<Movie />}></Route>
          <Route path="/book" element={<Book />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
