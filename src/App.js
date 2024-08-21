import "./App.css";
import { useState } from "react";

import { UserContext } from "./Components/authpages/contexts";
import { router } from "./Components/authpages/router";
import { RouterProvider } from "react-router-dom";
function App() {
 
  return (
    <>
        <RouterProvider router={router} />
    </>
  );
}

export default App;
