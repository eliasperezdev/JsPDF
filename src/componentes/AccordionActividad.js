import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import LIObjetivo from './LIObjetivo';

const AccordionActividad = ({agregar, eliminar, actividad}) => {

    const [accordion, setaccordion] = useState(false)

    const abrirAccordion = () => {
        setaccordion(!accordion)
    }

    const [actividadd, setactividad] = useState(false)
    const [act, setact] = useState("")



    const agregarActividad = () => {
      setactividad(true)
  }
  const actualizarState2 = (e) => {
      setact(e.target.value)
  }

    const agregarlistaActividad = (e) => {
      e.preventDefault()
      agregar({
        id: uuidv4(),
        valor: act
      })

      setactividad(false)
      setact("")
  }

  return (
    <>
      <div 
        onClick={abrirAccordion}
        className="w-full bg-white pl-5 py-2 relative border-2 border-blue-200 border-opacity-100 "
      >
        <h3 className="text-gray-800 font-bold text-base">
            Lista de actividades
        </h3>
        <i className="fas fa-angle-down absolute top-3 right-8"></i>
      </div>
      {accordion? 
        <div
            className="bg-gray-300 w-full pt-3 px-2"
        >
            {/* Contenido */}
            <div>             
    <div>
        <label
            className="block uppercase text-gray-700 text-xs font-bold mb-2"
        >
            Actividades
        </label>

        {actividad? actividad.map(act => <LIObjetivo key={act.id} item={act} eliminar={eliminar}/>) : null}

       {actividadd? 
         <div>
                   <label
                     className="block uppercase text-gray-700 text-xs font-bold mb-2"
                     htmlFor="grid-password"
                   >
                     Actividades
                   </label>
                   <input
                     type="text"
                     className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                     placeholder="Escriba una actividad"
                     onChange={actualizarState2}
                     value={act}
                     
                   />
               <button className="bg-blue-200 m-2" onClick={agregarlistaActividad}>Agregar</button>
           </div>
           :
           <button 
              className="bg-green-500 text-white my-2 active:bg-green-600 font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" 
              onClick={agregarActividad}
            >Agregar actividad</button> }
         </div>
      </div>
        </div>
      :null}
    </>
  )
}

export default AccordionActividad
