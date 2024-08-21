import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";

//pages
import Home from "../home/home";
import RootLayout from "../../layouts/rootLayout";
import SigninPage from "./SigninPage";
import ProtectedRoutes from "./protectedRoutes";
import CreateProfile from "../userInformationForms/createProfile";
import FeedPage from "../feedpage/feedPage";
import FeedPageLayout from "../../layouts/feedPageLayout";
import TopResearchPage from "../navPages/topResearchPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      {/* Public Routes */}

      <Route index element={<Home />} />
      <Route path="signin" element={<SigninPage />} />

      {/* Protected Routes */}
      <Route element={<ProtectedRoutes />}>
        <Route path="signin" element={<Navigate to="/" />} />
        <Route path="/" element={<Navigate to="feedpage" />} />
        <Route path="createprofile" element={<CreateProfile />} />
        <Route path="feedpage" element={<FeedPageLayout />}>
          <Route index element={<FeedPage />} />
          <Route path="topresearch" element={<TopResearchPage />} />
        </Route>
      </Route>
    </Route>
  )
);
