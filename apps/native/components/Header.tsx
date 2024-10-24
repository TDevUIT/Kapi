import * as React from 'react';
import { SafeAreaView, View, Image } from 'react-native';

import { useAuth } from '~/context/AuthContext';
import { images } from '~/utils/icon';

const Header = () => {
  const { profile } = useAuth();
  return (
    <SafeAreaView className="relative h-24 w-full bg-[#f28b2f]">
      <View className="relative h-full w-full">
        <View className="absolute left-0 top-[2px] h-[30px] w-full bg-[#f1aa6a]" />
        <View className="absolute left-1/2 top-1/2 h-8 w-[390px] -translate-x-1/2 transform flex-row items-center justify-between">
          <View className="flex w-full flex-row items-center justify-between gap-x-4">
            <View />
            <View className="flex-row items-center justify-between gap-x-4">
              <Image source={images.local_fire} className="h-10 w-10 text-black" />
              <Image source={images.circle_notifications} className="h-10 w-10" />
              <Image source={images.account_circle} className="h-10 w-10" />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
