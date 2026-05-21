"use client";

import { useContext } from "react";
import { GastosContext } from "@/context/GastosContext";

export default function Alerta() {
  const context = useContext(GastosContext);
  if (!context) return null;

  const { presupuesto, gastos } = context;

  const totalGastado = gastos.reduce((acc, g) => acc + g.monto, 0);

  if (totalGastado > presupuesto && presupuesto > 0) {
    return (
      <div className="bg-red-500 text-white p-3 rounded mb-3">
        Has superado el límite del presupuesto, debes ajustar gastos
      </div>
    );
  }

  if (totalGastado >= presupuesto * 0.8 && totalGastado <= presupuesto && presupuesto > 0) {
    return (
      <div className="bg-yellow-400 text-black p-3 rounded mb-3">
        Atención: Has alcanzado el 80% de tu presupuesto mensual
      </div>
    );
  }

  return null;
}