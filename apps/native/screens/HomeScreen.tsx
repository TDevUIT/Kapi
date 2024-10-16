import React from 'react';
import {Text, View, ScrollView } from 'react-native';

import LevelStatus from '~/components/LevelStatus';
import NewLesson from '~/components/NewLesson';
import Point from '~/components/Point';

const HomeScreen = () => {
  
  return (
    <View className="flex-1">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled">
        <View className="p-4">
          <LevelStatus />
        </View>
        <View className="flex-1 p-2">
          <Point />
        </View>
      </ScrollView>
      <View className="h-20 w-full">
        <NewLesson />
      </View>
    </View>
  );
};

export default HomeScreen;
