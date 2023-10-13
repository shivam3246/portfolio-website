import React from 'react'
import imageSingh from './Shu.png'
import "./Navinsvg.css"
export default function Navinsvg() {
  return (
    <div className="/">
        <div className=" justify-center bg-black text-white">
          
        <img  className=" ran h-24 float-left" src={imageSingh} alt="Logo" />
        
        <nav>
        
            <ul className=" py-8 flex space-x-8 justify-center font-serif font-bold ">
           
                <a href="/raju"><li>About</li></a>
           <a href="/kaju"> <li>Skills</li></a>
            <a href="/maju"><li>Contact</li></a>
            </ul>
        </nav>
        
        </div>
    </div>
  )
}
