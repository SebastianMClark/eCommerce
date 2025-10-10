const vinos = [
  {
    id: 1,
    titulo: "Rutini Cabernet Sauvignon 2021",
    categoria: "tinto",
    uva: "Cabernet Sauvignon",
    precio: 14500,
    img: "https://placehold.co/500x500?text=Cabernet+1",
    stock: 12,
    desc: "Vino intenso con notas de frutas rojas y roble elegante."
  },
  {
    id: 2,
    titulo: "Luigi Bosca Cabernet Sauvignon 2020",
    categoria: "tinto",
    uva: "Cabernet Sauvignon",
    precio: 16800,
    img: "https://placehold.co/500x500?text=Cabernet+2",
    stock: 8,
    desc: "Equilibrado, con taninos firmes y final persistente."
  },
  {
    id: 3,
    titulo: "Nieto Senetiner Cabernet Sauvignon 2022",
    categoria: "tinto",
    uva: "Cabernet Sauvignon",
    precio: 12500,
    img: "https://placehold.co/500x500?text=Cabernet+3",
    stock: 10,
    desc: "Aromas especiados y notas a vainilla provenientes del roble."
  },
  {
    id: 4,
    titulo: "Trapiche Reserva Cabernet Sauvignon",
    categoria: "tinto",
    uva: "Cabernet Sauvignon",
    precio: 11800,
    img: "https://placehold.co/500x500?text=Cabernet+4",
    stock: 14,
    desc: "Cuerpo medio, sabor intenso y excelente relación precio-calidad."
  },
  {
    id: 5,
    titulo: "Catena Zapata Malbec 2021",
    categoria: "tinto",
    uva: "Malbec",
    precio: 17200,
    img: "https://placehold.co/500x500?text=Malbec+1",
    stock: 9,
    desc: "Clásico Malbec mendocino con notas a ciruela y violeta."
  },
  {
    id: 6,
    titulo: "Luigi Bosca Malbec D.O.C.",
    categoria: "tinto",
    uva: "Malbec",
    precio: 18500,
    img: "https://placehold.co/500x500?text=Malbec+2",
    stock: 7,
    desc: "Gran estructura, aromas frutales y toques de especias."
  },
  {
    id: 7,
    titulo: "Los Haroldos Estate Malbec",
    categoria: "tinto",
    uva: "Malbec",
    precio: 9900,
    img: "https://placehold.co/500x500?text=Malbec+3",
    stock: 15,
    desc: "Malbec joven y fresco, ideal para acompañar carnes rojas."
  },
  {
    id: 8,
    titulo: "Alamos Malbec 2022",
    categoria: "tinto",
    uva: "Malbec",
    precio: 8700,
    img: "https://placehold.co/500x500?text=Malbec+4",
    stock: 20,
    desc: "De cuerpo medio, frutal y fácil de beber."
  },
  {
    id: 9,
    titulo: "El Esteco Torrontés 2023",
    categoria: "blanco",
    uva: "Torrontés",
    precio: 7600,
    img: "https://placehold.co/500x500?text=Torrontes+1",
    stock: 18,
    desc: "Aromático y floral, típico del Valle de Cafayate."
  },
  {
    id: 10,
    titulo: "Crios Torrontés",
    categoria: "blanco",
    uva: "Torrontés",
    precio: 8200,
    img: "https://placehold.co/500x500?text=Torrontes+2",
    stock: 16,
    desc: "Fresco y vibrante, con notas cítricas y a jazmín."
  },
  {
    id: 11,
    titulo: "Altos del Plata Torrontés",
    categoria: "blanco",
    uva: "Torrontés",
    precio: 7100,
    img: "https://placehold.co/500x500?text=Torrontes+3",
    stock: 22,
    desc: "Vino blanco joven, de acidez equilibrada y final delicado."
  },
  {
    id: 12,
    titulo: "Don David Torrontés 2022",
    categoria: "blanco",
    uva: "Torrontés",
    precio: 8400,
    img: "https://placehold.co/500x500?text=Torrontes+4",
    stock: 13,
    desc: "Perfume intenso con notas a frutas blancas y florales."
  },
  {
    id: 13,
    titulo: "Norton Chardonnay 2023",
    categoria: "blanco",
    uva: "Chardonnay",
    precio: 9400,
    img: "https://placehold.co/500x500?text=Chardonnay",
    stock: 11,
    desc: "Elegante y fresco, con toques de manzana verde y vainilla."
  },
  {
    id: 14,
    titulo: "Trumpeter Pinot Noir",
    categoria: "tinto",
    uva: "Pinot Noir",
    precio: 13800,
    img: "https://placehold.co/500x500?text=Pinot+Noir",
    stock: 9,
    desc: "Aromas a frutilla y cereza, con final sedoso."
  },
  {
    id: 15,
    titulo: "Salentein Blend de Terroirs",
    categoria: "tinto",
    uva: "Blend (Malbec, Cabernet, Merlot)",
    precio: 19200,
    img: "https://placehold.co/500x500?text=Blend",
    stock: 6,
    desc: "Combinación equilibrada de variedades seleccionadas."
  },
  {
    id: 16,
    titulo: "Escorihuela Gascón Syrah",
    categoria: "tinto",
    uva: "Syrah",
    precio: 11200,
    img: "https://placehold.co/500x500?text=Syrah",
    stock: 10,
    desc: "Notas especiadas, taninos suaves y final redondo."
  },
  {
    id: 17,
    titulo: "San Felipe Rosé",
    categoria: "rosado",
    uva: "Blend Rosé",
    precio: 7200,
    img: "https://placehold.co/500x500?text=Rose",
    stock: 19,
    desc: "Rosado fresco, con notas a frambuesa y flores silvestres."
  },
  {
    id: 18,
    titulo: "Trumpeter Sauvignon Blanc",
    categoria: "blanco",
    uva: "Sauvignon Blanc",
    precio: 9500,
    img: "https://placehold.co/500x500?text=Sauvignon+Blanc",
    stock: 14,
    desc: "Seco, con notas cítricas y gran frescura."
  },
  {
    id: 19,
    titulo: "Escorihuela Gascón Malbec Rosé",
    categoria: "rosado",
    uva: "Malbec Rosé",
    precio: 9800,
    img: "https://placehold.co/500x500?text=Malbec+Rose",
    stock: 12,
    desc: "Rosado elegante con aromas a cereza y final suave."
  },
  {
    id: 20,
    titulo: "Andeluna 1300 Cabernet Sauvignon",
    categoria: "tinto",
    uva: "Cabernet Sauvignon",
    precio: 13200,
    img: "https://placehold.co/500x500?text=Cabernet+5",
    stock: 8,
    desc: "Concentrado, frutado y con excelente estructura."
  }
];
export default vinos;