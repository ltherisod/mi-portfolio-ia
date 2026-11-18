
import { test } from "node:test";
import assert from "node:assert/strict";

import { filtrarProyectos } from "./proyectos.js";

const proyectos = [
  {
    id: 1,
    titulo: "Ejemplo: Plataforma web",
    categoria: "Web",
    descripcion: "Proyecto de ejemplo web"
  },
  {
    id: 2,
    titulo: "Ejemplo: Aplicación interactiva",
    categoria: "Apps",
    descripcion: "Proyecto de ejemplo de aplicación"
  },
  {
    id: 3,
    titulo: "Ejemplo: Herramienta de IA",
    categoria: "IA",
    descripcion: "Proyecto de ejemplo de IA"
  }
];

test("Todos devuelve todos los proyectos", () => {
  const resultado = filtrarProyectos(proyectos, "Todos");

  assert.deepStrictEqual(resultado, proyectos);
  assert.notStrictEqual(resultado, proyectos);
});

test("Web devuelve solo proyectos Web", () => {
  const resultado = filtrarProyectos(proyectos, "Web");

  assert.deepStrictEqual(resultado, [proyectos[0]]);
});

test("Apps devuelve solo proyectos Apps", () => {
  const resultado = filtrarProyectos(proyectos, "Apps");

  assert.deepStrictEqual(resultado, [proyectos[1]]);
});

test("Una categoría sin resultados devuelve un arreglo vacío", () => {
  const resultado = filtrarProyectos(proyectos, "Sin resultados");

  assert.deepStrictEqual(resultado, []);
});

test("Una lista vacía devuelve un arreglo vacío", () => {
  const resultado = filtrarProyectos([], "Todos");

  assert.deepStrictEqual(resultado, []);
});
