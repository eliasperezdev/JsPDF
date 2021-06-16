import React, { useContext } from 'react'
import TextAreaReact from './TextAreaReact'
import pdfContext from '../context/pdfContext'

const AntecedentesCollapse = () => {

  const PdfContext = useContext(pdfContext);
  const {agregarAntecedente} = PdfContext

  return (
    <>

        <h6 className="text-gray-500 text-xl mt-3 mb-6 font-bold uppercase">
            Antecedentes del alumno (Mejorar)
        </h6>
        <TextAreaReact titulo={"Antecedentes"} agregar={agregarAntecedente}/>
    </>
  )
}

export default AntecedentesCollapse
