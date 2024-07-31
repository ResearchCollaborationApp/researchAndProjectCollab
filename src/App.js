
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
import NotFound from './Components/notfound/notFound';
import CreateProfile from './Components/userInformationForms/createProfile';
import FormTemplate from './Components/userInformationForms/formTemplate';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element = {<RootLayout/>}>
      <Route index element = {<Home/>}></Route>
      <Route path = "signin" element = {<SigninPage/>}></Route>
      <Route path = "createprofile" element = {<CreateProfile/>}></Route>
      <Route path = "profileinformation" element = {<FormTemplate/>}></Route>
      <Route path = "*" element = {<NotFound/>}/>
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