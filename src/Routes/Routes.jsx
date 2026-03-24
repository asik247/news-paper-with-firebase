import { createBrowserRouter } from "react-router"
import Root from "../Root/Root"
import Home from "../Pages/Home"
import Registation from "../Components/Registation"

const router = createBrowserRouter([
    {
        path:'/',
        Component:Root,
        children:[
            {index:true,Component:Home},
            {path:'registaion',Component:Registation}
        ]
    }
])
export default router