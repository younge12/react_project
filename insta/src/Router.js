import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./components/pages/Main";
import SignUp from "./components/pages/SignUp";
import LogIn from "./components/pages/LogIn";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
