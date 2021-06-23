import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Routes from "./routes/Routes";
import UserContext from "./services/context";

const App = () => {
  const [name, setName] = useState(null);
  const token = localStorage.getItem("token");

  const history = useHistory();

  useEffect(() => {
    if (token) {
      axios
        .get("/api/auth/me", {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          console.log(res);
          history.push("/admin");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [history, token]);

  return (
    <UserContext.Provider
      value={{
        name,
        setName,
      }}
    >
      <Routes />
    </UserContext.Provider>
  );
};

export default App;
