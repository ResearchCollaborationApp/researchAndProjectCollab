import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

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
        <Route path="feedpage" element={<FeedPageLayout />}>
          <Route index element={<FeedPage />} />
          <Route path="topresearchpage" element={<TopResearchPage />} />
        </Route>
      </Route>
    </Route>
  )
);
