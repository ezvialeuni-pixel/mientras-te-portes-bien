/* ===== EDITAR ACÁ: todo el contenido que cambia ===== */
const SERIE = {
  capitulos: [
    { n: 1, titulo: "Apariencia", estado: "proximo", fecha: "A confirmar", youtube: "", /* pegá el ID del video, ej: "dQw4w9WgXcQ" */
      texto: "En una reunión entre amigos para ver un partido de fútbol, Oscar se muestra divertido, seguro y encantador, mientras Eva cumple su papel de esposa perfecta. Entre bromas, pequeñas señales revelan que algo no está bien. Cuando los invitados se marchan, la fachada se derrumba." },
    { n: 2, titulo: "Quiebre", estado: "proximo", fecha: "A confirmar", youtube: "",
      texto: "La sospecha de un embarazo obliga a Eva a pensar en un futuro que ya no puede postergar. Mientras comparte sus miedos con Romina, su amiga y médica, comprende que necesita actuar. La tensión se acumula hasta una decisión irreversible." },
    { n: 3, titulo: "No mires atrás", estado: "proximo", fecha: "A confirmar", youtube: "",
      texto: "Una visita inesperada despierta los celos de Oscar y desencadena una confrontación. En una huida desesperada, Eva deberá tomar una decisión que marcará el final de su vida anterior." }
  ], /* estado: "proximo" o "disponible" */
  equipoSerie: [ /* foto: nombre del archivo dentro de /img */
    { nombre: "Nombre Apellido", rol: "Dirección", foto: "" },
    { nombre: "Nombre Apellido", rol: "Producción", foto: "" },
    { nombre: "Nombre Apellido", rol: "Guion", foto: "" },
    { nombre: "Nombre Apellido", rol: "Fotografía", foto: "" },
    { nombre: "Nombre Apellido", rol: "Sonido", foto: "" },
    { nombre: "Nombre Apellido", rol: "Dirección de arte", foto: "" },
    { nombre: "Nombre Apellido", rol: "Montaje", foto: "" }
  ],
  equipoTeci: [
    { nombre: "Nombre Apellido", rol: "Diseño y funcionamiento del sitio web", foto: "" },
    { nombre: "Nombre Apellido", rol: "Estética y contenidos web", foto: "" },
    { nombre: "Nombre Apellido", rol: "Producción de contenidos para redes", foto: "" },
    { nombre: "Nombre Apellido", rol: "Investigación y preparación de redes", foto: "" },
    { nombre: "Diaz Lorenzo · Roberts Gina · Luhning Cristobal · González Manuel", rol: "Promoción de capítulos y seguimiento de audiencia", foto: "" }
  ],
  backstage: [
    { titulo: "Detrás de cámara", texto: "El trabajo del equipo en la locación: cámara, luces, ensayos y organización de las escenas.", fotos: ["backstage-01.jpg","backstage-02.jpg","backstage-03.jpg"] },
    { titulo: "El universo de la serie", texto: "La casa, el vestuario y los objetos de época que construyen la estética de los años 90.", fotos: ["arte-01.jpg","arte-02.jpg","arte-03.jpg"] },
    { titulo: "Del rodaje a la pantalla", texto: "Decisiones de realización y el resultado audiovisual.", fotos: ["pantalla-01.jpg","pantalla-02.jpg","pantalla-03.jpg"] }
  ],
  difusion: [ /* imagen: archivo en /img · video: ID de YouTube Short (opcional) */
    { titulo: "Trailer oficial", imagen: "difusion-01.jpg" },
    { titulo: "Spot capítulo 1", imagen: "difusion-02.jpg" },
    { titulo: "Spot capítulo 2", imagen: "difusion-03.jpg" },
    { titulo: "Spot capítulo 3", imagen: "difusion-04.jpg" }
  ],
  repositorio: [ /* url vacía = "Próximamente". Subí los PDF a /docs y poné "docs/archivo.pdf" */
    { titulo: "Actividad 1 · Videopodcast", desc: "Videopodcast de la Actividad 1 de TECI-II.", url: "" },
    { titulo: "Actividad 2 · Video con inteligencia artificial", desc: "Video realizado con IA (avatar de Oscar) en la Actividad 2.", url: "" },
    { titulo: "Actividad 3 · Estética y contenidos web", desc: "Identidad visual, redacción de contenidos y backstage.", url: "docs/act-3-tecii.pdf" },
    { titulo: "Actividad 3 · Investigación de redes", desc: "Informe sobre Instagram y YouTube, estrategia y configuración de cuentas.", url: "docs/tecii-tp-3.pdf" },
    { titulo: "Actividad 3 · Producción de contenidos para redes", desc: "Propuesta promocional y guiones de los spots.", url: "docs/trabajo-practico-3.pdf" },
    { titulo: "Actividad 3 · Promoción y seguimiento de audiencia", desc: "Plan de campaña, calendario y métricas.", url: "docs/actividad-3-objetivo-5.pdf" },
    { titulo: "Guiones de la serie (TRTV y EeI)", desc: "Guiones de los tres capítulos.", url: "" },
    { titulo: "Documentos de producción (TRTV y EeI)", desc: "Plan de rodaje, desglose y demás documentos.", url: "" }
  ]
};
/* ===== Código ===== */
const $ = id => document.getElementById(id);
const el = (t, c, h) => { const e = document.createElement(t); if (c) e.className = c; if (h) e.innerHTML = h; return e; };
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
function img(file, alt, label) {
  if (!file) return el("div", "ph", esc(label || alt));
  const i = new Image(); i.src = "img/" + file; i.alt = alt; i.loading = "lazy";
  i.onerror = () => i.replaceWith(el("div", "ph", esc(label || alt)));
  return i;
}
SERIE.capitulos.forEach(c => {
  const a = el("article", "ch");
  a.append(el("small", "", "Capítulo " + c.n), el("h3", "", esc(c.titulo)));
  if (c.youtube) {
    const f = el("iframe", "player"); f.src = "https://www.youtube-nocookie.com/embed/" + c.youtube; f.title = c.titulo;
    f.loading = "lazy"; f.allowFullscreen = true; a.append(f);
  } else a.append(el("span", "badge", "Próximo estreno · " + esc(c.fecha)));
  a.append(el("p", "", esc(c.texto)));
  if (c.youtube) a.append(Object.assign(el("a", "btn", "Ver en YouTube"), { href: "https://youtu.be/" + c.youtube, target: "_blank", rel: "noopener" }));
  $("chapters").append(a);
});
const people = (list, box) => list.forEach(p => { const d = el("div", "person"); d.append(img(p.foto, p.nombre, p.rol), el("b", "", esc(p.nombre)), el("span", "", esc(p.rol))); $(box).append(d); });
people(SERIE.equipoSerie, "team-series"); people(SERIE.equipoTeci, "team-teci");
SERIE.backstage.forEach(b => {
  const s = el("div", "bs", "<h3>" + esc(b.titulo) + "</h3><p>" + esc(b.texto) + "</p>"), g = el("div", "grid");
  b.fotos.forEach(f => { const fg = el("figure"); fg.append(img(f, b.titulo, "Foto: " + f)); g.append(fg); });
  s.append(g); $("backstage-blocks").append(s);
});
SERIE.difusion.forEach(p => { const fg = el("figure"); fg.append(img(p.imagen, p.titulo), el("figcaption", "", esc(p.titulo))); $("pieces").append(fg); });
SERIE.repositorio.forEach(r => {
  const li = el("li", "", "<div><b>" + esc(r.titulo) + "</b>" + esc(r.desc) + "</div>");
  li.append(r.url ? Object.assign(el("a", "", "Abrir"), { href: r.url, target: "_blank", rel: "noopener" }) : el("em", "", "Próximamente"));
  $("repo").append(li);
});
const burger = document.querySelector(".burger"), menu = $("menu");
burger.onclick = () => burger.setAttribute("aria-expanded", menu.classList.toggle("open"));
menu.onclick = () => { menu.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); };
