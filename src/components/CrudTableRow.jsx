import "./CrudTableRow.css"
function CrudTableRow({libro,setDataToEdit, borrarLibro}) {
    const {nombre, autor, anio}= libro;
  return (
    <>
      <tr class="crud--table--row">
        <td>{nombre}</td>
        <td>{autor}</td>
        <td>{anio}</td>
        <td>
          <ul>
            <a href="#a" onClick={e=>{
              e.preventDefault()
              borrarLibro(libro)
            }}>Borrar</a>
            <a href="#a" onClick={e=>{
              e.preventDefault()
              setDataToEdit(libro)
            }}>Actualizar</a>
          </ul>
        </td>
      </tr>
    </>
  );
}

export default CrudTableRow;
