import React, { useReducer } from 'react';
import pdfContext from './pdfContext';
import PdfReducer from './PDFReducer';
import { 
    AGREGAR_ANTECEDENTE,
    AGREGAR_CONCLUSION,
    AGREGAR_CONTENIDOCOGNITIVO,
    AGREGAR_CONTENIDOCOMUNICACION,
    AGREGAR_CONTENIDOMEDICA,
    AGREGAR_CONTENIDOMOTORA,
    AGREGAR_CONTENIDONUTRICIONAL,
    AGREGAR_CONTENIDOSOCIA,
    AGREGAR_ENCUADRE,
    AGREGAR_FECHA,
    AGREGAR_MOTIVO,
    AGREGAR_OBJETIVO_COGNITIVO,
    AGREGAR_OBJETIVO_COMUNICACION,
    AGREGAR_OBJETIVO_MEDICA,
    AGREGAR_OBJETIVO_MOTORA,
    AGREGAR_OBJETIVO_NUTRICIONAL,
    AGREGAR_OBJETIVO_SOCIA,
    AGREGAR_ACTIVIDAD_COGNITIVO,
    AGREGAR_ACTIVIDAD_COMUNICACION,
    AGREGAR_ACTIVIDAD_MEDICA,
    AGREGAR_ACTIVIDAD_MOTORA,
    AGREGAR_ACTIVIDAD_NUTRICIONAL,
    AGREGAR_ACTIVIDAD_SOCIA,
    ELIMINAR_ACTIVIDAD_COGNITIVO,
    ELIMINAR_ACTIVIDAD_COMUNICACION,
    ELIMINAR_ACTIVIDAD_MEDICA,
    ELIMINAR_ACTIVIDAD_MOTORA,
    ELIMINAR_ACTIVIDAD_NUTRICIONAL,
    ELIMINAR_ACTIVIDAD_SOCIA,
    ELIMINAR_OBJETIVO_COGNITIVO,
    ELIMINAR_OBJETIVO_COMUNICACION,
    ELIMINAR_OBJETIVO_MEDICA,
    ELIMINAR_OBJETIVO_MOTORA,
    ELIMINAR_OBJETIVO_NUTRICIONAL,
    ELIMINAR_OBJETIVO_SOCIA
} from '../types';

const PdfState = props => {

    const initialState = {
            id:"",
            alumno:"",
            motivo:"",
            fecha:"",
            antecedentes:"", //Podria ser un objeto propio
            contenido: {
                cognitiva:"",
                motora:"",
                comunicacion:"",
                nutricional:"",
                socia:"",
                medica:""
            },
            objetivos: {
                cognitiva:[],
                motora:[],
                comunicacion:[],
                nutricional:[],
                socia:[],
                medica:[]
            },
            actividades: {
                cognitiva:[],
                motora:[],
                comunicacion:[],
                nutricional:[],
                socia:[],
                medica:[]
            },
            encuadre:"",
            conclusion:""
    }

    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(PdfReducer, initialState)

    const agregarFecha = fecha =>{
        dispatch({
            type: AGREGAR_FECHA,
            payload: fecha
        })
    }

    const agregarMotivo = motivo =>{
        dispatch({
            type: AGREGAR_MOTIVO,
            payload: motivo
        })
    }

    const agregarAntecedente = text =>{
        dispatch({
            type: AGREGAR_ANTECEDENTE,
            payload: text
        })
    }

    const agregarContenidoCognitivo = text =>{
        dispatch({
            type: AGREGAR_CONTENIDOCOGNITIVO,
            payload: text
        })
    }

    const agregarContenidoMotora = text =>{
        dispatch({
            type: AGREGAR_CONTENIDOMOTORA,
            payload: text
        })
    }

    const agregarContenidoSocia = text =>{
        dispatch({
            type: AGREGAR_CONTENIDOSOCIA,
            payload: text
        })
    }

    const agregarContenidoNutricional = text =>{
        dispatch({
            type: AGREGAR_CONTENIDONUTRICIONAL,
            payload: text
        })
    }

    const agregarContenidoComunicacion = text =>{
        dispatch({
            type: AGREGAR_CONTENIDOCOMUNICACION,
            payload: text
        })
    }

    const agregarContenidoMedica = text =>{
        dispatch({
            type: AGREGAR_CONTENIDOMEDICA,
            payload: text
        })
    }

    const agregarObjetivoCognitivo = (objetivo)=>{
        dispatch({
            type: AGREGAR_OBJETIVO_COGNITIVO,
            payload: objetivo
        })
    }

    const agregarObjetivoSocia = (objetivo)=>{
        dispatch({
            type: AGREGAR_OBJETIVO_SOCIA,
            payload: objetivo
        })
    }

    const agregarObjetivoComunicacion = (objetivo)=>{
        dispatch({
            type: AGREGAR_OBJETIVO_COMUNICACION,
            payload: objetivo
        })
    }

    const agregarObjetivoMedica = (objetivo)=>{
        dispatch({
            type: AGREGAR_OBJETIVO_MEDICA,
            payload: objetivo
        })
    }

    const agregarObjetivoMotora = (objetivo)=>{
        dispatch({
            type: AGREGAR_OBJETIVO_MOTORA,
            payload: objetivo
        })
    }

    const agregarObjetivoNutricional = (objetivo)=>{
        dispatch({
            type: AGREGAR_OBJETIVO_NUTRICIONAL,
            payload: objetivo
        })
    }

    const agregarActividadCognitivo = (actividad)=>{
        dispatch({
            type: AGREGAR_ACTIVIDAD_COGNITIVO,
            payload: actividad
        })
    }

    const agregarActividadSocia = (actividad)=>{
        dispatch({
            type: AGREGAR_ACTIVIDAD_SOCIA,
            payload: actividad
        })
    }

    const agregarActividadComunicacion = (actividad)=>{
        dispatch({
            type: AGREGAR_ACTIVIDAD_COMUNICACION,
            payload: actividad
        })
    }

    const agregarActividadMedica = (actividad)=>{
        dispatch({
            type: AGREGAR_ACTIVIDAD_MEDICA,
            payload: actividad
        })
    }

    const agregarActividadMotora = (actividad)=>{
        dispatch({
            type: AGREGAR_ACTIVIDAD_MOTORA,
            payload: actividad
        })
    }

    const agregarActividadNutricional = (actividad)=>{
        dispatch({
            type: AGREGAR_ACTIVIDAD_NUTRICIONAL,
            payload: actividad
        })
    }

    const eliminarObjetivoCognitivo = (objetivo)=>{
        dispatch({
            type: ELIMINAR_OBJETIVO_COGNITIVO,
            payload: objetivo
        })
    }

    const eliminarObjetivoSocia = (objetivo)=>{
        dispatch({
            type: ELIMINAR_OBJETIVO_SOCIA,
            payload: objetivo
        })
    }

    const eliminarObjetivoComunicacion = (objetivo)=>{
        dispatch({
            type: ELIMINAR_OBJETIVO_COMUNICACION,
            payload: objetivo
        })
    }

    const eliminarObjetivoMedica = (objetivo)=>{
        dispatch({
            type: ELIMINAR_OBJETIVO_MEDICA,
            payload: objetivo
        })
    }

    const eliminarObjetivoMotora = (objetivo)=>{
        dispatch({
            type: ELIMINAR_OBJETIVO_MOTORA,
            payload: objetivo
        })
    }

    const eliminarObjetivoNutricional = (objetivo)=>{
        dispatch({
            type: ELIMINAR_OBJETIVO_NUTRICIONAL,
            payload: objetivo
        })
    }

    const eliminarActividadCognitivo = (actividad)=>{
        dispatch({
            type: ELIMINAR_ACTIVIDAD_COGNITIVO,
            payload: actividad
        })
    }

    const eliminarActividadSocia = (actividad)=>{
        dispatch({
            type: ELIMINAR_ACTIVIDAD_SOCIA,
            payload: actividad
        })
    }

    const eliminarActividadComunicacion = (actividad)=>{
        dispatch({
            type: ELIMINAR_ACTIVIDAD_COMUNICACION,
            payload: actividad
        })
    }

    const eliminarActividadMedica = (actividad)=>{
        dispatch({
            type: ELIMINAR_ACTIVIDAD_MEDICA,
            payload: actividad
        })
    }

    const eliminarActividadMotora = (actividad)=>{
        dispatch({
            type: ELIMINAR_ACTIVIDAD_MOTORA,
            payload: actividad
        })
    }

    const eliminarActividadNutricional = (actividad)=>{
        dispatch({
            type: ELIMINAR_ACTIVIDAD_NUTRICIONAL,
            payload: actividad
        })
    }

    const agregarEncuadre = text =>{
        dispatch({
            type: AGREGAR_ENCUADRE,
            payload: text
        })
    }

    const agregarConclusion = text =>{
        dispatch({
            type: AGREGAR_CONCLUSION,
            payload: text
        })
    }


    return (
        <pdfContext.Provider
            value={{
                id:state.id,
                alumno: state.alumno,
                motivo: state.motivo,
                fecha: state.fecha,
                antecedentes: state.antecedentes,
                contenido: state.contenido,
                objetivos: state.objetivos,
                actividades: state.actividades,
                encuadre: state.encuadre,
                conclusion: state.conclusion,
                agregarMotivo,
                agregarFecha,
                agregarContenidoCognitivo,
                agregarContenidoMotora,
                agregarContenidoComunicacion,
                agregarContenidoMedica,
                agregarContenidoNutricional,
                agregarContenidoSocia,
                agregarEncuadre,
                agregarConclusion,
                agregarAntecedente,
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
                eliminarObjetivoSocia
            }}
        >
            {props.children}
        </pdfContext.Provider>
        
    )
}

export default PdfState