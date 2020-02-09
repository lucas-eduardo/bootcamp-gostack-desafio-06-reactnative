import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          options={{
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
            headerStyle: { backgroundColor: '#7159c1' },
            headerTintColor: '#fff',
          }}
          component={Main}
        />
        <Stack.Screen
          name="User"
          options={{
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
            headerStyle: { backgroundColor: '#7159c1' },
            headerTintColor: '#fff',
          }}
          component={User}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
