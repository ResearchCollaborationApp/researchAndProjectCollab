
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
import LoginPage from './Components/authpages/LoginPage';
import SignupPage from './Components/authpages/SignupPage';
import NotFound from './Components/notfound/notFound';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element = {<RootLayout/>}>
      <Route index element = {<Home/>}></Route>
      <Route path = "login" element = {<LoginPage/>}></Route>
      <Route path = "signup" element = {<SignupPage/>}></Route>
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