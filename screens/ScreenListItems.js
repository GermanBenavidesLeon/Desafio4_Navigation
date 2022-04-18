import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { ButtonsSucces } from '../components/Buttons'

const ScreenListItems = ({ navigation }) => {
  return (
    <View style={styles.listItems}>
        <Text style={styles.textList}>Listado de entregas</Text>
            <View style={styles.entregas}>
                <View style={styles.listEntregas}>
                    <Text style={styles.textItems}>1. Domicilio: Calle falsa</Text>
                    <ButtonsSucces text='Ver entrega' onPress={ () => {
                        navigation.navigate('Detail')
                    }}/>
                </View>
                <View style={styles.listEntregas}>
                    <Text style={styles.textItems}>2. Domicilio: Calle Falsa</Text>
                    <ButtonsSucces text='Ver entrega' onPress={ () => {
                        navigation.navigate('Detail')
                    }}/>
                </View>
            </View>
    </View>
  )
}

const styles = StyleSheet.create({
    listItems:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 20,
    },
    textList: {
        fontSize: 22,
        fontFamily: 'OpenSansBold'
    },
    entregas: {
        backgroundColor: '#ffeb3b',
        width: 340,
        height: '80%',
        marginVertical: 20,
    },
    listEntregas: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: 10,
    },
    textItems: {
        fontSize: 16,
        fontFamily: 'OpenSansRegular',
        marginRight: 6,
    } 

})
export default ScreenListItems