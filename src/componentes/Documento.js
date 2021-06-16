import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, PDFDownloadLink  } from '@react-pdf/renderer';
import image from './logo192.png'
import Alumno from './Alumnos'

// Create styles
const styles = StyleSheet.create({
    posicion: {
        position:'relative',
        flexDirection: 'row',
        marginBottom: '10px'
    },
  page: {
    flexDirection: 'column ',
    backgroundColor: '#E4E4E4',
    paddingBottom:'25px',
    paddingTop:'25px',
    paddingLeft: '40px',
    paddingRight: '20px'
  },

  borderFecha: {
        border: '2px solid orange',
        flexDirection: 'row',
        backgroundColor: "white"
  },
  section: {
    width:"70%"
  },
  section2: {
    width:"30%"
  },
  title: {
      textAlign: 'center',
      fontSize:'42px',
      marginBottom:'10px',
      marginTop:'40px'
  },
  img: {
      width: '100px',
      height: '100px',
      position: 'absolute'
  },
  p:{
      fontSize:'12px',
  },
  datosporsonal: {
      fontSize: '12px',
      paddingTop: '10px'
  }, 
});


// Create Document Component
const MyDocument = ({
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
}) => (
    <>
  <Document >
    
    <Page size="A4" style={styles.page}>
        
        <View>
            <Image src={image} style={styles.img}></Image>
            <Text style={styles.title}>Titulo de PDF</Text>
        </View>
        <View style={styles.borderFecha} >
            <Text style={styles.section2}>Fecha: {fecha}</Text>
            <Text style={styles.section}>Periodo: {'01/01/2021 al 25/06/2021'}</Text>
        </View>
        <View style=  {{border: '2px solid orange', backgroundColor: 'white', padding: '10px'}}>
            <Text>Motivo: {motivo}</Text>
        </View>
        <View style={styles.borderFecha}>
            <View style={styles.section}>
                <Text >Datos Personales</Text>
                <Text style={styles.datosporsonal}>Nombre y apellido: {Alumno.nombre + Alumno.apellido}</Text>
                <Text style={styles.datosporsonal}>Domicilio: {Alumno.domicilio}</Text>
                <Text style={styles.datosporsonal}>DNI: {Alumno.DNI}</Text>
                <Text style={styles.datosporsonal}>Fecha de nacimiento: {Alumno.fechaDeNacimiento}</Text>
                <Text style={styles.datosporsonal}>Diagnóstico: {Alumno.diagnostico}</Text>
                <Text style={styles.datosporsonal}>Vencimiento CUD: {'03/12/2024'}</Text>
                <Text style={styles.datosporsonal}>Obra Social: {Alumno.mutualeIdMutual}</Text>
                <Text style={styles.datosporsonal}>Num. Afiliado: {Alumno.nroAfiliado}</Text>
                <Text style={styles.datosporsonal}>Sede Prestacional: {'Saenz Peña'}</Text>
            </View>
            <View style={styles.section2}>
                <Text>Foto</Text>
                <Image src={image} style={{width:"140px", height:"240px"}}></Image>
            </View>
        </View>
        <View style=  {{border: '2px solid orange', backgroundColor: 'white', padding: '10px'}}>
            <Text>Contenido</Text>
            <View>
                <Text>Antecedentes</Text>
                <Text style={styles.p}>{antecedentes}</Text>
            </View>
            <Text>Evaluación</Text>
            {contenido.cognitiva?
                <View>
                    <Text >AREA COGNITIVA: </Text>
                    <Text style={styles.p}>{contenido.cognitiva}</Text>
                </View>
            :null
            }
          
            {contenido.comunicacion?
                <View>
                <Text >ÁREA LENGUAJE- COMUNICACIÓN: </Text>
                <Text style={styles.p}>contenido.comunicacion</Text>
            </View>
            :null}
            {contenido.motora?
            <View>
                <Text >ÁREA MOTORA: </Text>
                <Text style={styles.p}>contenido.motora</Text>
            </View>
            :null}
                        {contenido.socia?
                <View>
                    <Text >ÁREA SOCIO-AFECTIVA: </Text>
                    <Text style={styles.p}>{contenido.socia}</Text>
                </View>
            :null
            }
          
            {contenido.medica?
                <View>
                <Text >ÁREA MÉDICA: </Text>
                <Text style={styles.p}>contenido.medica</Text>
            </View>
            :null}
            {contenido.nutricional?
            <View>
                <Text >ÁREA NUTRICIONAL: </Text>
                <Text style={styles.p}>contenido.nutricional</Text>
            </View>
            :null}
        </View>

        <View style=  {{border: '2px solid orange', backgroundColor: 'white', padding: '10px'}}>
            <Text>Tratamiento</Text>
            {objetivos.cognitiva.length === 0 && actividades.cognitiva.length === 0?null:
            <Text >AREA COGNITIVA: </Text>}
            {objetivos.cognitiva.length === 0?null:
                <View>
                    <Text >Objetivos</Text>
                    {objetivos.cognitiva.map(elemento => <Text key={elemento.id} style={styles.p}>{elemento.valor}</Text>)}
                </View>
            }
            {actividades.cognitiva.length === 0?null:
                <View>
                    <Text >Actividades</Text>
                    {actividades.cognitiva.map(elemento => <Text key={elemento.id} style={styles.p}>{elemento.valor}</Text>)}
                </View>
            }

                {/* Area de lenguaje */}
            {objetivos.comunicacion && actividades.comunicacion.length === 0?null:
            <Text >ÁREA LENGUAJE- COMUNICACIÓN: </Text>}
            {objetivos.comunicacion.length === 0?null:
            <View>
                <Text >Objetivos</Text>
                {objetivos.comunicacion.map(elemento => <Text key={elemento.id} style={styles.p}>{elemento.valor}</Text>)}
            </View>}
            {actividades.comunicacion.length === 0?null:
            <View>
                <Text >Actividades</Text>
                {actividades.comunicacion.map(elemento => <Text key={elemento.id} style={styles.p}>{elemento.valor}</Text>)}
            </View>}


                     {/* Area de motora */}
           {objetivos.motora.length === 0 && actividades.motora.length === 0?null:
            <Text >ÁREA MOTORA: </Text>}
            {objetivos.motora.length === 0?null:
            <View>
                <Text >Objetivos</Text>
                {objetivos.motora.map(elemento => <Text key={elemento.id} style={styles.p}>{elemento.valor}</Text>)}
            </View>}
            {actividades.motora.length === 0?null:
            <View>
                <Text >Actividades</Text>
                {actividades.motora.map(elemento => <Text key={elemento.id} style={styles.p}>{elemento.valor}</Text>)}
            </View>}

                     {/* Area de socia */}
            {objetivos.socia.length === 0 && actividades.socia.length === 0?null:
            <Text >ÁREA SOCIO-AFECTIVA: </Text>}
            {objetivos.socia.length === 0?null:
                <View>
                    <Text >Objetivos</Text>
                    {objetivos.socia.map(elemento => <Text key={elemento.id} style={styles.p}>{elemento.valor}</Text>)}
                </View>
            }
             {actividades.socia.length === 0?null:
                <View>
                    <Text >Actividades</Text>
                    {actividades.socia.map(elemento => <Text key={elemento.id} style={styles.p}>{elemento.valor}</Text>)}
                </View>
            }
          
                   {/* Area de medica */}
            {objetivos.medica.length === 0 && actividades.medica.length === 0?null:
            <Text >ÁREA MÉDICA: </Text>}
            {objetivos.medica.length === 0?null:
                <View>
                <Text >Objetivos</Text>
                {objetivos.medica.map(elemento => <Text key={elemento.id} style={styles.p}>{elemento.valor}</Text>)}
            </View>}
            {actividades.medica?.length === 0?null:
                <View>
                <Text >Actividades</Text>
                {actividades.medica.map(elemento => <Text key={elemento.id} style={styles.p}>{elemento.valor}</Text>)}
            </View>}

                     {/* Area de nutricional */}
            {objetivos.nutricional.length === 0 && actividades.nutricional.length === 0? null:
            <Text >ÁREA NUTRICIONAL:  </Text>}
            {objetivos.nutricional.length === 0?null:
            <View>
                <Text >Objetivos</Text>
                {objetivos.nutricional.map(elemento => <Text key={elemento.id} style={styles.p}>{elemento.valor}</Text>)}
            </View>
            }
            {actividades.nutricional.length === 0?null:
            <View>
                <Text >Actividades</Text>
                {actividades.nutricional.map(elemento => <Text key={elemento.id} style={styles.p}>{elemento.valor}</Text>)}
            </View>
            }
        </View>
        <View style=  {{border: '2px solid orange', backgroundColor: 'white', padding: '10px'}}>
            <Text>Encuadre Prestacional</Text>
            <View>
                <Text style={styles.p}>{encuadre}</Text>
                <Text style={styles.p}>Prestación:</Text>
                <Text style={styles.p}>Modalidad:</Text>
                <Text style={styles.p}>Frecuencia de atención: </Text>
            </View>
        </View>
        <View style=  {{border: '2px solid orange', backgroundColor: 'white', padding: '10px'}}>
            <Text>Conclusión</Text>
            <View>
                <Text style={styles.p}>{conclusion}</Text>
            </View>
        </View>
        {/* Firmas */}
        <View style=  {{border: '2px solid orange', backgroundColor: 'white', padding: '10px'}}>
            <Text>Firma Profesional/es Interviniente/s</Text>
            <View>
                <Text style={styles.p}>Directora: </Text>
                <Text style={styles.p}>Psicóloga: </Text>
                <Text style={styles.p}>Asistente Social: </Text>
                <Text style={styles.p}>Kinesiólogo: </Text>
                <Text style={styles.p}>Docente: </Text>
            </View>
        </View>
    </Page>
  </Document>
  </>
);

export default MyDocument