export type PersonalityType = "M" | "S" | "F" | "G";

export interface Question {
  text: string;
  opts: { label: string; type: PersonalityType }[];
}

export interface PersonalityResult {
  type: PersonalityType;
  title: string;
  subtitle: string;
  description: string;
  prediction: string;
  luckyColor: string;
  luckyColorHex: string;
  emoji: string;
}

export const questions: Question[] = [
  {
    text: "Ketika menghadapi masalah yang berat, cara apa yang paling sering kamu lakukan?",
    opts: [
      { label: "Merenung sendiri sampai menemukan jawabannya", type: "M" },
      { label: "Berbagi cerita dengan orang yang dipercaya", type: "S" },
      { label: "Mengalihkan pikiran dengan aktivitas baru", type: "F" },
      { label: "Langsung membuat rencana dan mengambil tindakan", type: "G" },
    ],
  },
  {
    text: "Dalam sebuah kelompok atau tim, kamu paling sering berperan sebagai?",
    opts: [
      { label: "Pendengar yang memastikan semua suara didengar", type: "S" },
      { label: "Pemikir yang menganalisis sebelum bertindak", type: "M" },
      { label: "Penggerak yang mendorong semua orang maju", type: "G" },
      {
        label: "Penghubung yang mencairkan suasana dan menyatukan tim",
        type: "F",
      },
    ],
  },
  {
    text: "Ketika kamu merasa lelah secara emosional, apa yang paling membantu memulihkanmu?",
    opts: [
      { label: "Waktu sendirian yang tenang tanpa gangguan", type: "M" },
      {
        label: "Berkumpul dan tertawa bersama orang-orang terdekat",
        type: "S",
      },
      { label: "Mencoba pengalaman baru yang menyegarkan pikiran", type: "F" },
      {
        label: "Menyelesaikan satu hal tertunda agar merasa produktif",
        type: "G",
      },
    ],
  },
  {
    text: "Bagaimana kamu biasanya membuat keputusan penting dalam hidupmu?",
    opts: [
      { label: "Mengikuti intuisi dan perasaan terdalam", type: "M" },
      {
        label: "Mempertimbangkan dampaknya pada orang-orang di sekitar",
        type: "S",
      },
      {
        label: "Memilih yang terasa paling hidup dan penuh kemungkinan",
        type: "F",
      },
      {
        label: "Menganalisis pro dan kontra secara logis dan terstruktur",
        type: "G",
      },
    ],
  },
  {
    text: "Jika kamu bisa menggambarkan versi terbaikmu di masa depan, itu terlihat seperti?",
    opts: [
      {
        label: "Hidup yang tenang, damai, dan penuh kedalaman makna",
        type: "M",
      },
      {
        label: "Dikelilingi hubungan yang hangat dan saling mendukung",
        type: "S",
      },
      {
        label: "Bebas menjelajahi dunia dan terus berkembang tanpa batas",
        type: "F",
      },
      {
        label: "Berhasil membangun sesuatu yang berdampak dan diakui",
        type: "G",
      },
    ],
  },
];

export const personalityResults: Record<PersonalityType, PersonalityResult> = {
  M: {
    type: "M",
    title: "Jiwa Sang Pemikir",
    subtitle: "조용한 몽상가 — Si Pemikir Tenang",
    description:
      "Kamu adalah pribadi yang kaya secara batin. Kamu tidak banyak bicara, tapi setiap kata yang keluar selalu bermakna. Kekuatanmu ada pada kemampuan introspeksi — kamu memahami diri sendiri dan orang lain pada level yang lebih dalam dari kebanyakan orang. Kamu cenderung berpikir panjang sebelum bertindak, dan itu bukan kelemahan — itu adalah bentuk kecerdasan emosional yang tinggi. Orang-orang yang mengenalmu dengan baik tahu bahwa kamu adalah tempat yang aman untuk berbagi, karena kamu hadir sepenuhnya tanpa menghakimi.",
    prediction:
      "Tahun ini kamu akan dihadapkan pada momen refleksi besar — sebuah titik balik yang memaksamu mengevaluasi apa yang benar-benar kamu inginkan dalam hidup. Keputusan yang sudah lama kamu tunda tidak bisa dihindari lagi, dan ketika kamu akhirnya mengambilnya, kamu akan merasa jauh lebih ringan. Percayai prosesmu sendiri.",
    luckyColor: "Midnight Sage",
    luckyColorHex: "#A8B5A2",
    emoji: "🌙",
  },
  S: {
    type: "S",
    title: "Jiwa Sang Penyambung",
    subtitle: "따뜻한 태양 — Si Kehangatan",
    description:
      "Kamu adalah orang yang hidupnya berakar pada hubungan. Kamu memiliki kemampuan alami untuk membuat orang lain merasa diterima, didengar, dan dihargai — bahkan orang yang baru kamu kenal sekalipun. Kamu peka terhadap perasaan orang lain, dan sering kali kamu menjadi penopang bagi banyak orang di sekitarmu. Namun perlu diingat: kamu juga berhak untuk dirawat dan diperhatikan. Kekuatanmu bukan hanya pada memberi, tapi juga pada keberanian untuk menerima.",
    prediction:
      "Di tahun ini, sebuah hubungan akan membawa dampak yang lebih besar dari yang kamu perkirakan — bisa berupa persahabatan yang semakin dalam, kolaborasi yang mengubah arah hidupmu, atau koneksi baru yang hadir di saat yang paling tepat. Tetaplah terbuka, karena orang yang tepat sedang dalam perjalanan menuju hidupmu.",
    luckyColor: "Warm Gold",
    luckyColorHex: "#D4A853",
    emoji: "☀️",
  },
  F: {
    type: "F",
    title: "Jiwa Sang Penjelajah",
    subtitle: "자유로운 영혼 — Si Jiwa Bebas",
    description:
      "Kamu lahir dengan rasa ingin tahu yang tidak pernah padam. Kamu melihat dunia bukan sebagai tempat yang harus ditaklukkan, tapi sebagai tempat yang harus dijelajahi dengan penuh kegembiraan. Kamu tumbuh paling pesat saat berada di luar zona nyaman, dan kamu punya keberanian untuk memulai sesuatu yang belum pernah kamu coba sebelumnya. Kreativitas dan spontanitasmu adalah aset terbesar — gunakan itu untuk menciptakan hidup yang benar-benar terasa seperti milikmu.",
    prediction:
      "Sebuah perubahan besar sedang mendekat — dan kali ini bukan perubahan yang menakutkan, melainkan yang sudah lama kamu nantikan tanpa sadar. Bisa berupa peluang karir baru, perjalanan yang mengubah perspektifmu, atau keberanian untuk akhirnya mengejar sesuatu yang selama ini hanya jadi mimpi. Percayalah pada instingmu.",
    luckyColor: "Terra Rose",
    luckyColorHex: "#C4868A",
    emoji: "🌸",
  },
  G: {
    type: "G",
    title: "Jiwa Sang Pencipta",
    subtitle: "황금빛 마음 — Si Hati Emas",
    description:
      "Kamu adalah perpaduan langka antara ambisi dan empati. Kamu tidak hanya bermimpi — kamu merencanakan, bergerak, dan membangun. Kamu punya standar yang tinggi untuk diri sendiri, bukan karena kamu ingin terlihat sempurna, tapi karena kamu benar-benar peduli dengan kualitas dari apa yang kamu hasilkan. Di balik semua drive dan determinasimu, ada hati yang hangat — seseorang yang ingin keberhasilannya juga bisa dinikmati oleh orang-orang yang dicintai.",
    prediction:
      "Semua kerja keras dan kesabaran yang sudah kamu tanam selama ini sedang memasuki fase panen. Sebelum tahun ini berakhir, setidaknya satu pencapaian besar akan terwujud — entah itu pengakuan profesional, target finansial, atau sesuatu yang selama ini terasa mustahil. Jangan berhenti sekarang, kamu sudah sangat dekat.",
    luckyColor: "Dusty Rose Gold",
    luckyColorHex: "#E8B4B8",
    emoji: "✨",
  },
};

export function calculatePersonality(
  answers: (number | null)[],
): PersonalityType {
  const score: Record<PersonalityType, number> = { M: 0, S: 0, F: 0, G: 0 };
  answers.forEach((ans, qi) => {
    if (ans !== null) {
      score[questions[qi].opts[ans].type]++;
    }
  });
  return Object.entries(score).sort(
    (a, b) => b[1] - a[1],
  )[0][0] as PersonalityType;
}
