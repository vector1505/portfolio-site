import React from "react"


export default function About(){
  const socials = [
    { name: "Linked\nin" },
    { name: "Gith\nub" },
    { name: "Leetc\node" },
    { name: "Disco\nrd" },
  ];  
  return (
    <>
      <div className="bg-[url(./assets/bg.jpg)] w-462 h-200 flex justify-center items-end">
        <div
          className="flex rounded-5 text-lg text-white font-extrabold p-5"
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            borderRadius: "4px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            border: "1px solid rgba(255, 255, 255, 0.43)",
          }}
        >
          <div>
            {/* Quote */}
            <div className="rounded-xl px-6 py-6 text-4xl text-center mt-6 max-w-xl">
              Life is like this. I like THIS - Harvey Spectar
            </div>

            {/* Intro and Image Side by Side */}
            <div className="flex lg:flex-row items-center mt-10 max-w-5xl w-full justify-around gap-4">
              {/* Intro Box */}
              <div className="rounded-2xl p-10 w-full lg:w-3/5 text-lg leading-relaxed">
                <p>
                  Hi, My name’s Vinayak Joshi. I’m currently a sophomore studying CS and Data Science at VIT Vellore. <br />
                  Fullstack Developer with a passion for building beautifully complex systems. <br />
                  I also explore the edges of Deep Learning, Quantitative Finance, Mathematics and even Astronomy. <br />
                  I wish to meaningfully contribute to the growing plethora of knowledge in the world, and take humanity forward. <br />
                  I’m always looking for new challenges and opportunities to learn and grow. <br />
                </p>
              </div>
              {/* Centered Circle Image */}
              <div className="flex justify-center items-baseline w-full lg:w-auto mt-8 lg:mt-0">
                <img src="./assets/bg.jpeg" className="w-60 h-60 rounded-full shrink-0" />
              </div>
            </div>

            {/* Socials below both */}
            <div className="flex gap-6 mt-10 flex-wrap justify-center">
              {socials.map((s, i) => (
                <div
                  key={i}
                  className="w-20 h-20 flex items-center justify-center text-center border-2 transform rotate-45"
                >
                  <span className="transform -rotate-45 whitespace-pre-line">
                    {s.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

