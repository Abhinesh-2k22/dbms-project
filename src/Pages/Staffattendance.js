import React from 'react'

function Staffattendance() {
  return (
    <div className="h-screen bg-blue-500">
      <h1 className=" py-20 text-6xl font-extrabold text-orange-500 ">STUDENT ATTENDANCE ENTRY:</h1>
      <div className="flex items-center justify-center m-10 p-7">
          <label for="dept">Department: </label>
          <input type="text" id="dept" className="rounded-xl mx-2"></input>
          <label for="prog">Program: </label>
          <input type="text" id="prog" className="rounded-xl mx-2"></input>
          <label for="year">Year: </label>
          <input type="text" id="year" className="rounded-xl mx-2"></input>
      </div>
    </div>
  )
}

export default Staffattendance
