import { Outlet } from 'react-router-dom'
import HomeNavigation from '../Components/home/homeNavigation'
import Footer from '../Components/footer/footer'
export default function RootLayout() {
  return (
    <div>
     <HomeNavigation/>
     <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}
