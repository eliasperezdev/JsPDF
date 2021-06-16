import React,{useContext} from 'react'
import Accordion from './Accordion'
import pdfContext from '../context/pdfContext'
 
const ContenidoCollapse = () => {

  const PdfContext = useContext(pdfContext);
  const {
          agregarContenidoCognitivo, 
          agregarContenidoMotora,
          agregarContenidoComunicacion,
          agregarContenidoMedica,
          agregarContenidoNutricional,
          agregarContenidoSocia
  } = PdfContext

  return (
    <>
        <h6 className="text-gray-500 text-xl mt-3 mb-6 font-bold uppercase">
            Contenido
        </h6>
        <Accordion titulo={"Area cognitiva"} agregar={agregarContenidoCognitivo}/>
        <Accordion titulo={"Area motora"} agregar={agregarContenidoMotora}/>
        <Accordion titulo={"Area lenguaje-comunicación"} agregar={agregarContenidoComunicacion}/>
        <Accordion titulo={"Area socia-afectiva"} agregar={agregarContenidoSocia}/>
        <Accordion titulo={"Area medica"} agregar={agregarContenidoMedica}/>
        <Accordion titulo={"Area nutricional"} agregar={agregarContenidoNutricional}/>

    </>
  )
}

export default ContenidoCollapse
