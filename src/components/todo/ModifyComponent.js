import { useEffect, useState } from "react"

import {deleteOne, getOne, putOne} from "../../api/todoApi"
import useCustomMove from "../../hooks/useCustomMove"

import ResultModal from "../common/ResultModal"

const initState = {
    tno:0,
    title:'',
    writer : '',
    dueDate : null,
    complente : false

}

const ModifyComponent = ({tno}) => {
    const [todo, setTodo] = useState({...initState})
    
    //모달
    const [result, setResult] = useState(null)

    //이동
    const {moveToList, moveToRead} = useCustomMove()

    useEffect(() => {
        getOne(tno).then(data => setTodo(data))
    },[tno])

    const handleChangeTodo = (e) => {
        todo[e.target.name] = e.target.value
        setTodo({...todo})
    }

    const handelChangeTodoComplete = (e) => {
        const value= e.target.value
        todo.complente = (value === 'Y')
            setTodo({...todo})
    }

    const handleClickModify = () => {
        putOne(todo).then(data => {
            console.log("#################### handleClickModify : result ==" + data)
            setResult('Modified')
        })
    }

    const handleClickDelete = () => {
        deleteOne(tno).then(data => {
            console.log("#################### handleClickDelete : result ==" + data)
            setResult('Deleted')
    
        })
    }

    const closeModal = () => {
        if(result === 'Deleted') {
            moveToList()
        }else {
            moveToRead(tno)
        }
    }

    return (
        <div className="border-2 border-sky-200 mt-10 m-2 p-4">
      {/* 모달 처리 */}
      {result ? <ResultModal title={'처리결과'} content={result} coallbackFn={closeModal}/> : <></>}
       {/* 모달 처리 */}


            {/*tno*/}    
            <div className="flex justify-center">
                <div className="relactive mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">TNO</div>
                    <div className="w-4/5 p-6 rounded-r border border-solid border-gray-100 shadow-md" >
                    {todo.tno} 
                    </div>
                </div>
           </div>
           {/*writer*/} 
           <div className="flex justify-center">
                <div className="relactive mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">작성자</div>
                    <div className="w-4/5 p-6 rounded-r border border-solid border-gray-100 shadow-md" >
                    {todo.writer} 
                    </div>
                </div>
           </div>
            {/*title*/}
           <div className="flex justify-center">
                <div className="relactive mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">타이틀</div>
                    <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md" 
                     name="title" type={`text`} value={todo.title} onChange={handleChangeTodo}></input>

                </div>
           </div>

           {/*dueDate*/}
           <div className="flex justify-center">
                <div className="relactive mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">작성일</div>
                    <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md" 
                     name="dueDate" type={`date`} value={todo.dueDate} onChange={handleChangeTodo}></input>

                </div>
           </div>
       
           {/*complete*/}
           <div className="flex justify-center">
                <div className="relactive mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">COMPLETE</div>
                    <select name="status" className="border border-solid rounded m-1 p-2" 
                     onChange={handelChangeTodoComplete}
                     value={todo.complente ? 'Y' : 'N'}>
                        <option value='Y'>Y</option>
                        <option value='N'>N</option>
                    </select>  

                </div>
           </div>
       
            <div className="flex justify-end p-4">
                <button type="button" className="rounded p-4 m-2 text-xl w-32 text-white bg-red-500 "
                    onClick={handleClickDelete}
                >
                    Delete
                </button>
                <button type="button" className="rounded p-4 m-2 text-xl w-32 text-white bg-blue-500 "
                    onClick={handleClickModify}
                >
                    Modify
                </button>

            </div>
        </div>
    )
}

export default ModifyComponent