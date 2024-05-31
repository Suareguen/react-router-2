import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"

function Root() {
  return (
    <div>
        <Header />
        <section>
            <Outlet/>
        </section>
        <h1>Footer</h1>
    </div>
  )
}

export default Root