import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './pages/Main';
import Book from './pages/Book';

const Stack = createStackNavigator();

const Routes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name = 'Main' component ={Main} />
            <Stack.Screen name = 'Book' component = {Book}  />
        </Stack.Navigator>
    );

}

export default Routes;
