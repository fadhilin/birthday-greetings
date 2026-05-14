"use client";

import { useEffect, useState } from "react";

interface Petal {
  id: number;
  symbol: string;
  left: string;
  fontSize: string;
  duration: string;
  delay: string;
}

const PETAL_SYMBOLS = ["🌸", "🌷", "✿", "❀", "🌺", "✦", "💗", "💘", "💖", "💝"];

export default function FloatingPetals() {
  const [petals, setPetals] = useState<Petal[]>([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Spawn initial petals
    for (let i = 0; i < 10; i++) {
      spawnPetal(i * 300);
    }

    const interval = setInterval(() => {
      spawnPetal(0);
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  function spawnPetal(initialDelay: number) {
    const duration = 5 + Math.random() * 6;
    const delay = initialDelay / 1000 + Math.random() * 2;

    const petal: Petal = {
      id: Date.now() + Math.random(),
      symbol: PETAL_SYMBOLS[Math.floor(Math.random() * PETAL_SYMBOLS.length)],
      left: Math.random() * 100 + "%",
      fontSize: 12 + Math.random() * 14 + "px",
      duration: duration + "s",
      delay: delay + "s",
    };

    setPetals((prev) => [...prev, petal]);
    setCounter((c) => c + 1);

    setTimeout(
      () => {
        setPetals((prev) => prev.filter((p) => p.id !== petal.id));
      },
      (duration + delay) * 1000 + 500,
    );
  }

  return (
    <>
      {petals.map((petal) => (
        <span
          key={petal.id}
          className="petal"
          style={{
            left: petal.left,
            fontSize: petal.fontSize,
            animationDuration: petal.duration,
            animationDelay: petal.delay,
          }}
        >
          {petal.symbol}
        </span>
      ))}
    </>
  );
}
