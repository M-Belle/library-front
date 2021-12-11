import React from "react";
import { Content, Footer, Header } from "./components";
import {BrowserRouter} from "react-router-dom";

const App = () => {

  return (
    <div className="appRoot">
        <BrowserRouter>
            <Header />
            <Content />
            <Footer/>
        </BrowserRouter>
    </div>
  );
};

export default App;
