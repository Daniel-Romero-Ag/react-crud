import "./CrudForm.css";
import React, { useState, useEffect } from 'react';

const libroVacio={nombre:"",anio:"",autor:""}
function CrudForm({agregarLibro, dataToEdit, setDataToEdit, actualizarLibro}) {
  const [libro, setLibro] = useState(libroVacio);

  useEffect(() => {
  if(dataToEdit!==null){
    setLibro(dataToEdit)
  }
}, [dataToEdit]);
  
  const handleChange=e=>{
    setLibro({...libro,[e.target.name]:e.target.value})
    
  }

  const handleReset= ()=>{
    setLibro(libroVacio)
    setDataToEdit(null)
  }

  const handleSubmit = e=>{
    e.preventDefault()
    if(libro.id){
      actualizarLibro(libro)
    }else{
        agregarLibro(libro);    
    }
    handleReset();
  }
  

  return (
    <>
      <section className="container formulario--crud">
        <h2>{dataToEdit ? "Modificar": "Agregar"} libros</h2>
        <form action="#" onSubmit={handleSubmit}>
          <div className="campo">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" required  value={libro.nombre} name="nombre" onChange={handleChange} id="nombre" placeholder="Escribe el nombre" />
          </div>
          <div className="campo">
            <label htmlFor="autor">Autor</label>
            <input type="text" required value={libro.autor} name="autor" onChange={handleChange} id="autor" placeholder="Escribe el autor" />
          </div>
          <div className="campo">
            <label htmlFor="Anio">Año</label>
            <input
            title="Ejemplo: 1998"
            pattern="\d{4}"
              type="text"
              id="Anio"
              placeholder="Escribe el año de publicación (YYYY)"
              name="anio"
              value={libro.anio}
              onChange={handleChange}
              
            />
          </div>
          <div>
            <input type="submit" value={dataToEdit ? "Modificar": "Agregar"} />
            <input type="reset" value="Limpiar" onClick={handleReset}/>
          </div>
        </form>
      </section>
    </>
  );
}

export default CrudForm;
