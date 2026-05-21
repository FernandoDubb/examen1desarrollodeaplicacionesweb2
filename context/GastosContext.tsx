"use client";

import { createContext, useState, ReactNode } from "react";

export interface Gasto {
  categoria: string;
  monto: number;
  descripcion: string;
  fecha: string;
}

interface GastosContextType {
  presupuesto: number;
  setPresupuesto: (valor: number) => void;
  gastos: Gasto[];
  agregarGasto: (gasto: Gasto) => void;
  eliminarGasto: (index: number) => void;
  editarGasto: (index: number) => void;
}

export const GastosContext = createContext<GastosContextType | null>(null);

export function GastosProvider({ children }: { children: ReactNode }) {
  const [presupuesto, setPresupuesto] = useState(0);
  const [gastos, setGastos] = useState<Gasto[]>([]);

  const agregarGasto = (gasto: Gasto) => {
  const nuevaLista = [...gastos, gasto];
  setGastos(nuevaLista);
    };

  const eliminarGasto = (index: number) => {
  const nuevaLista = gastos.filter((item, i) => i !== index);
  setGastos(nuevaLista);
    };
  const editarGasto = (index: number) => {
    const gasto = gastos[index];
    const nuevoMonto = prompt("Nuevo monto:", String(gasto.monto));
    if (nuevoMonto !== null) {
      const copia = [...gastos];
      copia[index] = { ...gasto, monto: Number(nuevoMonto) };
      setGastos(copia);
    }
  };

  return (
    <GastosContext.Provider value={{
      presupuesto,
      setPresupuesto,
      gastos,
      agregarGasto,
      eliminarGasto,
      editarGasto,
    }}>
      {children}
    </GastosContext.Provider>
  );
}