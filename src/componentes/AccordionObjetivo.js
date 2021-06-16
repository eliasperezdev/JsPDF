import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import LIObjetivo from './LIObjetivo';

const AccordionObjetivo = ({agregar, eliminar, objetivo}) => {

    const [accordion, setaccordion] = useState(false)

    const abrirAccordion = () => {
        setaccordion(!accordion)
    }

    const [objetivoo, setobjetivo] = useState(false)
    const [obj, setobj] = useState("")

    const agregarObjetivo = () => {
        setobjetivo(true)
    }
    const actualizarState = (e) => {
        setobj(e.target.value)
    }

    const agregarlistaObjetivo = (e) => {
        e.preventDefault()
        agregar({
            id: uuidv4(),
            valor: obj
        })
        setobjetivo(false)
        setobj("")
    }

    const borrarObjetivo = (e) => {
      e.preventDefault()
    }
    
  return (
    <>
    <div 
        onClick={abrirAccordion}
        className="w-full bg-white pl-5 py-2 relative border-2 border-blue-200 border-opacity-100 "
    >
        <h3 className="text-gray-800 font-bold text-base">
            Lista de objetivos
        </h3>
        <i className="fas fa-angle-down absolute top-3 right-8"></i>
      </div>
      {accordion? 
        <div
            className="bg-gray-300 w-full pt-3 px-2"
        >
            {/* Contenido */}
    <div>
      <label
            className="block uppercase text-gray-700 text-xs font-bold mb-2"
        >
            Objetivos
        </label>

        {objetivo? objetivo.map(obj => <LIObjetivo key={obj.id} item={obj} eliminar={eliminar}/>) : null}

          {objetivoo? 
          <div>
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  >
                    Objetivo
                  </label>
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    placeholder="Escriba un objetivo"
                    onChange={actualizarState}
                    value={obj}
                    
                  />
              <button className="bg-blue-200 m-2" onClick={agregarlistaObjetivo}>Agregar</button>
          </div>
          :
          <button 
              className="bg-blue-500 text-white my-2 active:bg-blue-600 font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" 
              onClick={agregarObjetivo}
          >Agregar objetivo</button> }

      </div>
      </div>
      :null}
    </>
  )
}

export default AccordionObjetivo
