import React, {useContext, useState} from 'react'
import AntecedentesCollapse from './AntecedentesCollapse';
import Tratamiento from './Tratamiento';
import Motivo from './MotivoCollapse';
import EncuadrePrestacional from './EncuadrePrestacional';
import ContenidoCollapse from './ContenidoCollapse';
import pdfContext from '../context/pdfContext'
import Conclusion from './Conclusion';

function formatoFecha(fecha) {
  var date = new Date(fecha);
  var month = date.getMonth()+1;
  var day = date.getDate();
  var year = date.getFullYear();
  return day+"/"+month+"/"+year
}

const Formulario = () => {

  const PdfContext = useContext(pdfContext);
  const {agregarFecha} = PdfContext


    const botonFinalizar=e=>{
        e.preventDefault()
    };

    const onFecha = (e) => {
        agregarFecha(formatoFecha(e.target.value))
    }


  return (
    <>
      <form className="bg-gray-200 py-3 px-4">
          <h2 className="text-gray-800 text-3xl font-bold">Informe Anual</h2>
          <div className="relative mb-3">
          <label
            className="block uppercase text-gray-700 text-xs font-bold mb-2"
              >
                Seleccione una fecha
          </label>
          <input 
            type="date" 
            onChange={onFecha} 
            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline ease-linear transition-all duration-150"
            placeholder="mm/dd/yyyy"
          />
        </div>


          {/* Motivo */}
          <hr className="mt-6 border-b-1 border-gray-400" />
          <Motivo/>

          {/* Mutual */}

          <hr className="mt-6 border-b-1 border-gray-400" />
          {/* Antecedentes*/}
          <AntecedentesCollapse/>
          <hr className="mt-6 border-b-1 border-gray-400" />

          
      
          {/* Contenido */} 
          <ContenidoCollapse/> 
          <hr className="mt-6 border-b-1 border-gray-400" />
          <Tratamiento/>

          <hr className="mt-6 border-b-1 border-gray-400" />
          <EncuadrePrestacional/>

          {/* Conclusion */}
          <Conclusion/>

          <button
            className="bg-purple-500 text-white active:bg-purple-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            onClick={botonFinalizar}
          > Finalizar</button>          

      </form>
    </>
  )
}

export default Formulario

