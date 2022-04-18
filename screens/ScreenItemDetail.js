import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ButtonsCancelar, ButtonsIngresar } from '../components/Buttons'

const ScreenItemDetail = ({ navigation }) => {
  return (
    <View style={styles.itemDetail}>
        <Text style={styles.textDetail}>Entrega Detalle</Text>
        <View style={styles.ubicacion}>
          <Text style={styles.textUbicacion}>Ubicacion</Text>
        </View>
        <View style={styles.detalle}> 
          <View>
            <Text style={styles.textPaquetes}>Direccion: calle falsa</Text>
            <Text style={styles.textPaquetes}>Usuario: John Doe</Text>
          </View>
          <View style={styles.botones}>
            <ButtonsIngresar text='Entregado' onPress={ () => {
                        alert('Envio Entregado!')}}/>
            <ButtonsCancelar text='No entregado' onPress={ () => {
                        navigation.navigate('Home')
                    }}/>
          </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    itemDetail: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 20,
    },
    textDetail: {
      fontSize: 22,
      fontFamily: 'OpenSansBold'
    },
    ubicacion: {
        backgroundColor: 'grey',
        width: 150,
        height: 150,
        marginVertical: 20,
    },
    textUbicacion: {
        textAlign: 'center',
        lineHeight: 150,
    },
    detalle: {
      backgroundColor: '#ffeb3b',
      width: 300,
      height: '50%',
      marginVertical: 20,
      padding: 10,
    },
    textPaquetes: {
      fontSize: 18,
      fontFamily: 'OpenSansRegular',
      marginRight: 6,
      marginVertical: 10,
    }, 
    botones: {
      flexDirection: 'row',
      marginTop: 40,
    }
})

export default ScreenItemDetail