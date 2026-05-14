"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useBirthdayStore } from "@/store/useBirthdayStore";
import { personalityResults } from "@/lib/quizData";
import FloatingPetals from "@/components/FloatingPetals";

export default function ResultPage() {
  const name = useBirthdayStore((s) => s.name);
  const personalityType = useBirthdayStore((s) => s.personalityType);
  const reset = useBirthdayStore((s) => s.reset);
  const router = useRouter();
  const confettiRef = useRef(false);

  const result = personalityType ? personalityResults[personalityType] : null;

  useEffect(() => {
    if (!result || confettiRef.current) return;
    confettiRef.current = true;

    // Dynamically import canvas-confetti
    import("canvas-confetti").then((confettiModule) => {
      const confetti = confettiModule.default;
      const colors = ["#E8B4B8", "#C4868A", "#A8B5A2", "#D4A853", "#FDF6EC"];

      // First burst
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors,
      });

      // Side bursts
      setTimeout(() => {
        confetti({
          particleCount: 40,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors,
        });
        confetti({
          particleCount: 40,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors,
        });
      }, 300);
    });
  }, [result]);

  if (!result) {
    return (
      <main
        className="min-h-screen flex flex-col items-center justify-center"
        style={{ background: "var(--cream)" }}
      >
        <p
          className="font-playfair text-lg"
          style={{ color: "var(--warm-brown)" }}
        >
          Hmm, belum ada hasil quiz...
        </p>
        <button
          onClick={() => router.push("/")}
          className="mt-6 px-8 py-3 rounded-full text-xs tracking-widest uppercase"
          style={{
            background: "var(--dusty-rose)",
            color: "#FFF8F0",
            border: "none",
          }}
        >
          Mulai dari Awal
        </button>
      </main>
    );
  }

  return (
    <main
      className="relative min-h-screen overflow-hidden flex flex-col items-center px-6 py-12"
      style={{ background: "var(--cream)" }}
    >
      {/* Background blobs */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 300,
          height: 300,
          background: result.luckyColorHex,
          opacity: 0.08,
          top: -80,
          right: -60,
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 220,
          height: 220,
          background: "var(--sage)",
          opacity: 0.1,
          bottom: -60,
          left: -40,
        }}
      />

      <FloatingPetals />

      {/* Badge */}
      <div
        className="relative z-10 mb-5 px-4 py-1.5 rounded-full text-xs tracking-widest uppercase"
        style={{
          background: "#FFF0F0",
          border: "1px solid #F0CCCC",
          color: "var(--dusty-rose-dark)",
        }}
      >
        ✨ Hasil Quiz
      </div>

      <p
        className="relative z-10 text-xs tracking-widest uppercase mb-2"
        style={{ color: "var(--text-muted)" }}
      >
        Kepribadian {name || "Kamu"}
      </p>

      {/* Result Card */}
      <div
        className="relative z-10 w-full max-w-md animate-pop-in rounded-3xl overflow-hidden"
        style={{
          border: `2px solid ${result.luckyColorHex}`,
          background: "var(--card-bg)",
        }}
      >
        {/* Color stripe top */}
        <div style={{ height: 6, background: result.luckyColorHex }} />

        <div className="p-7">
          {/* Emoji & Type */}
          <div className="flex items-center justify-between mb-1">
            <span style={{ fontSize: 42 }}>{result.emoji}</span>
          </div>

          {/* Title */}
          <h2
            className="font-playfair mt-3 mb-0.5 text-2xl sm:text-[30px]"
            style={{ fontWeight: 600, color: "var(--text-dark)" }}
          >
            {result.title}
          </h2>
          <p
            className="font-playfair mb-5"
            style={{
              fontStyle: "italic",
              fontSize: 14,
              color: "var(--text-muted)",
            }}
          >
            {result.subtitle}
          </p>

          {/* Divider */}
          <div
            className="mb-5"
            style={{ height: 1, background: "var(--border-rose)" }}
          />

          {/* Description */}
          <p
            className="font-playfair mb-5"
            style={{
              fontSize: 14,
              color: "var(--warm-brown)",
              lineHeight: 1.7,
            }}
          >
            "{result.description}"
          </p>

          {/* Prediction box */}
          <div
            className="rounded-2xl p-4 mb-5"
            style={{
              background: result.luckyColorHex + "18",
              border: `1px solid ${result.luckyColorHex}40`,
            }}
          >
            <p
              className="text-xs tracking-widest uppercase mb-2"
              style={{ color: result.luckyColorHex }}
            >
              🔮 Ramalan Tahun Ini
            </p>
            <p
              className="font-playfair"
              style={{
                fontSize: 13,
                color: "var(--text-dark)",
                lineHeight: 1.65,
              }}
            >
              {result.prediction}
            </p>
          </div>

          {/* Lucky color */}
          <div className="flex items-center gap-3">
            <div
              className="rounded-full flex-shrink-0"
              style={{
                width: 28,
                height: 28,
                background: result.luckyColorHex,
              }}
            />
            <div>
              <p
                className="text-xs tracking-widest uppercase"
                style={{ color: "var(--text-muted)" }}
              >
                Warna Keberuntungan
              </p>
              <p
                className="text-sm font-medium"
                style={{ color: "var(--text-dark)" }}
              >
                {result.luckyColor}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Closing message */}
      <p
        className="font-playfair relative z-10 mt-7 text-center"
        style={{
          fontStyle: "italic",
          fontSize: 15,
          color: "var(--warm-brown)",
          maxWidth: 360,
          lineHeight: 1.7,
        }}
      >
        Selamat ulang tahun, {name || "kamu"}! Semoga tahun ini jadi yang tahun
        terbaik kamu.
      </p>

      {/* Action buttons */}
      <div className="relative z-10 flex flex-col sm:flex-row w-full sm:w-auto items-stretch gap-3 mt-6">
        <button
          onClick={() => {
            if (navigator.share) {
              navigator.share({
                title: "Birthday Quiz Result",
                text: `Tipe kepribadianku: ${result.title} ${result.emoji}`,
              });
            }
          }}
          className="rounded-full px-6 py-2.5 text-xs tracking-widest uppercase transition-all duration-200"
          style={{
            background: "var(--dusty-rose)",
            border: "none",
            color: "#FFF8F0",
          }}
        >
          Share Hasilku 🎀
        </button>

        <button
          onClick={() => {
            reset();
            router.push("/");
          }}
          className="rounded-full px-6 py-2.5 text-xs tracking-widest uppercase transition-all duration-200 text-center"
          style={{
            background: "transparent",
            border: "1.5px solid var(--border-rose)",
            color: "var(--text-muted)",
          }}
        >
          Ulangi Quiz
        </button>
      </div>

      <p
        className="relative z-10 mt-8 text-xs tracking-widest uppercase opacity-40"
        style={{ color: "var(--text-muted)" }}
      >
        made with love ✦
      </p>
    </main>
  );
}
