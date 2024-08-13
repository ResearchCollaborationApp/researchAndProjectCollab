
import './App.css';
import {
  createBrowserRouter,
  Route,  
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
//loaders
import { userLoader } from './Components/apiLoaders/apiLoaders';
import { nobelLoader } from './Components/apiLoaders/apiLoaders';
//pages
import Home from './Components/home/home';
import RootLayout from './layouts/rootLayout';
import SigninPage from './Components/authpages/SigninPage';
import CreateProfile from './Components/userInformationForms/createProfile';
import Error404 from './Components/notfound/notFound';
import FormTemplate from './Components/userInformationForms/formTemplate';
import FeedPage from './Components/feedpage/feedPage';
import CreateProfileLayout from './layouts/createProfileLayout';
import TopResearchPage from './Components/navPages/topResearchPage';
import FeedPageLayout from './layouts/feedPageLayout';
import AutoScroll from './Components/feedpage/autoScroll';
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home/>} />
      <Route path="signin" element={<SigninPage/>} />

      {/* Routes accessible independently */}
      <Route path="createprofile" element={<CreateProfileLayout/>}>
        <Route 
          loader = {userLoader}
          index element={<CreateProfile/>} 
        />
        <Route path="profileinformation" element={<FormTemplate/>} />
      </Route>

      <Route 
      loader = {userLoader}
      path="feedpage" 
      element={<FeedPageLayout/>}>
        <Route index element={<FeedPage/>} />
        <Route path="topresearchpage" element={<TopResearchPage/>} />
      </Route>
    </Route>

     </>
  )
)
function App() {
  return (
    <>
      <RouterProvider router = {router}/>
    </>
  )

}
export default App;