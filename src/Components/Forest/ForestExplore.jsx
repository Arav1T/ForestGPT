// import React, { useContext } from 'react'
// import { CustomData } from '../../context/Context'
// import ForestNavbar from './ForestNavbar'

// export default function ForestExplore() {
//     const {forestdata} = useContext(CustomData)
//   return (
//     <div>
//     <ForestNavbar/>
//       <div className='px-24 space-y-16 '>
//                         {forestdata.map((e,i) => {
//                             return <>
//                                 <div key={e.heading} className={` flex p-4 items-center space-y-10 space-x-16   ${i%2 ===0 ? "flex flex-row-reverse" : "flex"} `}>
//                                     <div>
//                                     <img className='w-96' src={e.ico} alt={e.heading} />
//                                     </div>
//                                     <div className='space-y-10'>
//                                         <h1 className='font-semibold text-7xl'>{e.heading}</h1>
//                                         <p className='font-medium text-3xl'>{e.content}</p>
//                                     </div>
//                                 </div>
//                             </>
//                         })}
//                     </div>
//     </div>
//   )
// }
