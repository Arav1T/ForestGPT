import { sendPasswordResetEmail } from 'firebase/auth';
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firbase';

export default function Forgot() {
  const navigate = useNavigate();
    const [values, setValues] = useState({
      email: "",
    });
    const [errorMsg, setErrorMsg] = useState("");
  const handleSubmission = () => {
    if (!values.email) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

   
    sendPasswordResetEmail(auth, values.email)
      .then(async (res) => {
       
        navigate("/");
      })
      .catch((err) => {
        setErrorMsg(err.message);
      });
  };
  return (
    <div className=" bg-no-repeat  bg-login flex items-center justify-center min-h-screen bg-[url('https://wallpaperaccess.com/full/128828.jpg')]   ">
       <form className=" hover:shadow-2xl hover:shadow-white  rounded px-8 pt-6 pb-8 mb-4 opacity-90">
       <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Email">
                            Enter Email
                        </label>
                        <input className="hover:shadow-lg hover:shadow-emerald-600 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="Enter Email" onChange={(e) => setValues((prev) => ({ ...prev, email: e.target.value }))} />
                    </div>
                    <p className="text-red-500 text-xs italic">{errorMsg}
        </p>
                    <div className="flex items-center justify-between">
        <button className="bg-gray-500 hover:shadow-lg hover:shadow-emerald-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleSubmission}>
          Send
        </button> </div>
       </form>
    </div>
  )
}
