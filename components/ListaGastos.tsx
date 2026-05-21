"use client";

import { useContext, useEffect } from "react";
import { GastosContext } from "@/context/GastosContext";
import { obtenerGastos } from "@/services/api";

export default function ListaGastos() {
  const context = useContext(GastosContext);

  useEffect(() => {
    if (!context) return;
    obtenerGastos().then((data) => {
      if (Array.isArray(data)) {
        for (let i = 0; i < data.length; i++) {
  context.agregarGasto(data[i]);
    }
  }
    });
  }, [context]);

  if (!context) return null;

  const { gastos, eliminarGasto, editarGasto } = context;

  return (
    <div>
      <h2 className="text-xl font-bold mb-3">Lista de Gastos</h2>
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Monto</th>
            <th className="border p-2">Descripción</th>
            <th className="border p-2">Categoría</th>
            <th className="border p-2">Fecha</th>
            <th className="border p-2">Editar</th>
            <th className="border p-2">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {gastos.map((gasto, index) => (
            <tr key={index}>
              <td className="border p-2">{gasto.monto}</td>
              <td className="border p-2">{gasto.descripcion}</td>
              <td className="border p-2">{gasto.categoria}</td>
              <td className="border p-2">{gasto.fecha}</td>
              <td className="border p-2">
                <button
                  className="bg-yellow-400 text-white px-2 py-1 rounded"
                  onClick={() => editarGasto(index)}
                >
                  Editar
                </button>
              </td>
              <td className="border p-2">
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => eliminarGasto(index)}
                >
                  Borrar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}