import React,{useContext} from 'react'
import pdfContext from '../context/pdfContext'

const MotivoCollapse = () => {

  const PdfContext = useContext(pdfContext);
  const {agregarMotivo} = PdfContext

  const onMotivo = (e) => {
    agregarMotivo(e.target.value)
  }

  return (
    <>
      <div>
      <h6 className="text-gray-500 text-xl mt-3 mb-3 font-bold uppercase">
            Motivo del informe
        </h6>
        <div>
          <label
            className="block uppercase text-gray-700 text-xs font-bold mb-2"
          >
            Seleccione el motivo del informe
          </label>
          <select 
            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline ease-linear transition-all duration-150"
            onChange={onMotivo}
            name="motivo"
            >
                    <option value={''}>Elegir motivo</option>
                    <option value={'ADMISIÓN'}>ADMISIÓN</option>
                    <option value={'RENOVACIÓN'}>RENOVACIÓN</option>
                    <option value={'INCORPORACIÓN'}>INCORPORACIÓN</option>
                    <option value={'DERIVACIÓN'}>DERIVACIÓN</option>
                    <option value={'CAMBIO DE MODALIDAD'}>CAMBIO DE MODALIDAD</option>
                    <option value={'FINALIZACIÓN'}>FINALIZACIÓN</option>
                    <option value={'RESERVA DE VACANTE'}>RESERVA DE VACANTE</option>
                    <option value={'ALTA MÉDICA'}>ALTA MÉDICA</option>
                    <option value={'SUSPENSIÓN'}>SUSPENSIÓN</option>
                    <option value={'REINCORPORACIÓN'}>REINCORPORACIÓN</option>
                    <option value={'CAMBIO DE CRONOGRAMA'}>CAMBIO DE CRONOGRAMA</option>
                    <option value={'CAMBIO DATOS PERSONALES'}>CAMBIO DATOS PERSONALES</option>
                    <option value={'BAJA'}>BAJA</option>
                    <option value={'OTROS'}>OTROS</option>
          </select>
        </div>
      </div>
    </>
  )
}

export default MotivoCollapse
