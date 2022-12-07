import React from 'react';
import { Document, Page, Text, View, Image, StyleSheet, Font } from "@react-pdf/renderer";
import '../../../styles/home.css'
import escudocuria from '../../../images/escudocuria.png';
import GreatVives from '../../../styles/fonts/GreatVibes.ttf'
import OpenSans from '../../../styles/fonts/OpenSans-Bold.ttf'


const ProductoCartaNulidad = (props) => {

  // Register font
  Font.register({ family: 'GreatVives', src: GreatVives });
  Font.register({ family: 'OpenSans', src: OpenSans });

  // Styles register
  const styles = StyleSheet.create({
    baseText: {
      padding: "2px", fontSize: "12px", lineHeight: "2px"
    },
    titleText: {
      fontSize: "25px",
      margin: "auto",
      color: 'gray',
      fontFamily: "GreatVives"
    },
    boldText: {
      fontSize: "12px",
      margin: "auto",
      fontFamily: "OpenSans",
      padding: "2px"
    },
    table1: {
      display: "table",
      width: "100px",
      height: '100px',
      borderStyle: "solid",
      borderWidth: 1,
      borderRightWidth: 1,
      borderBottomWidth: 1,
      borderTopWidth: 1,
      borderLeftWidth: 1,
      position: "absolute",
      right: "50px",
      bottom: "300px"
    },
    table2: {
      display: "table",
      width: "100px",
      height: '100px',
      borderStyle: "solid",
      borderWidth: 1,
      borderRightWidth: 1,
      borderBottomWidth: 1,
      borderTopWidth: 1,
      borderLeftWidth: 1,
      position: "absolute",
      left: "50px",
      bottom: "300px"
    }
  });

  return (
    <>
      <Document >
        <Page size="A4" style={{
          display: "flex",
          padding: "65px",
          textAlign: "justify",

        }}>
          <View id="Post">
            <Image
              src={escudocuria}
              alt="random image"
              style={{ width: "78px", height: "75px", position: "absolute", bottom: "665px" }}
            />
            <Image
              src={props.image}
              alt="random image"
              style={{ width: "78px", height: "78px", position: "absolute", bottom: "665px", right: "1px" }}
            />

            <Text style={styles.titleText}>Diócesis de Alajuela Costa Rica</Text>
            <Text style={styles.titleText}>{props.parroquia}</Text>
            <Text style={{ margin: "auto" }} >_________________________________________</Text>
            <Text style={{ padding: "2px", fontSize: "12px", marginLeft: "auto" }}>{props.lugar}, {props.fecha}</Text>
            <Text style={{ padding: "2px", fontSize: "12px", marginLeft: "auto" }}>{props.codigo}-{props.consecutivo}</Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>                     </Text>

            <Text style={{ padding: "2px", fontSize: "12px" }}>Señor: {props.vicario}</Text>
            <Text style={{ padding: "2px", fontSize: "12px" }}>Vicario Judicial de Primera Instancia</Text>
            <Text style={{ padding: "2px", fontSize: "12px" }}>Tribunal Eclesiástico Provincia de Costa Rica</Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>                     </Text>

            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>Paz y Bien</Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px"}}>Muy estimado Padre, por medio de la presente de manera respetuosa quisiera
              presentarle el caso de Sr. {props.solicitante}, ced: {props.cedSolicitante}, vecino {props.residenciaSolicitante} de {props.parroquiaSolicitante}, quien en días pasados me visitó en la oficina de {props.lugar} con el fin de buscar asesoría
              sobre el proceso de estudio de la posible nulidad matrimonial en su relación sacramental con
              el sr/a. {props.conyugueSolicitante}, céd: {props.cedConyugue}, vecino/a de {props.residenciaConyugue}.</Text>

            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>Estimados, todos los detalles de su caso, considero suficiente el argumento que se ha
              presentado para establecer posibles causales de nulidad matrimonial, en las condiciones que
              evaluará usted con prudencia.</Text>

            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>Por las atenciones a la presente, gracias y encomendando a Dios sus intenciones se
              despide, en Cristo Buen Pastor,</Text>
      
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>                     </Text>
         
            <Text style={{ fontSize: "12px", lineHeight: "1.5px" }}>_____________________________________</Text>
            <Text style={{ fontSize: "12px", lineHeight: "1.5px" }}>Pbro. {props.cura}</Text>
            <Text style={{ fontSize: "12px", lineHeight: "1.5px" }}>Cura Párroco de {props.parroquia}</Text>
            <Text style={{ fontSize: "12px", lineHeight: "1.5px" }}>Diocesis de Alajuela</Text>

            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "1px" }}>                     </Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>                     </Text>

            <Text style={{ fontSize: "12px", marginLeft: "auto", color: 'gray' }} >_____________________________________</Text>
            <Text style={{ marginLeft: "auto", fontSize: "9px", color: 'gray' }}>Tel: {props.tel}</Text>
            <Text style={{ marginLeft: "auto", fontSize: "9px", color: 'gray' }}>Correo electrónico: {props.email}</Text>
            <Text style={{ marginLeft: "auto", fontSize: "9px", color: 'gray' }}>Dirección: {props.web}</Text>
          </View>
        </Page>
      </Document>
    </>
  );
}

export default ProductoCartaNulidad;