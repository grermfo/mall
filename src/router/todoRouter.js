import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";

const Loding =<div>Loding....</div>
const TodoList = lazy(() => import("../pages/todo/listPage"))
const TodoRead = lazy(() => import("../pages/todo/readPage"))
const TodoAdd = lazy(() => import("../pages/todo/addPage"))
const TodoModify = lazy(() => import("../pages/todo/modifyPage"))


const todoRouter = () => {

    return[
        {
            path: "list",
            element : <Suspense fallback={Loding}><TodoList/></Suspense>
        },
        {
            path: "",
            element : <Navigate replace to="list"/>
        },
        {
            path: "read/:tno",
            element : <Suspense fallback={Loding}><TodoRead/></Suspense>
        },
        {
            path: "add",
            element : <Suspense fallback={Loding}><TodoAdd/></Suspense>
        },
        {
            path: "modify/:tno",
            element : <Suspense fallback={Loding}><TodoModify/></Suspense>
        }
        

    ]
} 

export default todoRouter;