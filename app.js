
import { proyectos } from "./datos.js";
import { filtrarProyectos } from "./proyectos.js";

// Elementos del DOM
const projectGrid = document.querySelector("#project-grid");
const filterButtons = document.querySelectorAll(".filter-btn");

// Símbolos decorativos según categoría
const categorySymbols = {
  Web: "</>",
  Apps: "{ }",
  IA: "✳"
};

/**
 * Crea una tarjeta de proyecto.
 */
function crearTarjeta(proyecto) {
  const card = document.createElement("article");
  card.className = "project-card";

  // Área visual
  const art = document.createElement("div");
  art.className = "project-art";
  art.setAttribute("aria-hidden", "true");

  const symbol = document.createElement("span");
  symbol.className = "project-art-symbol";
  symbol.textContent = categorySymbols[proyecto.categoria] || "</>";

  art.appendChild(symbol);

  // Contenido
  const body = document.createElement("div");
  body.className = "project-body";

  const category = document.createElement("span");
  category.className = "project-category";
  category.textContent = proyecto.categoria;

  const title = document.createElement("h3");
  title.className = "project-title";
  title.textContent = proyecto.titulo;

  const description = document.createElement("p");
  description.className = "project-description";
  description.textContent = proyecto.descripcion;

  body.append(category, title, description);
  card.append(art, body);

  return card;
}

/**
 * Muestra proyectos de una categoría.
 */
function mostrarProyectos(categoria = "Todos") {
  const resultado = filtrarProyectos(proyectos, categoria);

  // Eliminar contenido anterior
  projectGrid.replaceChildren();

  // Mostrar mensaje si no hay resultados
  if (resultado.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "empty-projects";
    emptyMessage.textContent =
      "No hay proyectos disponibles en esta categoría.";

    projectGrid.appendChild(emptyMessage);
    return;
  }

  // Agregar las tarjetas
  const fragment = document.createDocumentFragment();

  resultado.forEach((proyecto) => {
    fragment.appendChild(crearTarjeta(proyecto));
  });

  projectGrid.appendChild(fragment);
}

/**
 * Actualiza visualmente los botones.
 */
function actualizarFiltros(categoria) {
  filterButtons.forEach((button) => {
    const seleccionado = button.dataset.category === categoria;

    button.classList.toggle("active", seleccionado);
    button.setAttribute("aria-pressed", String(seleccionado));
  });
}

/**
 * Eventos de los filtros.
 */
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const categoria = button.dataset.category;

    actualizarFiltros(categoria);
    mostrarProyectos(categoria);
  });
});

// Mostrar todos los proyectos inicialmente
mostrarProyectos("Todos");
