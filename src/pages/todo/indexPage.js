//import { Link } from "react-router-dom";
import { Outlet, useNavigate } from "react-router-dom";
import BasicLayout from "../../layouts/bagicLayout";
import React, { useCallback } from "react";

const IndexPage = () => {

    const navigate = useNavigate();

    const hClickList = useCallback(() => {
        navigate({pathname:'list'})
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const hClickAdd = useCallback(() => {
        navigate({pathname:'add'})
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
           <BasicLayout>
            <div className="w-full flex m-2 p-2 ">
                <div className="text-xl m-1 p-2 w-20 font-extrabold text-center underline" onClick={hClickList}>
                    LIST</div>
                <div className="text-xl m-1 p-2 w-20 font-extrabold text-center underline" onClick={hClickAdd}>
                    ADD</div>
            </div>
            <div className="flex flex-wrap w-full">
                <Outlet/>
            </div>
           </BasicLayout>
        

    );
}

export default IndexPage;