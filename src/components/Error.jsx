const Error = ({mensaje}) => {
  return (
    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5 uppercase">
      <p>{mensaje}</p>
    </div>
  );
};

export default Error;
