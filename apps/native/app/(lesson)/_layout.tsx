import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar, Tab } from 'expo-status-bar';
import React from 'react';

const LessonLayout = () => {
  const Tab = createBottomTabNavigator();
  return (
    <>
      <Stack>
        <Stack.Screen
          name="lesson"
          options={{
            headerShown: false,
          }}
        />
      </Stack>

      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default LessonLayout;
