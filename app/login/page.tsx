"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {

  const router = useRouter();

  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");
  const [error, setError] = useState("");

  const iniciarSesion = () => {

    if (usuario === "admin" && clave === "admin123") {
      router.push("/dashboard");
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">

      <h1 className="text-3xl font-bold">
        Inicio de Sesión
      </h1>

      <input
        type="text"
        placeholder="Usuario"
        className="border p-2"
        onChange={(e) => setUsuario(e.target.value)}
      />

      <input
        type="password"
        placeholder="Contraseña"
        className="border p-2"
        onChange={(e) => setClave(e.target.value)}
      />

      <button
        onClick={iniciarSesion}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Ingresar
      </button>

      {
        error && (
          <p className="text-red-500">
            {error}
          </p>
        )
      }

    </div>
  );
}