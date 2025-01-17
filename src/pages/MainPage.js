//import { Link } from "react-router-dom";
import BasicLayout from "../layouts/bagicLayout";
const MainPage = () => {
    return (
       /* <div className="text-3xl">
            <div>MainPage</div>

        </div>*/
        /*<>
            <div className="flex">
            <Link to={'/about'}>About</Link>

            </div>
            <div className=" text-3xl bg-red-400">MainPage</div>
            */
           <BasicLayout>
            <div className="text-4xl">Main Page</div>
           </BasicLayout>
        

    );
}

export default MainPage;