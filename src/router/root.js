import { lazy, Suspense } from "react";
import todoRouter from "./todoRouter";
const { createBrowserRouter } = require("react-router-dom") ;

const Loding = <div>Loding.....</div>
const Main = lazy(() => import("../pages/MainPage"))
const About = lazy(() => import("../pages/AboutPage"))
const TodoIndex = lazy(() => import("../pages/todo/indexPage"))


const root = createBrowserRouter([
    {
        path:"",
        element: <Suspense fallback={Loding}><Main/></Suspense>
    },
    {
        path:"about",
        element: <Suspense fallback={Loding}><About/></Suspense>
    },
    {
        path:"todo",
        element: <Suspense fallback={Loding}><TodoIndex/></Suspense>,
        children:todoRouter()
        
    }
])

export default root;