import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

//pages
import Home from "../home/home";
import RootLayout from "../../layouts/rootLayout"
import SigninPage from "./SigninPage";
import ProtectedRoutes from "./protectedRoutes";
import CreateProfile from "../userInformationForms/createProfile";
import FeedPage from "../feedpage/feedPage";
import FeedPageLayout from "../../layouts/feedPageLayout";
import TopResearchPage from "../navPages/topResearchPage"
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
        <Route index element = {<Home/>}/>
        <Route 
            path="signin" 
            element={<SigninPage />} 
        />
        {/* keep all the protected routes inside this route */}
        <Route element={<ProtectedRoutes />}>
            <Route 
                path="createprofile" 
                element={<CreateProfile />} 
            />
            <Route path = "feedPage" element = {<FeedPageLayout />}>
                <Route index element = {<FeedPage/>}/>
                <Route path = "topresearch" element = {<TopResearchPage/>}/>
            </Route>
        </Route>
    </Route>
  )
);
