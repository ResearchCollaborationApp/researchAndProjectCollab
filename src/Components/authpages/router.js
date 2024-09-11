import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";

//loaders
import { boardsLoader } from "../apiLoaders/apiLoaders";
// pages
import Home from "../home/home";
import RootLayout from "../../layouts/rootLayout";
import SigninPage from "./SigninPage";
import ProtectedRoutes from "./protectedRoutes";
import CreateProfile from "../userInformationForms/createProfile";
import FeedPage from "../feedpage/feedPage";
import FeedPageLayout from "../../layouts/feedPageLayout";
import TopResearchPage from "../navPages/topResearchPage";
import PublicRoutes from "./publicRoutes";
import MyCollabs from "../navPages/myCollabs";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      {/* Public Routes */}
      <Route element={<PublicRoutes />}>
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<SigninPage />} />
      </Route>

      {/* Protected Routes */}
      <Route element={<ProtectedRoutes />}>
        <Route path = "changepassword" element = {<ChangePassword/>}/>
        <Route path="createprofile" element={<CreateProfile />} />
        <Route path="mycollabs" element={<MyCollabs/>} loader={boardsLoader} />
        <Route path="feedpage" element={<FeedPageLayout />}>
          <Route index element={<FeedPage />} />
          <Route path="topresearchpage" element={<TopResearchPage />} />
        </Route>
      </Route>
    </Route>
  )
);
