"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useBirthdayStore } from "@/store/useBirthdayStore";
import { questions, calculatePersonality } from "@/lib/quizData";
import FloatingPetals from "@/components/FloatingPetals";

const LETTERS = ["A", "B", "C", "D"];

export default function QuizPage() {
  const name = useBirthdayStore((s) => s.name);
  const storeAnswers = useBirthdayStore((s) => s.answers);
  const setAnswer = useBirthdayStore((s) => s.setAnswer);
  const setPersonalityType = useBirthdayStore((s) => s.setPersonalityType);
  const router = useRouter();

  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  function selectOpt(idx: number) {
    setAnswer(current, idx);
  }

  function goForward() {
    if (storeAnswers[current] === null) return;
    if (current < questions.length - 1) {
      setCurrent((c) => c + 1);
      setAnimKey((k) => k + 1);
    } else {
      const type = calculatePersonality(storeAnswers);
      setPersonalityType(type);
      router.push("/result");
    }
  }

  function goBack() {
    if (current > 0) {
      setCurrent((c) => c - 1);
      setAnimKey((k) => k + 1);
    }
  }

  const q = questions[current];
  const selectedAnswer = storeAnswers[current];

  return (
    <main
      className="relative min-h-screen overflow-hidden flex flex-col items-center px-6 py-12"
      style={{ background: "var(--cream)" }}
    >
      {/* Background blobs */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 260,
          height: 260,
          background: "var(--sage)",
          opacity: 0.1,
          top: -70,
          right: -50,
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 200,
          height: 200,
          background: "var(--dusty-rose)",
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
          background: "#F0F4F0",
          border: "1px solid #C8D4C4",
          color: "#7A9E76",
        }}
      >
        🌿 Quiz Kepribadian
      </div>

      <h1
        className="font-playfair relative z-10 text-center mb-1 text-2xl sm:text-[32px]"
        style={{ fontWeight: 600, color: "var(--text-dark)" }}
      >
        Masa Depan{" "}
        <em style={{ fontStyle: "italic", color: "var(--dusty-rose-dark)" }}>
          {name || "Kamu"}
        </em>
      </h1>
      <p
        className="font-playfair relative z-10 text-center mb-7"
        style={{
          fontStyle: "italic",
          fontSize: 13,
          color: "var(--warm-brown)",
        }}
      >
        Jawab jujur pertanyaan ini untuk mengetahui kepribadian kamu seperti apa
        !
      </p>

      {/* Progress dots */}
      <div className="relative z-10 flex items-center gap-2 mb-6">
        {questions.map((_, i) => (
          <div key={i} className="flex items-center gap-2">
            {i > 0 && (
              <div
                className="transition-all duration-300"
                style={{
                  width: 22,
                  height: 1.5,
                  background:
                    i <= current ? "var(--dusty-rose)" : "var(--border-rose)",
                }}
              />
            )}
            <div
              className="rounded-full transition-all duration-300"
              style={{
                width: i === current ? 12 : 10,
                height: i === current ? 12 : 10,
                background:
                  i === current
                    ? "var(--dusty-rose-dark)"
                    : i < current
                      ? "var(--dusty-rose)"
                      : "var(--border-rose)",
                border: `1.5px solid ${i === current ? "var(--dusty-rose-dark)" : i < current ? "var(--dusty-rose)" : "var(--border-rose)"}`,
                transform: i === current ? "scale(1.1)" : "scale(1)",
              }}
            />
          </div>
        ))}
      </div>

      {/* Question Card */}
      <div
        key={animKey}
        className="relative z-10 w-full max-w-lg animate-card-in rounded-3xl"
        style={{
          background: "var(--card-bg)",
          border: "1.5px solid var(--border-rose)",
          padding: "28px 24px 24px",
        }}
      >
        <p
          className="text-xs tracking-widest uppercase mb-2.5"
          style={{ color: "var(--dusty-rose-dark)" }}
        >
          Pertanyaan {current + 1} dari {questions.length}
        </p>
        <p
          className="font-playfair mb-6 text-base sm:text-[18px]"
          style={{ color: "var(--text-dark)", lineHeight: 1.5 }}
        >
          {q.text}
        </p>

        <div className="flex flex-col gap-2.5">
          {q.opts.map((opt, i) => (
            <button
              key={i}
              onClick={() => selectOpt(i)}
              className="flex items-center gap-2.5 rounded-2xl text-left transition-all duration-200"
              style={{
                padding: "13px 16px",
                background:
                  selectedAnswer === i
                    ? "linear-gradient(135deg, #FFF0F0, #FDEAEA)"
                    : "var(--cream)",
                border: `1.5px solid ${selectedAnswer === i ? "var(--dusty-rose-dark)" : "#EDD8D0"}`,
                color: selectedAnswer === i ? "#8B3A40" : "var(--text-mid)",
                fontWeight: selectedAnswer === i ? 500 : 400,
                transform: selectedAnswer === i ? "translateX(4px)" : undefined,
              }}
            >
              <span
                className="flex items-center justify-center rounded-full flex-shrink-0 text-xs font-medium transition-all duration-200"
                style={{
                  width: 24,
                  height: 24,
                  background:
                    selectedAnswer === i
                      ? "var(--dusty-rose-dark)"
                      : "var(--border-rose)",
                  border: `1px solid ${selectedAnswer === i ? "var(--dusty-rose-dark)" : "var(--dusty-rose)"}`,
                  color:
                    selectedAnswer === i ? "#FFF8F0" : "var(--dusty-rose-dark)",
                  fontSize: 11,
                }}
              >
                {LETTERS[i]}
              </span>
              <span style={{ fontSize: 13, lineHeight: 1.4 }}>{opt.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="relative z-10 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3 mt-6 w-full max-w-lg">
        <button
          onClick={goBack}
          disabled={current === 0}
          className="rounded-full px-6 py-2.5 text-xs tracking-widest uppercase transition-all duration-200 disabled:opacity-30"
          style={{
            background: "transparent",
            border: "1.5px solid var(--border-rose)",
            color: "var(--text-muted)",
            cursor: current === 0 ? "not-allowed" : "pointer",
          }}
        >
          ← Kembali
        </button>

        <button
          onClick={goForward}
          disabled={selectedAnswer === null}
          className="rounded-full px-6 py-2.5 text-xs tracking-widest uppercase transition-all duration-200 disabled:opacity-40"
          style={{
            background:
              selectedAnswer !== null ? "var(--dusty-rose)" : "#EDD8D8",
            border: "none",
            color: "#FFF8F0",
            cursor: selectedAnswer !== null ? "pointer" : "not-allowed",
          }}
        >
          {current === questions.length - 1 ? "Lihat Hasilku ✨" : "Lanjut →"}
        </button>
      </div>
    </main>
  );
}
