import React,{useContext} from 'react'
import AccordionActividad from './AccordionActividad'
import AccordionObjetivo from './AccordionObjetivo'
import pdfContext from '../context/pdfContext'


const Tratamiento = () => {

  const PdfContext = useContext(pdfContext);
  const {
    agregarActividadCognitivo,
    agregarActividadComunicacion,
    agregarActividadMedica,
    agregarActividadSocia,
    agregarActividadMotora,
    agregarActividadNutricional,
    agregarObjetivoCognitivo,
    agregarObjetivoComunicacion,
    agregarObjetivoMedica,
    agregarObjetivoSocia,
    agregarObjetivoMotora,
    agregarObjetivoNutricional,
    eliminarActividadCognitivo,
    eliminarActividadComunicacion,
    eliminarActividadMedica,
    eliminarActividadMotora,
    eliminarActividadNutricional,
    eliminarActividadSocia,
    eliminarObjetivoCognitivo,
    eliminarObjetivoComunicacion,
    eliminarObjetivoMedica,
    eliminarObjetivoMotora,
    eliminarObjetivoNutricional,
    eliminarObjetivoSocia,
    objetivos,
    actividades
  } = PdfContext

    const eliminarObjetivo =id=>{
    };


   return (
    <>
      <h6 className="text-gray-500 text-xl mt-3 mb-6 font-bold uppercase">
            Tratamiento
        </h6>
        <label
            className="block uppercase text-gray-700 text-xs font-bold mb-2"
        >
            Agrege los objetivos y activdades por cada area
        </label>

      <div>
          <h3 className="block uppercase text-gray-700 text-lg font-bold mb-2"><i className="fas fa-arrow-alt-circle-left"></i>Area cognitiva</h3>
          <AccordionObjetivo agregar={agregarObjetivoCognitivo} eliminar={eliminarObjetivoCognitivo} objetivo={objetivos.cognitiva}/>
          <AccordionActividad agregar={agregarActividadCognitivo} eliminar={eliminarActividadCognitivo} actividad={actividades.cognitiva}/>
       </div>

       <div>
          <h3 className="block uppercase text-gray-700 text-lg font-bold mb-2"><i className="fas fa-arrow-alt-circle-left"></i>Area motora</h3>
          <AccordionObjetivo agregar={agregarObjetivoMotora} eliminar={eliminarObjetivoMotora} objetivo={objetivos.motora}/>
          <AccordionActividad agregar={agregarActividadMotora} eliminar={eliminarActividadMotora} actividad={actividades.motora}/>
       </div>
       <div>
          <h3 className="block uppercase text-gray-700 text-lg font-bold mb-2"><i className="fas fa-arrow-alt-circle-left"></i>Area socia-afectiva</h3>
          <AccordionObjetivo 
               agregar={agregarObjetivoSocia} 
               eliminar={eliminarObjetivoSocia} 
               objetivo={objetivos.socia}
         />
          <AccordionActividad 
               agregar={agregarActividadSocia} 
               eliminar={eliminarActividadSocia} 
               actividad={actividades.socia}
         />
       </div>
       <div>
          <h3 className="block uppercase text-gray-700 text-lg font-bold mb-2"><i className="fas fa-arrow-alt-circle-left"></i>Area de comunicación</h3>
          <AccordionObjetivo 
               agregar={agregarObjetivoComunicacion} 
               eliminar={eliminarObjetivoComunicacion} 
               objetivo={objetivos.comunicacion}
          />
          <AccordionActividad 
               agregar={agregarActividadComunicacion} 
               eliminar={eliminarActividadComunicacion} 
               actividad={actividades.comunicacion}
          />
       </div>
       <div>
          <h3 className="block uppercase text-gray-700 text-lg font-bold mb-2"><i className="fas fa-arrow-alt-circle-left"></i>Area medica</h3>
          <AccordionObjetivo 
               agregar={agregarObjetivoMedica} 
               eliminar={eliminarObjetivoMedica} 
               objetivo={objetivos.medica}
          />
          <AccordionActividad 
               agregar={agregarActividadMedica} 
               eliminar={eliminarActividadMedica} 
               actividad={actividades.medica}
          />
       </div>
       <div>
          <h3 className="block uppercase text-gray-700 text-lg font-bold mb-2"><i className="fas fa-arrow-alt-circle-left"></i>Area nutricional</h3>
          <AccordionObjetivo 
               agregar={agregarObjetivoNutricional} 
               eliminar={eliminarObjetivoNutricional} 
               objetivo={objetivos.nutricional}
          />
          <AccordionActividad 
               agregar={agregarActividadNutricional} 
               eliminar={eliminarActividadNutricional} 
               actividad={actividades.nutricional}
          />
       </div>
    </>
  )
}

export default Tratamiento
