import "./App.css";
import { useState } from "react";
import { UserContext } from "./Components/authpages/protectedRoutes";
import {
  Route,
  Routes,
  Navigate,
  BrowserRouter as Router,
} from "react-router-dom";
//loaders
import { userLoader } from "./Components/apiLoaders/apiLoaders";
import { nobelLoader } from "./Components/apiLoaders/apiLoaders";
//pages
import Navigation from "./Components/home/homeNavigation";
import ProtectedRoutes from "./Components/authpages/protectedRoutes";
import Home from "./Components/home/home";
import RootLayout from "./layouts/rootLayout";
import SigninPage from "./Components/authpages/SigninPage";
import CreateProfile from "./Components/userInformationForms/createProfile";
import Error404 from "./Components/notfound/notFound";
import FormTemplate from "./Components/userInformationForms/formTemplate";
import FeedPage from "./Components/feedpage/feedPage";
import CreateProfileLayout from "./layouts/createProfileLayout";
import TopResearchPage from "./Components/navPages/topResearchPage";
import FeedPageLayout from "./layouts/feedPageLayout";
import AutoScroll from "./Components/feedpage/autoScroll";

function App() {
  const [user, setUser] = useState(null)
  return (
    <>
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Navigation/>
        <Routes>
          {!user && (
            <>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SigninPage />} />
            </>
          )}
          <Route element={<ProtectedRoutes />}>
             <Route path = "/signin" element = {<Navigate to = "/"/>}/>
             <Route path="/" element={<Navigate to="/feedpage" />} />
            <Route path="/createprofile" element={<CreateProfile/>}/>
            <Route path="/profileinformation" element={<FormTemplate />} />
            <Route path="/feedpage" element={<FeedPage />}>
              <Route path="topresearchpage" element={<TopResearchPage />} />
            </Route>
          </Route>
        </Routes>
     </Router>
    </UserContext.Provider>
    </>
  );
}
export default App;
