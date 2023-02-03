const Paciente = () => {
  return (
    <div className="mx-5 mb-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">Hook</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Dueño: {""}
        <span className="font-normal normal-case">Carlos</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">obando@gmail.com</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha: {""}
        <span className="font-normal normal-case">10/06/2023</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {""}
        <span className="font-normal normal-case">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel tempore
          tempora temporibus earum totam doloremque voluptatibus dolorem nostrum
          autem nulla consequuntur, nam nisi odit omnis quos architecto
          distinctio quam quis.
        </span>
      </p>
    </div>
  );
};

export default Paciente;
