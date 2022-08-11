import { BrowserRouter, Routes, Route } from "react-router-dom";

import Book from "./components/pages/Book";
import Main from "./components/pages/Main";
import Movie from "./components/pages/Movie";
import BookDetail from "./components/pages/BookDetail";
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
          <Route path="/book/:isbn" element={<BookDetail />}></Route>{" "}
          {/*동적라우팅 url 파라미터*/}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
