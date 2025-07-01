import React from "react";

export default function Header(){
    return(
        <>
            <div
                className="fixed top-0 right-0 left-0 text-4xl text-white p-7.5"
                style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    //borderRadius: "16px",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                    backdropFilter: "blur(3.6px)",
                    WebkitBackdropFilter: "blur(3.6px)",
                    //border: "1px solid rgba(255, 255, 255, 0.43)"
                }}
            >
                <h1>Vinayak Joshi</h1>
            </div>
        </>
            )
}