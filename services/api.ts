const API_URL = "http://localhost:5000/gasto";

export async function obtenerGastos() {

  const respuesta = await fetch(API_URL);

  return respuesta.json();
}

export async function guardarGasto(gasto: {
  categoria: string;
  monto: number;
  fecha: string;
}) {

  const respuesta = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(gasto),
  });

  return respuesta.json();
}