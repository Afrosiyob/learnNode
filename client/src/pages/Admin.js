import React, { useContext } from "react";
import ThemeContext from "../services/context";

const Admin = () => {
  const { name } = useContext(ThemeContext);

  return <div>this is admin page {name} </div>;
};

export default Admin;
