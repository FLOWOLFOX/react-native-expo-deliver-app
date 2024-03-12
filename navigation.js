import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Restaurant' component={RestaurantScreen} />
        <Stack.Screen name='Basket' component={BasketScreen}
          options={{
            presentation: 'modal', headerShown: false
          }}
        />
        <Stack.Screen name='PreparingOrder' component={PreparingOrderScreen}
          options={{
            presentation: 'fullScreenModal', headerShown: false
          }}
        />
        <Stack.Screen name='Delivery' component={DeliveryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation