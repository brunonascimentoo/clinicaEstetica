import React from "react";
import { Navbar } from '../../components/Navbar'
import woman from '../../assets/images/woman.png'

export function Home() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center w-full h-[calc(100vh-139px)] min-[1024px]:h-[calc(100vh-112px)] bg-gray-50 overflow-hidden">
        <div className="flex flex-col justify-between min-[1024px]:flex-row min-[1024px]:items-center pt-[100px]">
          <div className="flex flex-col items-center justify-center text-md font-bold text-rose-400">
            <h2 className="font-vibe tracking-wider text-8xl min-[640px]:text-10xl min-[1024px]:text-12xl min-[1280px]:mb-1000px" >Bem-vinda!</h2>
            <h4 className="font-vibe text-xl text-rose-300 min-[640px]:text-2xl min-[1024px]:text-4xl">Centro de saúde e beleza</h4>
          </div>
          <div className="">
            <img className="w-[400px] min-[1024px]:w-[700px]" src={woman} alt="" />
          </div>
        </div>

      </div>
    </>
  )
}
