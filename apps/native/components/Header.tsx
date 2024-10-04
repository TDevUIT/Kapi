import { Ionicons, FontAwesome } from '@expo/vector-icons';
import * as React from 'react';
import { SafeAreaView, View } from 'react-native';

const Header = () => {
  return (
    <SafeAreaView className="relative h-32 w-full bg-[#f1aa6a]">
      <View className="relative h-full w-full">
        <View className="absolute left-0 top-0 h-14 w-full bg-[#f28b2f]" />
        <View className="absolute left-1/2 top-1/4 h-8 w-[390px] -translate-x-1/2 transform flex-row items-center justify-between">
          <View className="flex w-full flex-row items-center justify-end gap-x-4">
            <Ionicons name="notifications-outline" size={30} color="#000" />
            <FontAwesome name="fire" size={30} color="#000" />
            <FontAwesome name="user" size={30} color="#000" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
