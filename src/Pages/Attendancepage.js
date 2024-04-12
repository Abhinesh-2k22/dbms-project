import React from 'react'

function Attendancepage() {
  return (
    <div className="bg-blue-600 justify-center items-center flex h-screen">
    <div className=" bg-blue-500 p-36 rounded-lg border-4 border-solid border-slate-950">
      <h1 className="text-5xl font-bold  text-white ">PSG COLLEGE OF TECHNOLOGY</h1>
      <div className=" my-10 text-xl">
         <div className="flex items-center justify-center">
           <button className=" px-5 bg-white  font-semibold rounded-lg ">VIEW ATTENDANCE <div>PERCENTAGE</div></button>
         </div>
         <div className="flex items-center justify-center"> 
           <button className="my-2 px-5 bg-white  font-semibold  rounded-lg ">VIEW ATTENDANCE<div>REPORT</div></button>
         </div>  
      </div>
    </div> 
  </div>
  )
}

export default Attendancepage
