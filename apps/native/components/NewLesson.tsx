import React from 'react';
import { Image, Text, View } from 'react-native';

import { icons } from '~/utils/icon';

const NewLesson = () => {
  return (
    <View className="h-24 w-full flex-1 items-start justify-center bg-[#f28b2f] p-3 shadow-md">
      <View className="flex-row items-center gap-4">
        <Image className="h-10 w-10" resizeMode="cover" source={icons.psychiatry} />
        <View className="w-40 gap-2">
          <Text className="text-lg font-bold text-white">Học từ vựng mới</Text>
          <Text className="text-base font-medium text-white opacity-80">Bài 5: Đi và về</Text>
        </View>
      </View>
    </View>
  );
};

export default NewLesson;
