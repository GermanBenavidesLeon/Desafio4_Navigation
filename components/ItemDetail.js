import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { ButtonsCancelar, ButtonsIngresar } from './Buttons'

const ItemDetail = ({ item }) => {
  return (
    <View style={styles.detalle}> 
        <View style={styles.textDetalle}>
            <Text style={styles.textPaquetes}>{item.direccion}</Text>
            <Text style={styles.textPaquetes}>{item.cliente}</Text>
            <Text style={styles.textPaquetes}>{item.vendedor}</Text>
        </View>
        <View style={styles.botones}>
            <ButtonsIngresar text='Entregado' onPress={ () => {
                        alert('Envio Entregado!')}}/>
            <ButtonsCancelar text='No entregado' onPress={ () => {
                        navigation.navigate('Home')
            }}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    detalle: {
        backgroundColor: '#ffeb3b',
        width: 320,
        height: '50%',
        marginVertical: 20,
        padding: 10,
        borderRadius: 10
      },
      textDetalle: {
        marginLeft: 20,
        marginTop: 5
      },
      textPaquetes: {
        fontSize: 18,
        fontFamily: 'OpenSansRegular',
        marginRight: 6,
        marginVertical: 10,
      }, 
      botones: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
      }
  })

export default ItemDetail