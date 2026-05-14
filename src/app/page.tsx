"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useBirthdayStore } from "@/store/useBirthdayStore";
import FloatingPetals from "@/components/FloatingPetals";

export default function WelcomePage() {
  const [inputName, setInputName] = useState("");
  const setName = useBirthdayStore((s) => s.setName);
  const router = useRouter();

  function handleEnter() {
    if (!inputName.trim()) return;
    setName(inputName.trim());
    router.push("/wish");
  }

  return (
    <main
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center px-6 py-12"
      style={{ background: "var(--cream)" }}
    >
      {/* Background blobs */}
      <div
        className="absolute rounded-full"
        style={{
          width: 300,
          height: 300,
          background: "var(--dusty-rose)",
          opacity: 0.12,
          top: -80,
          right: -60,
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: 200,
          height: 200,
          background: "var(--sage)",
          opacity: 0.12,
          bottom: -60,
          left: -40,
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: 100,
          height: 100,
          background: "var(--soft-gold)",
          opacity: 0.12,
          bottom: 80,
          right: 40,
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
        🎀 Special Day For U
      </div>

      {/* Tagline */}
      <p
        className="relative z-10 text-xs tracking-widest uppercase mb-3"
        style={{ color: "var(--dusty-rose-dark)" }}
      >
        Happy Birthday Kamu !!!
      </p>

      {/* Main Title */}
      <h1
        className="font-playfair relative z-10 text-center mb-2 text-4xl md:text-[42px]"
        style={{ fontWeight: 600, color: "var(--text-dark)", lineHeight: 1.2 }}
      >
        <em style={{ fontStyle: "italic", color: "var(--dusty-rose-dark)" }}>
          Selamat Ulang Tahun
        </em>
      </h1>
      <p
        className="font-playfair relative z-10 text-center mb-10"
        style={{
          fontStyle: "italic",
          fontSize: 15,
          color: "var(--warm-brown)",
        }}
      >
        ✦ Hari ini adalah harimu yang istimewa ✦
      </p>

      {/* Input Card */}
      <div
        className="relative z-10 flex flex-col items-center gap-5 w-full max-w-sm px-6 md:px-9 py-8 rounded-3xl"
        style={{
          background: "var(--card-bg)",
          border: "1.5px dashed var(--dusty-rose)",
        }}
      >
        {/* Decorative star */}
        <span
          className="absolute -top-3 px-2 text-base"
          style={{ background: "var(--cream)", color: "var(--dusty-rose)" }}
        >
          ✦
        </span>

        <p
          className="text-xs tracking-widest uppercase"
          style={{ color: "var(--text-muted)" }}
        >
          Siapa namamu?
        </p>

        <input
          type="text"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleEnter()}
          placeholder="Tulis namamu di sini..."
          maxLength={30}
          autoComplete="off"
          className="w-full bg-transparent border-0 border-b text-center outline-none transition-all duration-300 font-playfair text-xl md:text-[22px]"
          style={{
            borderBottomWidth: "1.5px",
            borderBottomColor: inputName
              ? "var(--dusty-rose-dark)"
              : "var(--dusty-rose)",
            color: "var(--text-dark)",
            paddingBottom: 8,
          }}
        />

        {/* Greeting preview */}
        {inputName.trim() && (
          <p
            className="font-playfair animate-fade-in text-center"
            style={{
              fontStyle: "italic",
              fontSize: 15,
              color: "var(--warm-brown)",
            }}
          >
            Annyeonghaseyo, {inputName.trim()}! 🌸
          </p>
        )}

        <button
          onClick={handleEnter}
          disabled={!inputName.trim()}
          className="mt-2 rounded-full px-10 py-3 text-xs tracking-widest uppercase transition-all duration-200 font-medium"
          style={{
            background: inputName.trim() ? "var(--dusty-rose)" : "#EDD8D8",
            color: "#FFF8F0",
            border: "none",
            cursor: inputName.trim() ? "pointer" : "not-allowed",
            letterSpacing: "1.5px",
          }}
        >
          Masuk ke Pesta 🎀
        </button>
      </div>

      {/* Decorative divider */}
      <div className="relative z-10 flex items-center gap-5 mt-8 opacity-50">
        <div
          className="w-10 h-px"
          style={{ background: "var(--dusty-rose-dark)" }}
        />
        <div
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: "var(--dusty-rose-dark)" }}
        />
        <span
          className="text-xs tracking-widest uppercase"
          style={{ color: "var(--dusty-rose-dark)" }}
        >
          with love
        </span>
        <div
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: "var(--dusty-rose-dark)" }}
        />
        <div
          className="w-10 h-px"
          style={{ background: "var(--dusty-rose-dark)" }}
        />
      </div>
    </main>
  );
}
