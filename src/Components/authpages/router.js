import { RouterProvider } from "react-router-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
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


import React, { useContext } from 'react'
import { UserContext } from "./contexts";

function Routers() {
  const user = useContext(UserContext);
  return (
    <RouterProvider
          router={createBrowserRouter(
            createRoutesFromElements(
              <Route path="/" element={<RootLayout />}>
                {/* Public Routes */}
                <Route
                  index
                  element={user ? <Navigate to="feedpage" /> : <Home />}
                />
                <Route
                  path="signin"
                  element={user ? <Navigate to="feedpage" /> : <SigninPage />}
                />

                {/* Protected Routes */}
                <Route element={<ProtectedRoutes />}>
                  <Route
                    path="createprofile"
                    element={<CreateProfile />}
                  />
                  <Route path="feedpage" element={<FeedPageLayout />}>
                    <Route index element={<FeedPage />} />
                    <Route
                      path="topresearch"
                      element={<TopResearchPage />}
                    />
                  </Route>
                </Route>
              </Route>
            )
          )}
        />
  )
}

export default Routers
