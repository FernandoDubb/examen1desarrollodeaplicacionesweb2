"use client";

import Presupuesto from "@/components/Presupuesto";
import FormularioGasto from "@/components/FormularioGasto";
import ListaGastos from "@/components/ListaGastos";
import Alerta from "@/components/Alerta";

export default function Dashboard() {
  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5">Dashboard de Gastos</h1>
      <Alerta />
      <Presupuesto />
      <FormularioGasto />
      <ListaGastos />
    </div>
  );
}