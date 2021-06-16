import React, { useContext, useState } from 'react'
import LIObjetivo from './LIObjetivo'
import pdfContext from '../context/pdfContext'

const AgregarObjetivo = ({name}) => {



  const [objetivo, setobjetivo] = useState(false)

    const agregarObjetivo = () => {
        setobjetivo(true)
    }
    const actualizarState = (e) => {
        setobj(e.target.value)
    }

    const agregarlistaObjetivo = (e) => {
        e.preventDefault()
        setobjetivos({
          ...objetivos,
          [name]: [...objetivos[name], obj]})
        setobjetivo(false)
        setobj("")
    }

    const borrarObjetivo = (e) => {
      e.preventDefault()
      setobjetivos({
        ...objetivos,
      })     
    }
    
  return (
    <>
      <div>
      <label
            className="block uppercase text-gray-700 text-xs font-bold mb-2"
        >
            Objetivos
        </label>
        {/* Mostrar los objetivos */}
          {objetivo? 
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
    </>
  )
}

export default AgregarObjetivo
