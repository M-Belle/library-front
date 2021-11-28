import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  BookFind,
  BookPropose,
  NotFound,
  Connection,
  MyAccount,
} from "../../pages";

const Content = ({ setUserToken }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/connect" exact element={<Connection setUserToken={setUserToken} />}/>
        <Route path="/bookfind" exact element={<BookFind />} />
        <Route path="/bookpropose" exact element={<BookPropose />} />
        <Route path="/myaccount" exact element={<MyAccount/>} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Content;
