import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainMenu from './MainMenu';
import Wizard from './Wizard';
import Summary from './Summary';
import ProfileStyles from './ProfileStyles';
import DeceptionCues from './DeceptionCues';
import MentorScreen from './MentorScreen';
import ClothingAnalysis from './ClothingAnalysis'; // חדש

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainMenu" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainMenu" component={MainMenu} />
        <Stack.Screen name="Wizard" component={Wizard} />
        <Stack.Screen name="Summary" component={Summary} />
        <Stack.Screen name="ProfileStyles" component={ProfileStyles} />
        <Stack.Screen name="DeceptionCues" component={DeceptionCues} />
        <Stack.Screen name="Mentor" component={MentorScreen} />
        <Stack.Screen name="ClothingAnalysis" component={ClothingAnalysis} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
