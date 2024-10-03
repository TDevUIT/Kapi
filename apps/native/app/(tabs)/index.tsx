import { Tabs } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

import { useAuth } from '~/context/AuthContext';

const Home = () => {
  const { profile } = useAuth();
  return (
    // return HomeScreen Component
    <View>
      <Text className="text-center text-2xl font-medium">Hello, {profile?.name}</Text>
      <Text className="mt-4 text-center text-4xl font-bold">{profile?.email}</Text>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
