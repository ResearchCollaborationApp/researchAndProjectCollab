import "./App.css";
import { router } from "./Components/authpages/router";
import { RouterProvider } from "react-router-dom";
import MyCollabs from "./Components/navPages/myCollabs";
import Board from "./Components/navPages/board";
import UserProfile from "./Components/profilepage/userprofile";
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
