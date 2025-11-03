"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Confetti from "./confetti";

export default function Home() {
  const [candleBlown, setCandleBlown] = useState(false);
  const [confettiLoop, setConfettiLoop] = useState(false);
  const [confettiCount, setConfettiCount] = useState(0);

  const blowCandle = () => {
    setCandleBlown(true);
    setConfettiLoop(true);
    setConfettiCount(0);
  };

  useEffect(() => {
    if (confettiLoop && confettiCount < 3) {
      const interval = setInterval(() => {
        setConfettiCount((prev) => prev + 1);
        if (confettiCount >= 2) {
          setConfettiLoop(false);
        }
      }, 5200);

      return () => clearInterval(interval);
    }
  }, [confettiLoop, confettiCount]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#0a0a0a] via-[#1a0f00] to-black text-[#ffb347] font-[Comic_Sans_MS] tracking-wide px-4">
      <main className="flex flex-col md:flex-row w-full md:items-stretch items-center justify-center gap-6 md:gap-0">
        {/* Left Half */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 500"
            width="800"
            height="500"
            className="max-w-full h-auto"
            aria-hidden="true"
          >
            <defs>
              <path id="curve" d="M100,180 A300,150 0 0,1 700,180" />

              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFD966" />
                <stop offset="50%" stopColor="#FFC300" />
                <stop offset="100%" stopColor="#FF9900" />
              </linearGradient>
            </defs>

            <rect width="100%" height="100%" fill="none" />

            <text
              fontFamily="Fredoka One, cursive"
              fontSize="52"
              textAnchor="middle"
              filter="url(#glow)"
              fill="url(#grad)"
            >
              <textPath href="#curve" startOffset="50%">
                Congrats my friend :)
              </textPath>
            </text>

            <text
              x="250"
              y="200"
              fontFamily="Fredoka One, cursive"
              fontSize="34"
              filter="url(#glow)"
              fill="url(#grad)"
              transform="rotate(-5, 250, 200)"
            >
              Click the Balloon :)
            </text>

            <text
              x="300"
              y="300"
              fontFamily="Fredoka One, cursive"
              fontSize="32"
              filter="url(#glow)"
              fill="url(#grad)"
              transform="rotate(5, 300, 300)"
            >
              You are working hard!
            </text>

            <text
              x="200"
              y="380"
              fontFamily="Fredoka One, cursive"
              fontSize="32"
              filter="url(#glow)"
              fill="url(#grad)"
              transform="rotate(-5, 300, 300)"
            >
              You deserve it!
            </text>

            <text
              x="440"
              y="500"
              fontFamily="Fredoka One, cursive"
              fontSize="22"
              fill="#FF9966"
              filter="url(#glow)"
              transform="rotate(-3, 350, 400)"
            >
              (Your supporter appreciates you)
            </text>
          </svg>
        </div>

        {/* Right Half */}
        <div
          className="w-full md:w-1/2 flex items-center justify-center cursor-pointer"
          onClick={blowCandle}
        >
          <div className="relative">
            <div className="w-52 h-52 sm:w-64 sm:h-64 flex items-center justify-center">
              <img
                src="/pusheen-flying.gif"
                alt="Flying Balloon"
                className="w-full h-full object-contain"
              />
            </div>
            {!candleBlown && (
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-6 h-12 rounded-sm animate-flicker"></div>
            )}
          </div>
        </div>
      </main>

      {confettiLoop && <Confetti pieces={30} duration={5200} />}
    </div>
  );
}
