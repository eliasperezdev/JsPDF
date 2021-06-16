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

export default (state, action) => {
    switch(action.type) {
        case AGREGAR_FECHA:
            return {
                ...state,
                fecha: action.payload
            }
        case AGREGAR_MOTIVO:
            return {
                ...state,
                motivo: action.payload
            }
        case AGREGAR_ANTECEDENTE:
            return {
                ...state,
                antecedentes: action.payload
            }
        case AGREGAR_CONTENIDOCOGNITIVO:
            return {
                ...state,
                contenido: {
                    ...state.contenido,
                    cognitiva: action.payload
                }
            }
        case AGREGAR_CONTENIDOMOTORA:
            return {
                ...state,
                contenido: {
                    ...state.contenido,
                    motora: action.payload
                }
            }

        case AGREGAR_CONTENIDOMEDICA:
            return {
                ...state,
                contenido: {
                    ...state.contenido,
                    medica: action.payload
                }
            }
        case AGREGAR_CONTENIDOCOMUNICACION:
            return {
                ...state,
                contenido: {
                    ...state.contenido,
                    comunicacion: action.payload
                }
            }

        case AGREGAR_CONTENIDONUTRICIONAL:
            return {
                ...state,
                contenido: {
                    ...state.contenido,
                    nutricional: action.payload
                }
            }
        case AGREGAR_CONTENIDOSOCIA:
            return {
                ...state,
                contenido: {
                    ...state.contenido,
                    socia: action.payload
                }
            }
        case AGREGAR_ACTIVIDAD_SOCIA:
            return {
                ...state,
                actividades: {
                    ...state.actividades,
                    socia: [...state.actividades.socia, action.payload]
                }
            }
        case AGREGAR_ACTIVIDAD_MOTORA:
            return {
                ...state,
                actividades: {
                    ...state.actividades,
                    motora: [...state.actividades.motora, action.payload]
                }
            }
        case AGREGAR_ACTIVIDAD_COMUNICACION:
            return {
                ...state,
                actividades: {
                    ...state.actividades,
                    comunicacion: [...state.actividades.comunicacion, action.payload]
                }
            }
        case AGREGAR_ACTIVIDAD_COGNITIVO:
            return {
                ...state,
                actividades: {
                    ...state.actividades,
                    cognitiva: [...state.actividades.cognitiva, action.payload]
                }
            }
        case AGREGAR_ACTIVIDAD_MEDICA:
            return {
                ...state,
                actividades: {
                    ...state.actividades,
                    medica: [...state.actividades.medica, action.payload]
                }
            }
        case AGREGAR_ACTIVIDAD_NUTRICIONAL:
            return {
                ...state,
                actividades: {
                    ...state.actividades,
                    nutricional: [...state.actividades.nutricional, action.payload]
                }
            }


            case AGREGAR_OBJETIVO_SOCIA:
                return {
                    ...state,
                    objetivos: {
                        ...state.objetivos,
                        socia: [...state.objetivos.socia, action.payload]
                    }
                }
            case AGREGAR_OBJETIVO_MOTORA:
                return {
                    ...state,
                    objetivos: {
                        ...state.objetivos,
                        motora: [...state.objetivos.motora, action.payload]
                    }
                }
            case AGREGAR_OBJETIVO_COMUNICACION:
                return {
                    ...state,
                    objetivos: {
                        ...state.objetivos,
                        comunicacion: [...state.objetivos.comunicacion, action.payload]
                    }
                }
            case AGREGAR_OBJETIVO_COGNITIVO:
                return {
                    ...state,
                    objetivos: {
                        ...state.objetivos,
                        cognitiva: [...state.objetivos.cognitiva, action.payload]
                    }
                }
            case AGREGAR_OBJETIVO_MEDICA:
                return {
                    ...state,
                    objetivos: {
                        ...state.objetivos,
                        medica: [...state.objetivos.medica, action.payload]
                    }
                }
            case AGREGAR_OBJETIVO_NUTRICIONAL:
                return {
                    ...state,
                    objetivos: {
                        ...state.objetivos,
                        nutricional: [...state.objetivos.nutricional, action.payload]
                    }
                }
    

                
        case ELIMINAR_ACTIVIDAD_SOCIA:
            return {
                ...state,
                actividades: {
                    ...state.actividades,
                    socia: state.actividades.socia.filter(actividad => actividad.id !== action.payload )
                }
            }
        case ELIMINAR_ACTIVIDAD_MOTORA:
            return {
                ...state,
                actividades: {
                    ...state.actividades,
                    motora: state.actividades.motora.filter(actividad => actividad.id !== action.payload )
                }
            }
        case ELIMINAR_ACTIVIDAD_COMUNICACION:
            return {
                ...state,
                actividades: {
                    ...state.actividades,
                    comunicacion: state.actividades.comunicacion.filter(actividad => actividad.id !== action.payload )
                }
            }
        case ELIMINAR_ACTIVIDAD_COGNITIVO:
            return {
                ...state,
                actividades: {
                    ...state.actividades,
                    cognitiva: state.actividades.cognitiva.filter(actividad => actividad.id !== action.payload )
                }
            }
        case ELIMINAR_ACTIVIDAD_MEDICA:
            return {
                ...state,
                actividades: {
                    ...state.actividades,
                    medica: state.actividades.medica.filter(actividad => actividad.id !== action.payload )
                }
            }
        case ELIMINAR_ACTIVIDAD_NUTRICIONAL:
            return {
                ...state,
                actividades: {
                    ...state.actividades,
                    nutricional: state.actividades.nutricional.filter(actividad => actividad.id !== action.payload )
                }
            }


            case ELIMINAR_OBJETIVO_SOCIA:
                return {
                    ...state,
                    objetivos: {
                        ...state.objetivos,
                        socia: state.objetivos.socia.filter(objetivo => objetivo.id !== action.payload )
                    }
                }
            case ELIMINAR_OBJETIVO_MOTORA:
                return {
                    ...state,
                    objetivos: {
                        ...state.objetivos,
                        motora: state.objetivos.motora.filter(objetivo => objetivo.id !== action.payload )
                    }
                }
            case ELIMINAR_OBJETIVO_COMUNICACION:
                return {
                    ...state,
                    objetivos: {
                        ...state.objetivos,
                        comunicacion: state.objetivos.comunicacion.filter(objetivo => objetivo.id !== action.payload )
                    }
                }
            case ELIMINAR_OBJETIVO_COGNITIVO:
                return {
                    ...state,
                    objetivos: {
                        ...state.objetivos,
                        cognitiva: state.objetivos.cognitiva.filter(objetivo => objetivo.id !== action.payload )
                    }
                }
            case ELIMINAR_OBJETIVO_MEDICA:
                return {
                    ...state,
                    objetivos: {
                        ...state.objetivos,
                        medica: state.objetivos.medica.filter(objetivo => objetivo.id !== action.payload )
                    }
                }
            case ELIMINAR_OBJETIVO_NUTRICIONAL:
                return {
                    ...state,
                    objetivos: {
                        ...state.objetivos,
                        nutricional: state.objetivos.nutricional.filter(objetivo => objetivo.id !== action.payload )
                    }
                }


        case AGREGAR_ENCUADRE:
            return {
                ...state,
                encuadre:  action.payload
            }
        case AGREGAR_CONCLUSION:
        return {
            ...state,
            conclusion: action.payload
        }

        default:
            return state;
    }
}