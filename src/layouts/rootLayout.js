import { Outlet } from 'react-router-dom'
import HomeNavigation from '../Components/home/homeNavigation'
export default function RootLayout() {
  return (
    <div>
     <HomeNavigation/>
     <main>
        <Outlet/>
      </main>
    </div>
  )
}
