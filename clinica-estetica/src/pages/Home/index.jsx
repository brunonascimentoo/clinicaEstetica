import React from "react";
import woman from '../../assets/images/woman.png'

export function Home() {
  return (
    <>
      <div className="flex justify-center w-full h-screen h-[calc(100vh-90px)] bg-gray-50 overflow-hidden">
        <div className="flex flex-col justify-between min-[1024px]:flex-row min-[1024px]:justify-end pt-[100px]">
          <div className="flex flex-col items-center justify-center text-md font-bold text-rose-400">
            <h2 className="min-[320px]:text-6xl min-[640px]:text-8xl min-[1024px]:text-10xl min-[1280px]:text-12xl min-[1280px]:mb-1000px" >Bem-vinda!</h2>
            <h4 className="text-xs text-rose-300 min-[640px]:text-2xs min-[1024px]:text-md">Centro de saúde e beleza</h4>
          </div>
          <div className="">
            <img className="min-[320px]:w-[400px] min-[1024px]:w-[500px]" src={woman} alt="" />
          </div>
        </div>

      </div>
    </>
  )
}
