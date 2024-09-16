import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  useOutletContext,
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
import CreateProfile from "../userInformationForms/createProfile";
import UserProfile from "../profilepage/userprofile";
import FeedPage from "../feedpage/feedPage";
import FeedPageLayout from "../../layouts/feedPageLayout";
import TopResearchPage from "../navPages/topResearchPage";
import PublicRoutes from "./publicRoutes";
import MyCollabs from "../navPages/myCollabs";

// A function to wrap loaders and inject user data from context
function loaderWithUser(loader) {
  return (args) => {
    const { user } = useOutletContext().user; // Access the user context
    return loader(args, user); // Pass user data to the loader
  };
}

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
          loader={loaderWithUser(collabProjectsLoader)}
        />
        <Route
          path="userprofile"
          element={<UserProfile />}
          loader={loaderWithUser(collabProjectsLoader)}
        />
        <Route path="feedpage" element={<FeedPageLayout />}>
          <Route index element={<FeedPage />} />
          <Route path="topresearchpage" element={<TopResearchPage />} />
        </Route>
      </Route>
    </Route>
  )
);
