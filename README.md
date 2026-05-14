# 🎀 Birthday Website

Website ulang tahun interaktif bergaya Korea cozy — dibangun dengan Next.js 14, Tailwind CSS, dan Zustand.

## Struktur

```
src/
├── app/
│   ├── page.tsx          → Scene 1: Welcome (input nama)
│   ├── wish/page.tsx     → Scene 2: Doa & Harapan
│   ├── quiz/page.tsx     → Scene 3: Quiz Kepribadian
│   ├── result/page.tsx   → Scene 4: Hasil Quiz
│   ├── layout.tsx
│   └── globals.css
├── components/
│   └── FloatingPetals.tsx
├── lib/
│   └── quizData.ts       → Data pertanyaan & hasil kepribadian
└── store/
    └── useBirthdayStore.ts  → Zustand state (nama + jawaban)
```

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Jalankan development server
npm run dev

# 3. Buka di browser
# http://localhost:3000
```

## Kustomisasi

### Ganti nama yang dituju
Nama diinput langsung oleh user di halaman Welcome — tidak perlu hardcode.

### Ubah doa-doa
Edit array `wishes` di `src/app/wish/page.tsx`.

### Ubah pertanyaan quiz
Edit array `questions` di `src/lib/quizData.ts`.

### Ubah hasil kepribadian & ramalan
Edit object `personalityResults` di `src/lib/quizData.ts`.

### Ubah warna tema
Edit CSS variables di `src/app/globals.css`:
```css
:root {
  --cream: #FDF6EC;
  --dusty-rose: #E8B4B8;
  --dusty-rose-dark: #C4868A;
  --sage: #A8B5A2;
  --warm-brown: #8B6F5E;
  --soft-gold: #D4A853;
}
```

## Dependencies

| Package | Fungsi |
|---|---|
| `next` | Framework |
| `zustand` | State global (nama + quiz answers) |
| `canvas-confetti` | Animasi konfeti di halaman hasil |
| `framer-motion` | (opsional) untuk page transitions |
