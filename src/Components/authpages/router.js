import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

//loaders

import {
  userProfileLoader,
  projectIdeasLoader,
  topResearchLoader,
  collabProjectsLoader,
} from "../apiLoaders/apiLoaders";

// pages
import Home from "../home/home";
import RootLayout from "../../layouts/rootLayout";
import SigninPage from "./SigninPage";
import ProtectedRoutes from "./protectedRoutes";
import CreateProfile from "../userinformationforms/createProfile";
import UserProfile from "../profilepage/userprofile";
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
        <Route path="createprofile" element={<CreateProfile />} />
        <Route
          path="mycollabs"
          element={<MyCollabs />}
          loader={collabProjectsLoader}
        />
        <Route
          path="userprofile"
          element={<UserProfile />}
          loader={collabProjectsLoader}
        />
        <Route path="feedpage" element={<FeedPageLayout />}>
          <Route index element={<FeedPage />} />
          <Route path="topresearchpage" element={<TopResearchPage />} />
        </Route>
      </Route>
    </Route>
  )
);
