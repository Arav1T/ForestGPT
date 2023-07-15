import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ForestNavbar(props) {
   const navigat = useNavigate()
  return (
    <div>
      <nav className={`bg-transparent  fixed w-screen ${props.Naval && "shadow-lg shadow-black z-20 bg-emerald-100" }`}>
        <div className='flex justify-between items-center px-8'>
            <div className='animate-pulse '> 
            <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/forest.png" alt="forest"/>
            </div>
            <div>
                <ul className='flex space-x-4 pr-4 '>
                    <li onClick={()=>navigat('/Forest')} className='cursor-pointer hover:border-b hover:border-emerald-500'>Home</li>
                    <li onClick={()=>navigat('/forestabout')} className='cursor-pointer hover:border-b hover:border-emerald-500'>About</li>
                    <li onClick={()=>navigat('/')} className='cursor-pointer hover:border-b hover:border-emerald-500'>Log out</li>
                    <li onClick={()=>navigat('/forestcustom')} className='cursor-pointer hover:border-b hover:border-emerald-500'>ChatGPT</li>
                    <li onClick={()=>navigat('/forestenroll')} className='cursor-pointer hover:border-b hover:border-emerald-500'>Enroll</li>
                </ul>
            </div>
        </div>
      </nav>
    </div>
  )
}
