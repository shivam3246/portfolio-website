import React from 'react'
import imageWala from "./javas-removebg-preview.png"
import imageNii from "./reacts-removebg-preview.png"
import imageKi from "./tailu-removebg-preview.png"
import "./Skills.css"
export default function Skills() {
  return (
    <div className="h-screen bg-black text-white ">
     
        <h1 className="text-7xl py-14 flex justify-center font-bold underline transition ease-in-out  hover:-translate-y-1 hover:scale-150  duration-300">Skills</h1>
        <img className="rax w-[33%] float-left"src={imageWala} alt="" />
        <img className="rax w-[33%] float-left"src={imageKi} alt="" />
        <img className="rax w-[33%] "src={imageNii} alt="" />
        
        {/* <p className=" text-xl">
        I am working mainly on high-level languages such as Java. In Java, I am working with core concepts, servlets, and JSP web pages. The other thing I am working on is web development. In web development, I have tried my hands on different frameworks like Bootstrap,  Tailwind, and the library of React Native. I have also worked on gcloud via Qwiklabs and earned many badges through it. 

        </p> */}
    </div>
  )
}
