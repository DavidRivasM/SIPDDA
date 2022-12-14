import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from "@react-pdf/renderer";
import '../../../styles/home.css'
import OpenSans from '../../../styles/fonts/OpenSans-Bold.ttf'

const ProductoAutorizacionEspecial = (props) => {

// Register font
Font.register({ family: 'OpenSans', src: OpenSans });


    const styles = StyleSheet.create({
    baseText: {
      padding: "2px", fontSize: "12px", lineHeight:"2px"
    },
    titleText: {
      fontSize: "12px",
      margin: "auto" , 
      fontFamily: "OpenSans"
    }
  });





  return (
    <>
      <Document pdfVersion='1.7'>
        <Page size="A4" style={{
          display: "flex",
          padding: "65px",
          textAlign: "justify",
          
        }}>
          <View id="Post">
          <Text style={{ padding: "2px", fontSize: "12px", lineHeight:"2px"  }}>                     </Text>
          <Text style={{ padding: "2px", fontSize: "12px", lineHeight:"2px"  }}>                     </Text>

            <Text style={{ padding: "2px", fontSize: "12px", marginLeft: "auto"}}>CUDA-AESP-{props.consecutivo}</Text>
            <Text style={ styles.titleText }>    </Text>

            <Text style={ styles.titleText }>AUTORIZACION ESPECIAL</Text>
            <Text style={ styles.titleText }>    </Text>
            
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight:"2px" }}>El suscrito <Text style={styles.titleText}>PBRO. {props.apoderado}</Text>, mayor, soltero, célibe, Sacerdote Católico{props.puesto}, con cédula número: {props.cedApoderado}, como Apoderado Generalísimo sin Límite de Suma de las <Text style={styles.titleText}>TEMPORALIDADES DE LA IGLESIA CATÓLICA DE LA DIÓCESIS DE ALAJUELA</Text>, cédula jurídica número tres-cero diez- cero cuarenta y cinco mil doscientos nueve, segùn consta en los libros de la Sección de Personas del Registro Pùblico, <Text style={styles.titleText}>TOMO:</Text> {props.tomoApoderado};<Text style={styles.titleText}> ASIENTO:</Text> {props.asientoApoderado}; <Text style={styles.titleText}>CONSECUTIVO:</Text> {props.consecutivoApoderado}; <Text style={styles.titleText}>SECUENCIA:</Text> {props.secuenciaApoderado}; OTORGO AUTORIZACIÓN ESPECIAL amplia, suficiente, a favor de: {props.persona}, cédula {props.cedula}, para que en mi nombre y representación proceda a presentarse ante {props.institucion} a realizar el trámite de {props.detalleTramite}, con el fin de {props.finTramite}, a nombre de Temporalidades de la Iglesia Católica de la Diocesis de Alajuela, Parroquia de {props.parroquia} del presente año. 
            </Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight:"2px" }}></Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight:"2px" }}></Text>

            <Text style={{ padding: "2px", fontSize: "12px", lineHeight:"2px" }}></Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight:"2px" }}>Firmo conforme en la ciudad de Alajuela a las {props.hora} horas del {props.fecha} del año {props.ano}.
</Text>

        
            
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight:"2px"  }}>                     </Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight:"2px"  }}>                     </Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight:"2px"  }}>                     </Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight:"2px"  }}>                     </Text>

            <Text style={{ padding: "2px", fontSize: "12px", lineHeight:"2px"  }}>                     </Text>
          

            <Text style={{  fontSize: "12px", marginLeft: "auto"}} ></Text>
            <Text style={{ fontSize: "12px"}}>Pbro. {props.apoderado}</Text>
            <Text style={{  fontSize: "12px"}}>APODERADO GENERALÍSIMO</Text>
            <Text style={{  fontSize: "12px"}}>Temporalidades Iglesia Católica Diócesis de Alajuela</Text>
          </View>
        </Page>
      </Document>
    </>
  );
}

export default ProductoAutorizacionEspecial;