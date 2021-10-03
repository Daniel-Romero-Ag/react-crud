import "./CrudOption.css" 

function CrudOption({Opcion}) {
    const {opcion,descripcion}=Opcion;
  return (
    <>
      <li className="crud--option">
        <p>{opcion}</p> <p>{descripcion}</p>
      </li>
    </>
  );
}

export default CrudOption;
