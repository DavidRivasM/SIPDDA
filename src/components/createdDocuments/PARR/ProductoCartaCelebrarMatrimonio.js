import React from 'react';
import { Document, Page, Text, View, Image, StyleSheet, Font } from "@react-pdf/renderer";
import '../../../styles/home.css'
import escudocuria from '../../../images/escudocuria.png';
import GreatVives from '../../../styles/fonts/GreatVibes.ttf'
import OpenSans from '../../../styles/fonts/OpenSans-Bold.ttf'


const ProductoCartaCelebrarMatrimonio = (props) => {

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
              style={{ width: "78px", height: "78px", position: "absolute", bottom: "610px" }}
            />
            <Image
              src={props.image}
              alt="random image"
              style={{ width: "78px", height: "78px", position: "absolute", bottom: "610px", right: "1px" }}
            />

            <Text style={styles.titleText}>Di??cesis de Alajuela Costa Rica</Text>
            <Text style={styles.titleText}>{props.parroquia}</Text>
            <Text style={{ margin: "auto" }} >_________________________________________</Text>

            <Text style={{ padding: "2px", fontSize: "12px", marginLeft: "auto" }}>{props.lugar}, {props.fecha}</Text>
            <Text style={{ padding: "2px", fontSize: "12px", marginLeft: "auto" }}>{props.codigo}-{props.consecutivo}</Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>                     </Text>

            <Text style={{ padding: "2px", fontSize: "12px" }}>Pbro. {props.destinatario}</Text>
            <Text style={{ padding: "2px", fontSize: "12px" }}>Cura Parroco</Text>
            <Text style={{ padding: "2px", fontSize: "12px" }}>{props.lugarTrabajoDestinatario}</Text>
            <Text style={{ padding: "2px", fontSize: "12px" }}>Estimado presb??tero,</Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "1px" }}>                     </Text>

            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>Por medio de las presentes, el suscrito {props.cura} de la Di??cesis de Alajuela, c??d. {props.cedCura}, residente {props.residenciaCura}, solicita respetuosamente la respectiva delegaci??n de su parte a tenor del cn. 1111 con el fin de presenciar el matrimonio de {props.esposo} ced. {props.cedEsposo} y {props.esposa} ced. {props.cedEsposa}, fijado para el {props.fechaMatrimonio} en la iglesia de la diacon??a de {props.lugarMatrimonio}.</Text>

            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>Por las atenciones a la presente, gracias y encomendado a Dios sus intenciones se despide, en Cristo Buen Pastor,</Text>


           

            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>      </Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>      </Text>

            <Text style={{ fontSize: "12px", lineHeight: "1.5px" }}>_______________________________</Text>
            <Text style={{ fontSize: "12px", lineHeight: "1.5px" }}>Pbro. {props.cura}</Text>
            <Text style={{ fontSize: "12px", lineHeight: "1.5px" }}>Cura P??rroco de {props.parroquia}</Text>
            <Text style={{ fontSize: "12px", lineHeight: "1.5px" }}>Diocesis de Alajuela</Text>

            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>                     </Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>                     </Text>
            <Text style={{ padding: "2px", fontSize: "12px", lineHeight: "2px" }}>                     </Text>


            <Text style={{ fontSize: "12px", marginLeft: "auto", color: 'gray' }} >_____________________________________</Text>
            <Text style={{ marginLeft: "auto", fontSize: "9px", color: 'gray' }}>Tel: {props.tel}</Text>
            <Text style={{ marginLeft: "auto", fontSize: "9px", color: 'gray' }}>Correo electr??nico: {props.email}</Text>
            <Text style={{ marginLeft: "auto", fontSize: "9px", color: 'gray' }}>Direcci??n: {props.web}</Text>
          </View>
        </Page>
      </Document>
    </>
  );
}

export default ProductoCartaCelebrarMatrimonio;