import { Outlet } from 'react-router-dom'
import Navigation from '../Components/home/homeNavigation'
import Footer from '../Components/footer/footer'
export default function HomePageLayout() {
  return (
    <div>
    <Navigation/>
     <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  
  )
}