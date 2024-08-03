import { Outlet } from "react-router-dom"

function CreateProfileLayout() {
  return (
    <div>
       <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default CreateProfileLayout
