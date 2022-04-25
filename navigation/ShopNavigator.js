import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenHome from '../screens/ScreenHome';
import ScreenListItems from '../screens/ScreenListItems';
import ScreenItemDetail from '../screens/ScreenItemDetail';


const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'
            screenOptions={{
              headerStyle: {
                backgroundColor: '#ffeb3b',
              },
              headerTintColor: 'black',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
        >
            <Stack.Screen name='Home' component={ScreenHome}/>
            <Stack.Screen name='Lista' component={ScreenListItems}/>
            <Stack.Screen name='Detail' component={ScreenItemDetail}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ShopNavigator