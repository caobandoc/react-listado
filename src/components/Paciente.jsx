import Swal from "sweetalert2";

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { mascota, propietario, email, fecha, sintomas, id } = paciente;

  const handleEliminar = () => {
    Swal.fire({
      title: "¿Estás seguro de eliminar este paciente?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "rgb(79,70,229)",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarPaciente(id);
        Swal.fire("Eliminado!", "El paciente ha sido eliminado.", "success");
      }
    });
  };

  return (
    <div className="mx-5 mb-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre mascota: {""}
        <span className="font-normal normal-case">{mascota}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Dueño: {""}
        <span className="font-normal normal-case">{propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha: {""}
        <span className="font-normal normal-case">{fecha}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {""}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>

      <div className="flex justify-between">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
