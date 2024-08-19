import "./App.css";
import { useState, createContext } from "react";
import { router } from "./Components/authpages/router";
import {
  RouterProvider,
} from "react-router-dom";

export const UserContext = createContext(null);
function App() {
  const [user, setUser] = useState(null)
  return (
    <>
    <UserContext.Provider value={{ user, setUser }}>
      <RouterProvider router = {router}/>
    </UserContext.Provider>
    </>
  );
}
export default App;
