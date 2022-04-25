import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ButtonsStart } from '../components/Buttons'

const ScreenHome = ({ navigation }) => {
  return (
    <View style={styles.screenHome}>
        <Text style={styles.textHome}>Hola Bienvenidos!</Text>
        <View style={styles.Qrpaquete}>
        </View>
        <ButtonsStart text='QR scanea las entregas' onPress={ () => {
            navigation.navigate('Lista')
        }}/>
    </View>
  )
}

const styles = StyleSheet.create({
    screenHome: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textHome: {
        fontSize: 22,
        fontFamily: 'RobotoCondensedBold',
    },
    Qrpaquete: {
        backgroundColor: 'grey',
        width: 150,
        height: 150,
        marginTop: 20,
        borderRadius: 10,
    }

})

export default ScreenHome