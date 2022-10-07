import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./Home";
import UserDetails from './UserDetails';




const ROUTES = [
    {
        name: 'Home',
        component: HomeScreen,
        options: { title: 'User Details Form' }
    },
    {
        name: 'UserDetails',
        component: UserDetails
    }
]

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return <NavigationContainer>
            <Stack.Navigator>
                {
                    ROUTES.map((route) => {
                        return <Stack.Screen 
                            name={route.name}
                            component={route.component}
                            options={route?.options || {}}
                        />
                    })
                }
            </Stack.Navigator>
      </NavigationContainer>;
}

export default Navigator;
