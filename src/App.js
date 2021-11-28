import React from "react";
import { Content, Footer, Header } from "./components";

const App = () => {
  const [userToken, setUserToken] = React.useState("");

  return (
    <div className="appRoot">
      <Header userToken={userToken} />
      <Content setUserToken={setUserToken} />
      <Footer />
    </div>
  );
};

export default App;
