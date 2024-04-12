import React from 'react'

function Loginstaff() {
  return (
    <div className="bg-blue-600 justify-center items-center flex h-screen">
      <div className=" bg-blue-500 p-36 rounded-lg border-4 border-solid border-slate-950">
        <h1 className="text-5xl font-bold  text-white ">PSG COLLEGE OF TECHNOLOGY</h1>
        <div className=" my-10 text-xl">
          <div className="m-4 text-2xl font-extrabold text-yellow-400 flex justify-center items-center">STAFF LOGIN:
          </div>
        <div className=" my-14">
          <div className="font-semibold flex justify-center items-center">
              <label for="loginid">Login ID: </label>
              <input type="text" id="loginid" className="rounded-xl mx-2"></input>
          </div>
          <div className="font-semibold flex justify-center mt-2 mr-2">
              <label for="loginpass">Password: </label>
              <input type="text" id="loginpass" className="rounded-xl mx-2"></input>
          </div>  
        </div>  
        </div>
      </div> 
    </div>
  )
}

export default Loginstaff
