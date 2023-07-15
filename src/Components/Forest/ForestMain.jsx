import React, { useEffect, useState } from 'react'
import ForestNavbar from './ForestNavbar'
import ForestFotter from './ForestFotter'
import { Link } from 'react-router-dom'

export default function ForestMain() {
    const [NavValidation, setNavValidation] = useState(false)
    useEffect(() => {
        const handleScroll =()=>{
        if (window.scrollY > 0) {
            setNavValidation(true)
        }
        else {
            setNavValidation(false)
        }}
        window.addEventListener('scroll', handleScroll);

        return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    }, [])
    const FirstPart = [
        { ico: "https://img.icons8.com/ios-glyphs/30/dog-paw-print.png", heading: 'Animal', content: 'Wildlife Conservation word reminds us of saving the resources which have been provided to us as nature' },
        { ico: "https://img.icons8.com/windows/32/forest.png", heading: 'Forest', content: 'We should plant more and more trees and protect forests. Save trees, save lives! ' },
        { ico: 'https://img.icons8.com/external-glyph-andi-nur-abdillah/64/external-bottle-ecology-glyph-glyph-andi-nur-abdillah.png', heading: 'Plastic', content: "Plastic pollution is the accumulation of plastic objects and particles in the Earth's environment that adversely affects humans, wildlife and their habitat" },
        { ico: 'https://img.icons8.com/external-smashingstocks-basic-outline-smashing-stocks/53/external-Car-Pollution-natural-disaster-icon-smashingstocks-basic-outline-smashing-stocks.png', heading: 'Vechile Pollution', content: 'Forest in situ observations using unmanned aerial vehicle as an alternative of terrestrial measurements.' }
    ]
    return (
        <>
            <div>
                <div className="bg-[url('https://wallpaperaccess.com/full/128828.jpg')] h-screen relative">
                    <ForestNavbar Naval={NavValidation} />
                    <div className='w-1/2 top-36 relative pl-20 space-y-4'>
                        <div>
                            <img className='w-52 animate-pulse' src="https://img.icons8.com/3d-fluency/94/forest.png" alt="Img" />
                        </div>
                        <h1 className='font-bold text-2xl text-emerald-200 '>Forest For Life</h1>
                        <p className='font-semibold text-lg text-emerald-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta cupiditate facilis itaque, voluptates culpa hic quia quos. Eaque impedit aliquid, sapiente temporibus atque distinctio tenetur quo ea labore repellendus. Libero?</p>
                        <div className='space-x-3'>
                            <button className='border p-4 rounded-3xl hover:shadow-md text-emerald-50 bg-emerald-400 hover:shadow-emerald-200 hover:bg-emerald-300 '> <Link to='/forestcustom'>Start Writing</Link> </button>
                            <button className='border p-4 rounded-3xl hover:shadow-md text-emerald-50 hover:shadow-emerald-600'> <Link to='/'> Log in </Link> </button>
                        </div>
                    </div>

                </div>
                <div className='bg-emerald-500'>
                    <div className=' grid grid-cols-4 px-24 space-x-5 relative top-[-75px]'>
                        {FirstPart.map(e => {
                            return <>
                                <div key={e.heading} className='border bg-emerald-200 flex p-4 space-x-2 rounded-3xl hover:bg-emerald-300 '>
                                    <div>
                                    <img className='w-36' src={e.ico} alt={e.heading} />
                                    </div>
                                    <div className='space-y-2'>
                                        <h1 className='font-semibold text-lg'>{e.heading}</h1>
                                        <p className='font-medium'>{e.content}</p>
                                    </div>
                                </div>
                            </>
                        })}
                    </div>
                    <div className='flex px-24 justify-between space-x-10'>
                        <span className='p-10 space-y-3'>
                        <h1 className='text-3xl font-bold'>Forest For Life</h1>
                        <p className='font-semibold text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quisquam animi asperiores, nesciunt, repellat tempora ab voluptate molestiae culpa amet odio reprehenderit consequuntur autem vel inventore. Quibusdam officia itaque numquam!</p>
                        <button className='border bg-emerald-300 p-5 rounded-xl hover:shadow-xl hover:shadow-emerald-50'> <Link to='/forestexplore'>Explore More</Link> </button>
                        </span>
                        <span className=''>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/KA3cWLgAS1M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </span>
                    </div>
                </div>
                <div className='bg-emerald-600'>
                <h1 className='flex justify-center font-bold text-4xl pt-4'>Description</h1>
                <div className='px-24 space-y-16 '>
                        {FirstPart.map((e,i) => {
                            return <>
                                <div key={e.heading} className={` flex p-4 items-center space-y-10 space-x-16   ${i%2 ===0 ? "flex flex-row-reverse" : "flex"} `}>
                                    <div>
                                    <img className='w-96' src={e.ico} alt={e.heading} />
                                    </div>
                                    <div className='space-y-10'>
                                        <h1 className='font-semibold text-7xl'>{e.heading}</h1>
                                        <p className='font-medium text-3xl'>{e.content}</p>
                                    </div>
                                </div>
                            </>
                        })}
                    </div>
                </div>
                <ForestFotter/>
            </div>
        </>
    )
}
