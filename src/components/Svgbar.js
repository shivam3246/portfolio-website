import React from 'react'

export default function Navbar() {
    return (
      <div className="  bg-black">
            
                <ul>
                    <div className="px-8 py-8 flex justify-center hover:cursor-pointer stroke-white stroke-2 animate-pulse">
                    <a href= "/acha ">
                    <svg height="80" width="100" xmlns="http://www.w3.org/1999" >
                    
                     
                            <path stroke-linecap="butt" d="M5 20 l150 0"  />
                            <path stroke-linecap="round" d="M5 40 l150 0" />
                            <path stroke-linecap="square" d="M5 60 l150 0" />
                            
                    </svg>
                    </a>
                    </div>
                    {/* <li className="px-8 py-4 flex">
                        <a href="/about" rel="noopener noreferrer">About</a>
                    </li> */}
                </ul>
            
            </div>
        
    )
}
