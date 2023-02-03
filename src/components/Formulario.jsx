import { useState, useEffect } from "react";
import Error from "./Error";

function Formulario({ pacientes, setPacientes }) {
  const [mascota, setMascota] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    //validacion del formulario
    if ([mascota, propietario, email, fecha, sintomas].includes("")) {
      console.log("Todos los campos son obligatorios");
      setError(true);
      return;
    }

    setError(false);

    const objPaciente = {
      mascota,
      propietario,
      email,
      fecha,
      sintomas,
    };

    setPacientes([...pacientes, objPaciente]);

    resetForm();
  };

  const resetForm = () => {
    setMascota("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Segumiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && <Error mensaje="Todos los campos son obligatorios" />}
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={mascota}
            onChange={(e) => setMascota(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="dueño"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre del dueño
          </label>
          <input
            id="dueño"
            type="text"
            placeholder="Nombre del dueño"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Correo del dueño"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta
          </label>
          <input
            id="alta"
            type="date"
            placeholder="Correo del dueño"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea
            id="sintomas"
            placeholder="Sintomas del paciente"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          value="Agregar paciente"
        />
      </form>
    </div>
  );
}

export default Formulario;
