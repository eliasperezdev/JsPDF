import React, { useContext, useState } from 'react'
import TextAreaReact from './TextAreaReact'
import pdfContext from '../context/pdfContext'

const EncuadrePrestacional = () => {

  const PdfContext = useContext(pdfContext);
  const {
    agregarEncuadre
  } = PdfContext

    const [check, setcheck] = useState(false)
  return (
    <>
            

        <h6 className="text-gray-500 text-xl mt-3 mb-6 font-bold uppercase">
            Encuadre prestacional
        </h6>
        <TextAreaReact agregar={agregarEncuadre}/>
    </>
  )
}

export default EncuadrePrestacional
