import React, { useContext } from 'react'
import TextAreaReact from './TextAreaReact'
import pdfContext from '../context/pdfContext'

const Conclusion = () => {

  const PdfContext = useContext(pdfContext);
  const {
    agregarConclusion
  } = PdfContext
  return (
    <>
            

        <h6 className="text-gray-500 text-xl mt-3 mb-6 font-bold uppercase">
            Conclusión
        </h6>
        <TextAreaReact agregar={agregarConclusion}/>
    </>
  )
}

export default Conclusion
