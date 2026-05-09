export const GROUPS = [
  {
    letter: "A",
    teams: [
      { name: "México", code: "MEX", flag: "🇲🇽", stickers: gen() },
      { name: "Sudáfrica", code: "RSA", flag: "🇿🇦", stickers: gen() },
      { name: "República de Corea", code: "KOR", flag: "🇰🇷", stickers: gen() },
      { name: "Chequia", code: "CZE", flag: "🇨🇿", stickers: gen() },
    ],
  },

  {
    letter: "B",
    teams: [
      { name: "Canadá", code: "CAN", flag: "🇨🇦", stickers: gen() },
      { name: "Bosnia y Herzegovina", code: "BIH", flag: "🇧🇦", stickers: gen() },
      { name: "Catar", code: "QAT", flag: "🇶🇦", stickers: gen() },
      { name: "Suiza", code: "SUI", flag: "🇨🇭", stickers: gen() },
    ],
  },

  {
    letter: "C",
    teams: [
      { name: "Brasil", code: "BRA", flag: "🇧🇷", stickers: gen() },
      { name: "Marruecos", code: "MAR", flag: "🇲🇦", stickers: gen() },
      { name: "Haití", code: "HAI", flag: "🇭🇹", stickers: gen() },
      { name: "Escocia", code: "SCO", flag: "🏴", stickers: gen() },
    ],
  },

  {
    letter: "D",
    teams: [
      { name: "Estados Unidos", code: "USA", flag: "🇺🇸", stickers: gen() },
      { name: "Paraguay", code: "PAR", flag: "🇵🇾", stickers: gen() },
      { name: "Australia", code: "AUS", flag: "🇦🇺", stickers: gen() },
      { name: "Turquía", code: "TUR", flag: "🇹🇷", stickers: gen() },
    ],
  },

  {
    letter: "E",
    teams: [
      { name: "Alemania", code: "GER", flag: "🇩🇪", stickers: gen() },
      { name: "Curazao", code: "CUW", flag: "🇨🇼", stickers: gen() },
      { name: "Costa de Marfil", code: "CIV", flag: "🇨🇮", stickers: gen() },
      { name: "Ecuador", code: "ECU", flag: "🇪🇨", stickers: gen() },
    ],
  },

  {
    letter: "F",
    teams: [
      { name: "Países Bajos", code: "NED", flag: "🇳🇱", stickers: gen() },
      { name: "Japón", code: "JPN", flag: "🇯🇵", stickers: gen() },
      { name: "Suecia", code: "SWE", flag: "🇸🇪", stickers: gen() },
      { name: "Túnez", code: "TUN", flag: "🇹🇳", stickers: gen() },
    ],
  },

  {
    letter: "G",
    teams: [
      { name: "Bélgica", code: "BEL", flag: "🇧🇪", stickers: gen() },
      { name: "Egipto", code: "EGY", flag: "🇪🇬", stickers: gen() },
      { name: "Irán", code: "IRN", flag: "🇮🇷", stickers: gen() },
      { name: "Nueva Zelanda", code: "NZL", flag: "🇳🇿", stickers: gen() },
    ],
  },

  {
    letter: "H",
    teams: [
      { name: "España", code: "ESP", flag: "🇪🇸", stickers: gen() },
      { name: "Cabo Verde", code: "CPV", flag: "🇨🇻", stickers: gen() },
      { name: "Arabia Saudí", code: "KSA", flag: "🇸🇦", stickers: gen() },
      { name: "Uruguay", code: "URU", flag: "🇺🇾", stickers: gen() },
    ],
  },

  {
    letter: "I",
    teams: [
      { name: "Francia", code: "FRA", flag: "🇫🇷", stickers: gen() },
      { name: "Senegal", code: "SEN", flag: "🇸🇳", stickers: gen() },
      { name: "Irak", code: "IRQ", flag: "🇮🇶", stickers: gen() },
      { name: "Noruega", code: "NOR", flag: "🇳🇴", stickers: gen() },
    ],
  },

  {
    letter: "J",
    teams: [
      { name: "Argentina", code: "ARG", flag: "🇦🇷", stickers: gen() },
      { name: "Argelia", code: "ALG", flag: "🇩🇿", stickers: gen() },
      { name: "Austria", code: "AUT", flag: "🇦🇹", stickers: gen() },
      { name: "Jordania", code: "JOR", flag: "🇯🇴", stickers: gen() },
    ],
  },

  {
    letter: "K",
    teams: [
      { name: "Portugal", code: "POR", flag: "🇵🇹", stickers: gen() },
      { name: "RD Congo", code: "COD", flag: "🇨🇩", stickers: gen() },
      { name: "Uzbekistán", code: "UZB", flag: "🇺🇿", stickers: gen() },
      { name: "Colombia", code: "COL", flag: "🇨🇴", stickers: gen() },
    ],
  },

  {
    letter: "L",
    teams: [
      { name: "Inglaterra", code: "ENG", flag: "🏴", stickers: gen() },
      { name: "Croacia", code: "CRO", flag: "🇭🇷", stickers: gen() },
      { name: "Ghana", code: "GHA", flag: "🇬🇭", stickers: gen() },
      { name: "Panamá", code: "PAN", flag: "🇵🇦", stickers: gen() },
    ],
  },
];

// Genera stickers 1–20
function gen() {
  return Array.from({ length: 20 }, (_, i) => i + 1);
}
