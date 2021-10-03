import "./CrudTable.css";
import CrudTableRow from "./CrudTableRow";
function CrudTable({libros, setDataToEdit, borrarLibro}) {
  return (
    <table className="crud--table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Autor</th>
          <th>Año</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {libros.length === 0 ? <tr>Cargando</tr> : libros.map(libro=><CrudTableRow borrarLibro={borrarLibro} setDataToEdit={setDataToEdit} key={libro.id}  libro={libro}/>)}
      </tbody>
    </table>
  );
}

export default CrudTable;
