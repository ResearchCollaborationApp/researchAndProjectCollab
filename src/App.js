import "./App.css";
import { useState } from "react";


import { UserContext } from "./Components/authpages/contexts";
import Routers from "./Components/authpages/router"
function App() {
  const [user, setUser] = useState(null);
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <Routers/>
      </UserContext.Provider>
    </>
  );
}

export default App;
