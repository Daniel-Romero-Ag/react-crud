import { helpHttp } from "../helpers/helpHTTP";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import React, { useState, useEffect } from 'react';
import Loader from "./Loader";
import Message from "./Message";


function Crud() {
  const api = helpHttp();
  const url ="http://localhost:5000/libros";
  const [libros, setLibros] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dataToEdit, setDataToEdit] = useState(null);

  const agregarLibro = libro=>{
    api.post(url,{body:libro}).then(res=>{
      if(!res.error){
        setLibros([...libros,res])
      }
    }).catch(rej=>{
      setError(rej.statusText)
    })
  }

  const borrarLibro = libroABorrar=>{
    api.del(url,{body:libroABorrar}).then(res=>{
      if(!res.error){
        const nuevosLibros= libros.filter(libro => libro.id!==libroABorrar.id)
        setLibros(nuevosLibros)
      }
    })
  }

  const actualizarLibro = libroNuevo =>{
      api.put(url, {body:libroNuevo}).then(res=>{
        if(!res.error){
          const nuevosLibros = libros.map(libro => libro.id=== libroNuevo.id ? libroNuevo :libro)
          setLibros(nuevosLibros)
        }
      })
  }



  useEffect(() => {
    setLoading(true)
   api.get(url).then(res=>{
     if(!res.err){
       setError(null)
       setLibros(res)
     }
     setLoading(false)
   }).catch(rej=>{
    setLibros(null)
    setError(rej.statusText)
    setLoading(false)
   })
  }, []);
  return (
    <>
      
      <main className="container">
        <h2>Crud</h2>
        <p>A continuación mostraremos una CRUD sobre libros en una biblioteca, podremos ver los que tenemos en exhibición, seleccionar uno para ver más datos, borrar un libro, agregarlo o modificarlo</p>
        {loading && <Loader></Loader>}
        {error && <Message error={error} bgColor="#fff"></Message>}
        
        {libros &&<CrudTable borrarLibro={borrarLibro} setDataToEdit={setDataToEdit} libros={libros}></CrudTable> }
        
        <CrudForm agregarLibro={agregarLibro} actualizarLibro={actualizarLibro} setDataToEdit={setDataToEdit} dataToEdit={dataToEdit}></CrudForm>
      </main>
    </>
  );
}

export default Crud;
