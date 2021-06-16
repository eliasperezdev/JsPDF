import React, { useContext, useState } from 'react'
import TextAreaReact from './TextAreaReact'

const Accordion = ({titulo, agregar}) => {

    const [accordion, setaccordion] = useState(false)

    const abrirAccordion = () => {
        setaccordion(!accordion)
    }


  return (
    <>
      <div 
        onClick={abrirAccordion}
        className="w-full bg-white pl-5 py-2 relative border-2 border-blue-200 border-opacity-100 "
      >
        <h3 className="text-gray-800 font-bold text-base">
            {titulo}
        </h3>
        <i className="fas fa-angle-down absolute top-3 right-8"></i>
      </div>
      {accordion? 
        <div
            className="bg-gray-300 w-full pt-3 px-2"
        >
            {/* Contenido */}
            <TextAreaReact agregar={agregar} />
        </div>
      :null}
    </>
  )
}

export default Accordion
