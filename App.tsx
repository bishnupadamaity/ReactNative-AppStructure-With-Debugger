import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import 'react-native-devsettings'
import { AppRoutes } from './AppRoutes';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle='dark-content' backgroundColor='white' />
      <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{ headerShown: false, animation: 'default' }} >
        {
          AppRoutes?.map((route, index) => (
            <Stack.Screen key={index} name={route.name} component={route.component} />
          ))
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App