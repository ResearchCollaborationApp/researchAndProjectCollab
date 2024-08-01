
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
import Error404 from './Components/notfound/notFound';
import CreateProfile from './Components/userInformationForms/createProfile';
import FormTemplate from './Components/userInformationForms/formTemplate';
import FeedPage from './Components/feedpage/feedPage';
import UserPostTitle from './Components/feedpage/scrollingfeed/userPostTitle';
import Mainprofile from './Components/profilepage/mainprofile';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element = {<RootLayout/>}>
      <Route index element = {<Home/>}></Route>
      <Route path = "signin" element = {<SigninPage/>}></Route>
      <Route path = "createprofile" element = {<CreateProfile/>}></Route>
      <Route path = "profileinformation" element = {<FormTemplate/>}></Route>
      <Route path = "*" element = {<Error404/>}/>
    </Route>
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