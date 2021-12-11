import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  BookFind,
  BookPropose,
  NotFound,
  SignIn,
  MyAccount,
  BookDetails,
  SignUp,
} from "../../pages";

const Content = () => {
  return (
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/signin"  element={<SignIn />}/>
        <Route exact path="/signup" element={<SignUp />}/>
        <Route exact path="/book"  element={<BookFind />} />
        <Route exact path="/bookpropose"  element={<BookPropose />} />
        <Route exact path="/book/:id"  element={<BookDetails/>}/>
        <Route exact path="/user/:id"  element={<MyAccount/>}/>
        <Route path="/*" element={<NotFound />} />
      </Routes>
  );
};

export default Content;
