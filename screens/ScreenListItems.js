import React from 'react'
import { FlatList, StyleSheet, View, Text } from 'react-native'
import ListItems from '../components/ListItems'
import { Entregas } from '../data/Entregas' 

const ScreenListItems = ({navigation}) => {
    
    const listDirecciones = (item) => {
        navigation.navigate('Detail', {
            entregasID: item.id,
        })
    }
   const renderItemList = ({item}) => <ListItems item={item} onSelected={listDirecciones}/>
    
    return (
        <View style={styles.listItems}>
            <Text style={styles.textList}>Listado de entregas</Text>
                <FlatList
                    data={Entregas}
                    keyExtractor={ item => item.id }
                    renderItem={renderItemList}
                />
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
})

export default ScreenListItems