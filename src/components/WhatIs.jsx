import "./WhatIs.css";
import CrudOptions from "../helpers/crudOptions.json"
import CrudOption from "./CrudOption";
function WhatIs({ crud }) {
  console.log(CrudOptions)
  return (
    <>
      <section className="container what--is">
        <h2>¿Qué es una CRUD?</h2>
        <div className="contenedor--imagen">
          <figure>
            <img src={crud} alt="" />
            <figcaption>Operaciones validas en una crud</figcaption>
          </figure>
        </div>
        <div className="contenedor--definicion">
            <p>En informática, CRUD es el acrónimo de "Crear, Leer, Actualizar y Borrar", que se usa para referirse a las funciones básicas en bases de datos o la capa de persistencia en un software</p>
            <p> El concepto CRUD está estrechamente vinculado a la gestión de datos digitales.</p>
            <p>Las operaciones que realiza son las siguientes: </p>
            <ul>
              {CrudOptions.map(opcion=><CrudOption key={opcion.opcion} Opcion={opcion}/>)}   
            </ul>
        </div>
      </section>
    </>
  );
}

export default WhatIs;
