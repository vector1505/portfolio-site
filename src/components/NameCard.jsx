import React from "react"


export default function NameCard(){
    return(
      <>
      <div className="bg-[url(./assets/bg.jpg)] w-462 h-175 flex justify-center items-center"> 
        <div className="flex rounded-5 text-lg text-white" style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    borderRadius: "4px",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                    backdropFilter: "blur(3.6px)",
                    WebkitBackdropFilter: "blur(3.6px)",
                    border: "1px solid rgba(255, 255, 255, 0.43)"
                }}>

                <div>
                  <h1 className="flex text-black font-black ">Life is like this... I like THIS</h1>
                  
                </div>

                </div>
      </div>
      </>
    )
}

