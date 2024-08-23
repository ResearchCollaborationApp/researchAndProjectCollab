import { Outlet } from "react-router-dom";
import Navigation from "../Components/home/homeNavigation";
import { useState} from "react";
export default function RootLayout() {
  const [user, setUser] = useState(null);
  return (
    <div>
      <Navigation setUser= {setUser}/>
      <main>
        <Outlet context={{ user, setUser }} />
      </main>
    </div>
  );
}
