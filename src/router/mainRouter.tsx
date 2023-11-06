import {createBrowserRouter} from "react-router-dom"
import Layout from "../block/Layout"
import Landing from "../pages/Landing"

export const mainRouter = createBrowserRouter([{
    path:"/",
    element:<Layout/>,
    children:[{
        index:true,
        element:<Landing/>
    }]
}])