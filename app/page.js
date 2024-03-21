"use client"
import React, { useState } from 'react'

const page = () => {
  const[title, settitle] = useState("");
  const[desc, setdesc] = useState("");
  const[mainTask, setmainTask] = useState([]);

  const deleteHandeler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setmainTask(copyTask);

  }
  const ClearTasks = () => {
    setmainTask([]);
  }

  const submitHandler = (e) => {
    e.preventDefault()
    setmainTask([...mainTask, {title, desc}]);
    settitle("");
    setdesc("");
  }

  let renderTask = <h2>No Task Avaliable</h2>
  if(mainTask.length > 0){
    renderTask = mainTask.map((ele, i) =>{
      return (
          <li key = {i}>
            <div className='flex justify-between px-20 m-10'>
              <h4 className='text-l font-semibold'>{ele.title}</h4>
              <h4 className='text-l font-semibold'>{ele.desc}</h4>
              <button onClick={ () => {
                deleteHandeler(i)
            }}className=' bg-slate-800 text-white px-4 py-2 border border-cyan-950'>Delete</button>
            </div>
            
          </li>
            
      )
    });
  }

  return (
    <>
    <h1 className='font-bold text-5xl bg-black text-white text-center'>Todo List</h1>
    
    <form className=' flex justify-center m-5' >
      <input type='text' className=' border-2 border-zinc-800 m-2 p-1'
      placeholder='Enter Task Here'
      value={title}
      onChange={(ele) => {
        settitle(ele.target.value)
      }}
      />

      <input type='text' className=' border-2 border-zinc-800 m-2 p-1'
      placeholder='Enter Description Here'
      value={desc}
      onChange={(ele) => {
        setdesc(ele.target.value)
      }}
      />

      <button onClick={submitHandler} className=' text-sm bg-black text-white rounded m-2 p-1'>Add Task</button>
    </form>
    <hr/>

    <div >
      <div >
      <ul className='p-6 bg-slate-200 '>
        {renderTask}
      </ul>
      <div className='flex justify-center m-5'>
      <button className='bg-black text-white rounded-sm p-2' onClick={ClearTasks}>Clear</button>
      </div>
      
      </div>

    </div>

    </>
  )
}

export default page
