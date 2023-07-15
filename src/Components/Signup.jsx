import React, { useState } from 'react'
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { auth } from '../firbase'
import { useNavigate } from 'react-router-dom'


export default function Signup() {
    const navigate = useNavigate();
  const [Values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");


  const handleSubmission = () => {
      if (!Values.name || !Values.email || !Values.password) {
          setErrorMsg("Fill all fields");
          return;
        }
        setErrorMsg("");
        console.log(Values.name,Values.email,Values.password)

   
    createUserWithEmailAndPassword(auth, Values.email, Values.password)
      .then(async (res) => {
        
        
        const user = res.user;
        await updateProfile(user, {
          displayName: Values.name,
        });
        navigate("/Forest");
    })
    .catch((err) => {
       
        setErrorMsg(err.message);
        console.log("hello")
      });
  };
  return (
    <div className="bg-login bg-no-repeat  bg-login flex items-center justify-center min-h-screen bg-[url('https://wallpaperaccess.com/full/128828.jpg')]    ">
      <div className="w-full max-w-xl">
       
      <form className=" hover:shadow-2xl hover:shadow-white  rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
          Username
        </label>
        <input className="hover:shadow-lg hover:shadow-emerald-600 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }/>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input className="hover:shadow-lg hover:shadow-emerald-600 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }/>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input className="hover:shadow-lg hover:shadow-emerald-600 shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" onChange={(event) =>
            setValues((prev) => ({ ...prev, password: event.target.value }))
          }/>
        <p className="text-red-500 text-xs italic">{errorMsg}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <button className="bg-gray-500 hover:shadow-lg hover:shadow-emerald-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleSubmission}>
          Sign Up
        </button>
      </div>
    </form>

    </div>
    </div>
  )
}
