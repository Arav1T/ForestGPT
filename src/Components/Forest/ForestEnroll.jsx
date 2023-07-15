import React, { useState } from 'react'
import ForestNavbar from './ForestNavbar';

export default function ForestEnroll() {
    const [Enroll, setEnroll] = useState({
        name: "",
        email: "",
        Number: "",
      });
      const [show, setshow] = useState(false)
      const handleEnroll =()=>{
        if(!show){
            setshow(true)
            setTimeout(() => {
                setshow(false)
                // setEnroll({...Enroll,name:'',email:'',Number:''})
            }, 
            3000);
        }
      }

  return (
    <div>
    <ForestNavbar/>

    
   
       <div className="bg-login bg-no-repeat  bg-login flex items-center justify-center min-h-screen bg-[url('https://wallpaperaccess.com/full/128828.jpg')]    ">
      <div className="w-full max-w-xl">
      { show && <p className="text-emerald-500 text-3xl italic">Welcome To Save Our Forset {Enroll.name}
        </p>}

      <form className=" hover:shadow-2xl hover:shadow-white  rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
          Username
        </label>
        <input className="hover:shadow-lg hover:shadow-emerald-600 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" onChange={(event) =>
            setEnroll((prev) => ({ ...prev, name: event.target.value }))
          }/>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input className="hover:shadow-lg hover:shadow-emerald-600 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" onChange={(event) =>
            setEnroll((prev) => ({ ...prev, email: event.target.value }))
          }/>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Number">
          Number
        </label>
        <input className="hover:shadow-lg hover:shadow-emerald-600 shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="Number" type="Number" placeholder="Number" onChange={(event) =>
            setEnroll((prev) => ({ ...prev, Number: event.target.value }))
          }/>
        
      </div>
      <div className="flex items-center justify-between">
        <button className="bg-gray-500 hover:shadow-lg hover:shadow-emerald-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleEnroll}>
          Enroll
        </button>
      </div>
    </form>

    </div>
    </div>
    </div>
  )
}
