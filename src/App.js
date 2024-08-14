import "./App.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
//loaders
import { userLoader } from "./Components/apiLoaders/apiLoaders";
import { nobelLoader } from "./Components/apiLoaders/apiLoaders";
//pages
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
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="signin" element={<SigninPage />} />

        {/* These are protected routes*/}
        <Route element={<ProtectedRoutes />}>
          <Route path="createprofile" element={<CreateProfileLayout />}>
            <Route index element={<CreateProfile />} />
            <Route path="profileinformation" element={<FormTemplate />} />
          </Route>
        </Route>
        <Route path="feedpage" element={<FeedPageLayout />}>
          <Route element={<FeedPage />} />
          <Route path="topresearchpage" element={<TopResearchPage />} />
        </Route>
      </Route>
    </>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
