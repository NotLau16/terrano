export const PHONE = "+54 9 3875 93-4763";
export const MAPS_ESTUDIO = "https://maps.app.goo.gl/kFptgfmKwESpsWQE6";
export const MAPS_CANTERA = "https://maps.app.goo.gl/ukwW9EW1T5FnsW517";
export const INSTAGRAM = "https://www.instagram.com/terranogroup/";
export const wa = (text = "Hola Terrano Group, quisiera consultar por un presupuesto para un proyecto.") =>
  `https://wa.me/5493875934763?text=${encodeURIComponent(text)}`;

export const LOCATIONS = [
  {
    id: "estudio",
    name: "Estudio & Oficinas",
    badge: "Diseño e Ingeniería",
    description: "Atención comercial, diseño arquitectónico, cálculo y dirección técnica de obras.",
    address: "Las Heras 1545",
    area: "Salta Capital (B° 20 de Febrero)",
    mapsUrl: MAPS_ESTUDIO,
    note: "En Google Maps figura temporalmente como 'LS Estudio'",
    embedSrc: "https://www.openstreetmap.org/export/embed.html?bbox=-65.4110%2C-24.7762%2C-65.3910%2C-24.7662&layer=mapnik&marker=-24.77125%2C-65.40104",
  },
  {
    id: "cantera",
    name: "Cantera & Producción",
    badge: "Materiales y Bloques",
    description: "Extracción directa de áridos y fábrica de bloques de hormigón ecológicos.",
    address: "Entrada a San Lorenzo",
    area: "San Lorenzo, Salta",
    mapsUrl: MAPS_CANTERA,
    note: "Acopio y despacho directo de materiales de obra",
    embedSrc: "https://www.openstreetmap.org/export/embed.html?bbox=-65.4903%2C-24.7541%2C-65.4703%2C-24.7441&layer=mapnik&marker=-24.749185%2C-65.480361",
  },
] as const;

export type LocationItem = (typeof LOCATIONS)[number];

export const links: [string, string][] = [
  ["Nosotros", "#nosotros"],
  ["Presentación", "#presentacion"],
  ["Servicios", "#servicios"],
  ["Cantera", "#cantera"],
  ["Proyectos", "#proyectos"],
  ["Contacto", "#contacto"],
];

const u = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=75`;
export const IMG = {
  hero: u("photo-1600596542815-ffad4c1539a9"),
  about: u("photo-1600585154340-be6161a56a0c"),
  quarry: u("photo-1504307651254-35680f356dfd"),
};

export const services = [
  { icon: "HardHat", t: "Proyección, dirección y ejecución de obra", d: "Del anteproyecto a la llave en mano, con dirección técnica en cada etapa." },
  { icon: "Box", t: "Renderizado en pequeña y gran escala", d: "Imágenes 3D realistas para decidir con claridad, de una vivienda a un desarrollo." },
  { icon: "Sofa", t: "Diseño de espacios interiores", d: "Viviendas, comercios y oficinas pensados para cómo se usan." },
  { icon: "Armchair", t: "Diseño de mobiliario a medida", d: "Cocinas, placards y piezas únicas que resuelven cada espacio." },
  { icon: "ClipboardList", t: "Asesoramiento en materiales, relevamiento y planos", d: "Elegí bien los materiales y registrá tu obra con planos precisos." },
  { icon: "Globe", t: "Asesorías online", d: "Trabajamos a distancia en Salta, Tucumán y todo el país." },
];

export type Project = { id: number; cat: "3d" | "int" | "obra"; title: string; place: string; img: string; tags: string[]; desc: string; featured?: boolean };
export const projects: Project[] = [
  { id: 1, cat: "int", featured: true, title: "Vivienda Unifamiliar", place: "Tucumán", img: u("photo-1556909114-f6e7ad7d3136"), tags: ["Interiorismo", "Cocina doble línea", "Isla y banquetas"], desc: "Estar-comedor resuelto en un solo ambiente, con una cocina de doble línea, espacio de isla y banquetas." },
  { id: 2, cat: "obra", title: "Residencia en San Lorenzo", place: "San Lorenzo, Salta", img: u("photo-1600607687939-ce8a6c25118c"), tags: ["Proyecto y obra", "Piedra y madera"], desc: "Vivienda de líneas sobrias que integra piedra y madera con el paisaje de las sierras." },
  { id: 3, cat: "3d", title: "Render vivienda minimalista", place: "Salta", img: u("photo-1600566753190-17f0baa2a6c3"), tags: ["Render 3D", "Minimalismo"], desc: "Visualización fotorrealista para validar volúmenes, materiales y luz antes de construir." },
  { id: 4, cat: "int", title: "Cocina y mobiliario a medida", place: "Salta", img: u("photo-1618221195710-dd6b41faaea6"), tags: ["Mobiliario", "Carpintería"], desc: "Diseño integral de cocina y muebles fabricados a medida del espacio." },
  { id: 5, cat: "obra", title: "Obra con bloques ecológicos", place: "NOA", img: u("photo-1541888946425-d81bb19240f5"), tags: ["Bloques de hormigón", "Cantera propia"], desc: "Construcción con bloques de hormigón ecológicos producidos en nuestra cantera." },
  { id: 6, cat: "int", title: "Oficinas y comercios", place: "Salta", img: u("photo-1486406146926-c627a92ad1ab"), tags: ["Espacios de trabajo", "Diseño interior"], desc: "Diseño de oficinas y locales que ordenan la circulación y refuerzan la identidad." },
];
