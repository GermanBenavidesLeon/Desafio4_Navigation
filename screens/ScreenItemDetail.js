import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import ItemDetail from '../components/ItemDetail'
import { Entregas } from '../data/Entregas' 

const ScreenItemDetail = () => {
   
  const renderVerEntrega = ({item}) => (<ItemDetail item={item} />)

  return (
    <View style={styles.itemDetail}>
        <Text style={styles.textDetail}>Entrega Detalle</Text>
        <View style={styles.ubicacion}>
          <Text style={styles.textUbicacion}>Ubicacion</Text>
        </View>
        <FlatList
          data={Entregas}
          keyExtractor={item => item.id}
          renderItem={renderVerEntrega}
        />
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

export default ScreenItemDetail