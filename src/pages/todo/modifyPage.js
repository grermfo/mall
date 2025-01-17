
import {  useParams } from "react-router-dom";
import ModifyComponent from "../../components/todo/ModifyComponent";
const ModifyPage = () => {


    const {tno} = useParams();

    return (
          
    <div className=" p-4 w-full bg-white">
        <div className="text-3xl font-extralight">
            Todo Modify Page Component {tno}
        </div>
            <ModifyComponent tno={tno}/>
    </div>    
    );
}

export default ModifyPage;