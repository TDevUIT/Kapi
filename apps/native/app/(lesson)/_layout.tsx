import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
const LessonLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="lesson"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="grammar"
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
