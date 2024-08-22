// src/components/Saludo.test.jsx
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Saludo from "../components/Saludo";

test("renderiza el saludo con el nombre proporcionado", () => {
  render(<Saludo nombre="Juan" />);
  const elementoSaludo = screen.getByText(/Hola, Juan!/i);
  expect(elementoSaludo).toBeInTheDocument();
});

test("renderiza el saludo con un nombre diferente", () => {
  render(<Saludo nombre="María" />);
  const elementoSaludo = screen.getByText(/Hola, María!/i);
  expect(elementoSaludo).toBeInTheDocument();
});
