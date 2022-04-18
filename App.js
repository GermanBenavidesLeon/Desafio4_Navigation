import React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import ShopNavigator from './navigation/ShopNavigator';


export default function App() {
  const [loaded] = useFonts({
    RobotoCondensed: require('./assets/fonts/RobotoCondensed-Regular.ttf'),
    RobotoCondensedBold: require('./assets/fonts/RobotoCondensed-Bold.ttf'),
    OpenSansBold: require('./assets/fonts/OpenSans-Bold.ttf'),
    OpenSansRegular: require('./assets/fonts/OpenSans-Regular.ttf')
  })

  if(!loaded) return <AppLoading/>

  return (
    <ShopNavigator/>
  );
}
