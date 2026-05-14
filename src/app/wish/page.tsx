"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useBirthdayStore } from "@/store/useBirthdayStore";
import FloatingPetals from "@/components/FloatingPetals";

const wishes = [
  {
    icon: "🌟",
    title: "Rezeki & Karir",
    preview: "Semoga pintu rezekimu selalu terbuka lebar.",
    full: "Semoga setiap langkah di dunia karir dipenuhi kemudahan, peluang datang bertubi-tubi, dan rezeki mengalir dari arah yang tak terduga.",
  },
  {
    icon: "💛",
    title: "Kesehatan",
    preview: "Tubuh sehat, jiwa yang kuat.",
    full: "Semoga selalu diberikan kesehatan yang sempurna, energi yang melimpah, tambah tinggi dan tidak plenger , serta umur panjang penuh makna di setiap harinya.",
  },
  {
    icon: "💌",
    title: "Cinta & Kebahagiaan",
    preview: "Dikelilingi orang-orang yang tulus.",
    full: "Semoga hati selalu hangat, dikelilingi orang baik dan cinta yang tulus dari orang-orang tersayang, dan menemukan kebahagiaan di hal-hal kecil sekalipun.",
  },
  {
    icon: "🌿",
    title: "Kedamaian Hati",
    preview: "Tenang di dalam, kuat di luar.",
    full: "Semoga jiwa selalu damai, terhindar dari kegelisahan, dan selalu punya kekuatan untuk menghadapi apapun yang datang.",
  },
  {
    icon: "✨",
    title: "Mimpi & Masa Depan",
    preview:
      "Semua yang kamu impikan, semoga satu per satu menjadi nyata di tahun ini.",
    full: "Semua mimpi yang kamu jaga di dalam hati — semoga tahun ini menjadi awal dari terwujudnya satu per satu. Jangan pernah berhenti bermimpi besar, karena kamu layak mendapatkannya semua, ingat gagal adalah keberhasilan yang tertunda.",
    wide: true,
  },
  {
    icon: "👀",
    title: "Dari aku untuk kamu",
    preview: "Semoga keberuntungan selalu berpihak kepadamu.",
    full: "Semoga nasimu selalu hangat, gajadi hujan kalo mau keluar, ga macet kalo lagi dijalan, disenyumin semua orang pas lagi pas paspasan, ga ngantri kalo lagi jajan, ga pernah kekurangan, dijauhi dari orang yang berniat jahat kepadamu, semoga setiap kamu isi bensin ga pernah antri, semoga selalu terselip diskon dan gratong disetiap belanjaanmu, semoga tidak ada barang yang tertinggal saat kamu mau pergi, semoga jarang ketemu lampu merah saat kamu sedang terburu-buru, semoga hp kamu selalu dalam keadaan full baterai, tidurmu selalu nyenyak, bantal selalu dingin, nemu duit saat cuci baju, terhindar dari jalanan berlubang, semoga ketika membeli kopi favorite mu tidak kehabisan, semoga ee kamu lancar, semoga kelingking kakimu dijauhkan dari meja kepentok, uangmu selalu ada untuk beli apa aja yang perutmu mau makan, semoga tiap kamu sedang kebingungan selalu ada orang yang membantumu and the last one semoga semua hal baik membersamaimu selalu ❤️",
    wide: true,
  },
];

export default function WishPage() {
  const name = useBirthdayStore((s) => s.name);
  const router = useRouter();
  const [flipped, setFlipped] = useState<boolean[]>(
    new Array(wishes.length).fill(false),
  );

  function toggleFlip(i: number) {
    setFlipped((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      return next;
    });
  }

  const openedCount = flipped.filter(Boolean).length;

  return (
    <main
      className="relative min-h-screen overflow-hidden flex flex-col items-center px-6 py-12"
      style={{ background: "var(--cream)" }}
    >
      {/* Background blobs */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 280,
          height: 280,
          background: "var(--dusty-rose)",
          opacity: 0.1,
          top: -80,
          left: -60,
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 220,
          height: 220,
          background: "var(--sage)",
          opacity: 0.1,
          bottom: -50,
          right: -50,
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
        🌸 Doa & Harapan
      </div>

      <p
        className="relative z-10 text-xs tracking-widest uppercase mb-1.5"
        style={{ color: "var(--text-muted)" }}
      >
        Untuk {name || "kamu"} yang tercinta
      </p>

      <h1
        className="font-playfair relative z-10 text-center mb-1.5"
        style={{
          fontSize: 36,
          fontWeight: 600,
          color: "var(--text-dark)",
          lineHeight: 1.25,
        }}
      >
        Semoga kamu
        <br />
        <em
          style={{
            fontStyle: "italic",
            color: "var(--dusty-rose-dark)",
            fontSize: 30,
          }}
        >
          bahagia & sehat selalu
        </em>
      </h1>

      <p
        className="font-playfair relative z-10 text-center mb-9"
        style={{
          fontStyle: "italic",
          fontSize: 13,
          color: "var(--warm-brown)",
        }}
      >
        ✦ Klik setiap kartu untuk membuka doanya ✦
      </p>

      {/* Cards Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full max-w-lg">
        {wishes.map((wish, i) => (
          <div
            key={i}
            onClick={() => toggleFlip(i)}
            className={`animate-slide-up cursor-pointer rounded-2xl transition-all duration-300 ${
              wish.wide ? "sm:col-span-2" : ""
            }`}
            style={{
              background: "var(--card-bg)",
              border: flipped[i]
                ? "1.5px solid var(--dusty-rose)"
                : "1.5px solid var(--border-rose)",
              padding: "20px 18px",
              animationDelay: `${i * 0.15}s`,
              transform: flipped[i] ? "translateY(-2px)" : undefined,
              boxShadow: flipped[i]
                ? "0 12px 28px rgba(196,134,138,0.12)"
                : undefined,
            }}
          >
            {!flipped[i] ? (
              <div className="flex flex-col gap-2">
                <span className="text-2xl">{wish.icon}</span>
                <p
                  className="text-xs font-medium tracking-widest uppercase"
                  style={{ color: "var(--dusty-rose-dark)" }}
                >
                  {wish.title}
                </p>
                <p
                  className="font-playfair"
                  style={{
                    fontSize: 13,
                    color: "var(--text-dark)",
                    lineHeight: 1.6,
                  }}
                >
                  {wish.preview}
                </p>
                <p
                  className="text-right text-xs tracking-widest uppercase"
                  style={{ color: "#D4B8BA" }}
                >
                  tap untuk buka ↗
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-2 animate-fade-in">
                <span className="text-2xl">{wish.icon}</span>
                <p
                  className="font-playfair"
                  style={{
                    fontSize: 15,
                    color: "var(--warm-brown)",
                    lineHeight: 1.65,
                  }}
                >
                  "{wish.full}"
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="relative z-10 flex items-center gap-3 mt-8 w-full max-w-lg opacity-45">
        <div
          className="flex-1 h-px"
          style={{ background: "var(--dusty-rose-dark)" }}
        />
        <span
          className="text-xs tracking-widest uppercase whitespace-nowrap"
          style={{ color: "var(--dusty-rose-dark)" }}
        >
          ✦ semua doa ini untukmu ✦
        </span>
        <div
          className="flex-1 h-px"
          style={{ background: "var(--dusty-rose-dark)" }}
        />
      </div>

      <p
        className="relative z-10 mt-3 text-xs tracking-widest uppercase"
        style={{ color: "#D4B8BA" }}
      >
        {openedCount} dari {wishes.length} doa dibuka
        {openedCount === wishes.length ? " 🌸" : ""}
      </p>

      <button
        onClick={() => router.push("/quiz")}
        className="relative z-10 mt-7 rounded-full px-9 py-3 text-xs tracking-widest uppercase transition-all duration-200"
        style={{
          background: "transparent",
          border: "1.5px solid var(--dusty-rose-dark)",
          color: "var(--dusty-rose-dark)",
          letterSpacing: "2px",
        }}
        onMouseEnter={(e) => {
          (e.target as HTMLButtonElement).style.background =
            "var(--dusty-rose)";
          (e.target as HTMLButtonElement).style.color = "#FFF8F0";
          (e.target as HTMLButtonElement).style.borderColor =
            "var(--dusty-rose)";
        }}
        onMouseLeave={(e) => {
          (e.target as HTMLButtonElement).style.background = "transparent";
          (e.target as HTMLButtonElement).style.color =
            "var(--dusty-rose-dark)";
          (e.target as HTMLButtonElement).style.borderColor =
            "var(--dusty-rose-dark)";
        }}
      >
        Lihat Masa Depanmu →
      </button>
    </main>
  );
}
