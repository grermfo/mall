import { useEffect , useState} from "react";
import useCustomMove from "../../hooks/useCustomMove"
import PageComponent from "../common/PageComponent"
import { getList } from "../../api/todoApi";

const initState = {
    dtoList : [],
    pageNumList:[],
    prev : false,
    next : false,
    totalCount : 0,
    prevPage : 0,
    nextPage: 0,
    totalPage : 0,
    current : 0 
 }

const ListComponent =  () => {
    const {page, size, refresh, moveToList, moveToRead} = useCustomMove();
    const [serverData, setServerData] = useState(initState)

    useEffect(() => {
        getList({page, size}).then(data => {
            console.log("############ listComponent :: data == " + data)
            setServerData(data) //데이터 담기

        })

    }, [page, size,refresh])

    return (
        <div className="border-2 border-blue-100 mt-10 mr-2 ml-2">
           <div className="flex flex-wrap mx-auto justify-center p-6">
             {serverData.dtoList.map(todo => 
               
               
                <div key={todo.tno} className="w-full min-w-[400px] p-2 m-2 rounded shadow-md">

                    <div className="flex">
                        <div className="font-extrabold text-2xl p-2 w-1/12"
                             onClick={() => moveToRead(todo.tno)}   
                        >{todo.tno}</div>
                        <div className="font-extrabold text-1xl m-1 p-2 w-8/12">{todo.title}</div>
                        <div className="font-medium text-1xl m-1 p-2 w-2/10">{todo.dueDate}</div>
                        
                    </div>
                </div>    


             )}
            </div>   
            <PageComponent serverData={serverData} movePage={moveToList}></PageComponent> 
             
        </div>
    );

}

export default ListComponent
