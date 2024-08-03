
import './App.css';
import {
  createBrowserRouter,
  Route,  
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

//pages
import Home from './Components/home/home';
import RootLayout from './layouts/rootLayout';
import SigninPage from './Components/authpages/SigninPage';
import CreateProfile from './Components/userInformationForms/createProfile';
import Error404 from './Components/notfound/notFound';
import FormTemplate from './Components/userInformationForms/formTemplate';
import FeedPage from './Components/feedpage/feedPage';
import UserPostTitle from './Components/feedpage/scrollingfeed/userPostTitle';
import Mainprofile from './Components/profilepage/mainprofile';
import CreateProfileLayout from './layouts/createProfileLayout';
import { userLoader } from './Components/apiLoaders/apiLoaders';
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path = "/" element = {<RootLayout/>}>
      <Route index element = {<Home/>}></Route>
      <Route path = "signin" element = {<SigninPage/>}></Route>
    </Route>
      <Route path = "createprofile" element = {<CreateProfileLayout/>}>
        <Route 
        index element = {<CreateProfile/>}
        loader ={userLoader}
        ></Route>
        <Route path = "profileinformation" element = {<FormTemplate/>}></Route>
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