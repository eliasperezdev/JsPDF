import React, { useContext, useState } from 'react'
import pdfContext from '../context/pdfContext'
import { PDFViewer, StyleSheet } from '@react-pdf/renderer';
import MyDocument from './Documento'


const MostrarPDF = () => {

    const PdfContext = useContext(pdfContext);
    const {
        id,
        alumno,
        motivo,
        fecha,
        antecedentes,
        contenido,
        objetivos,
        actividades,
        encuadre,
        conclusion
    } = PdfContext
  

  return (
    <>
    <PDFViewer width="100%" className="vh-100" >
          <MyDocument 
                    id={id}
                    alumno={alumno}
                    motivo={motivo}
                    fecha={fecha}
                    antecedentes={antecedentes}
                    contenido={contenido}
                    objetivos={objetivos}
                    actividades={actividades}
                    encuadre={encuadre}
                    conclusion={conclusion}
          />
    </PDFViewer>
    </>
  )
}

export default MostrarPDF
