
/**
 * Filtra proyectos por categoría.
 *
 * @param {Array} proyectos - Lista original.
 * @param {string} categoria - Categoría seleccionada.
 * @returns {Array} Nuevo arreglo filtrado.
 */

export function filtrarProyectos(proyectos, categoria) {
  if (catergoria === "Todos") {
    return [...proyectos];
  }

  return proyectos.filter(
    (proyecto) => proyecto.catergoria === catergoria
  );
}
