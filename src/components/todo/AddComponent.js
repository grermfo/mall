import { useState } from "react";
import { postAdd } from "../../api/todoApi";
import ResultModal from "../common/ResultModal";

const initState = {
title : '',
writer : '',
dueDate : ''
}

const AddComponent = () =>{
    const [todo, setTodo] = useState({...initState})
    const [result, setResult] = useState(null)

    const handleChangeTodo = (e) => {

        todo[e.target.name] = e.target.value
        setTodo({...todo})
    }

    const handleClickAdd = () => {
        console.log("########## handleClickAdd ")
        postAdd(todo).then(result => {
            console.log("###### handleClickAdd :: result == " + result)
            setResult(result.TNO)
            setTodo({...initState})
        }).catch(e => { console.error(e)})


    }

    const closeModal = () => {
        setResult(null)
    }

    return (
        <div className="border-2 border-sky-200 mt-10 m-2 p-4">
            {/* 모달 처리 */}
                {result ? <ResultModal title={'Add Result'} content={`New ${result} Added`} coallbackFn={closeModal}/> : <></>}
            {/* 모달 처리 */}

            <div className="flex justify-center">
                <div className="relactive mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">타이틀</div>
                    <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md" 
                     name="title" type={`text`} value={todo.title} onChange={handleChangeTodo}></input>

                </div>
           </div>
       
           <div className="flex justify-center">
                <div className="relactive mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">작성자</div>
                    <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md" 
                     name="writer" type={`text`} value={todo.writer} onChange={handleChangeTodo}></input>

                </div>
           </div>
       
           
           <div className="flex justify-center">
                <div className="relactive mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">작성일</div>
                    <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md" 
                     name="dueDate" type={`date`} value={todo.dueDate} onChange={handleChangeTodo}></input>

                </div>
           </div>
       
        <div className="flex justify-end">
                <div className="relactive mb-4 flex w-full flex-wrap items-stretch">
                    <button type="button" className="rounded p-4 w-36 bg-blue-500 text-xl text-white" 
                     onClick={handleClickAdd}>ADD</button>
              </div>
        </div>
    </div>

    );

}

export default AddComponent
