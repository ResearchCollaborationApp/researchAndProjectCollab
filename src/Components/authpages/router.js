import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
  useOutletContext,
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

// Custom PublicRoute component
const PublicRoute = ({ element }) => {
  const user = useOutletContext();

  return user ? <Navigate to="/feedpage" /> : element;
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      {/* <Route index element = {<Home/>}/>
      <Route path="signin" element={<SigninPage />}/> */}
      {/* Public Routes */}
     <Route index element={<PublicRoute element={<Home />} />} />
      <Route path="signin" element={<PublicRoute element={<SigninPage />} />} />

      {/* Protected Routes */}
    <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<Navigate to="feedpage" />} />
        <Route path="createprofile" element={<CreateProfile />} />
        <Route path="feedpage" element={<FeedPageLayout />}>
          <Route index element={<FeedPage />} />
          <Route path="topresearchpage" element={<TopResearchPage />} />
        </Route>
      </Route> 
    </Route>
  )
);
