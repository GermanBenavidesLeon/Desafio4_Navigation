import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { ButtonsSucces } from './Buttons'


const ListItems = ({ item, onSelected }) => {
  return (
    <View style={styles.entregas}>
        <View style={styles.listEntregas}>
            <Text style={styles.textItems}>{item.direccion}</Text>
                <ButtonsSucces text='Ver entrega' 
                                onPress={ () => onSelected(item)}
                />
        </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
    entregas: {
        backgroundColor: '#ffeb3b',
        width: 340,
        height: 100,
        marginTop: 20
    },
    listEntregas: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        
    },
    textItems: {
        fontSize: 16,
        fontFamily: 'OpenSansRegular',
        lineHeight: 100
    } 

})

export default ListItems