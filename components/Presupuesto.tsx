"use client";

import { useContext } from "react";
import { GastosContext } from "@/context/GastosContext";

export default function Presupuesto() {

  const context = useContext(GastosContext);

  if (!context) return null;

  const {
    presupuesto,
    setPresupuesto,
    gastos
  } = context;

  const totalGastado = gastos.reduce(
    (acc, gasto) => acc + gasto.monto,
    0
  );

  return (
    <div className="mb-5">

      <h2 className="text-xl font-bold">
        Presupuesto Mensual
      </h2>

      <input
        type="number"
        placeholder="Ingrese presupuesto"
        className="border p-2"
        onChange={(e) =>
          setPresupuesto(Number(e.target.value))
        }
      />

      <p>Presupuesto: L. {presupuesto}</p>

      <p>Gastado: L. {totalGastado}</p>

      {
        totalGastado >= presupuesto * 0.8 &&
        totalGastado < presupuesto && (
          <p className="text-yellow-500">
            Has alcanzado el 80% del presupuesto
          </p>
        )
      }

      {
        totalGastado > presupuesto && (
          <p className="text-red-500">
            Has superado el límite del presupuesto
          </p>
        )
      }

    </div>
  );
}