"use client";

import { useContext, useState } from "react";
import { GastosContext } from "@/context/GastosContext";
import { guardarGasto } from "@/services/api";

export default function FormularioGasto() {

  const context = useContext(GastosContext);
  const [categoria, setCategoria] = useState("");
  const [monto, setMonto] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fecha, setFecha] = useState("");

  if (!context) return null;

  const { agregarGasto } = context;

  const guardar = async () => {
    const nuevoGasto = {
      categoria,
      monto: Number(monto),
      descripcion,
      fecha
    };

    await guardarGasto(nuevoGasto);
    agregarGasto(nuevoGasto);

    setCategoria("");
    setMonto("");
    setDescripcion("");
    setFecha("");
  };

  return (
    <div className="mb-5 flex flex-col gap-2">
      <h2 className="text-xl font-bold">Registrar Gasto</h2>

      <input
        type="number"
        placeholder="Monto"
        className="border p-2"
        value={monto}
        onChange={(e) => setMonto(e.target.value)}
      />

      <input
        type="text"
        placeholder="Descripción"
        className="border p-2"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />

      <input
        type="text"
        placeholder="Categoría"
        className="border p-2"
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
      />

      <input
        type="date"
        className="border p-2"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
      />

      <button
        onClick={guardar}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Guardar Gasto
      </button>
    </div>
  );
}