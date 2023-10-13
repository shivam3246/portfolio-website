import React from 'react'
import "./About.css"

export default function About() {
  return (
    <div className="h-screen bg-black text-white ">
    <h1 className="text-7xl py-14  flex justify-center font-bold underline transition ease-in-out  hover:-translate-y-1 hover:scale-150  duration-300 ">About</h1>
    <div className="card float-left">
        <p className="px-10 text-4xl">
        My name is Shivam and I’m pursuing Master of Computer Applications from Chandigarh University. I have completed my graduation with a Bachelor of Science.

        </p>
       
        </div>
        <div className="card1 float-right">
        < p className="px-10 text-4xl float-right">
         I am a passionate Software Developer who likes to learn about new technologies. I am currently enhancing my skills as a developer to be industry-ready shortly.

        </p>
        </div>
        
    </div>
  )
}
