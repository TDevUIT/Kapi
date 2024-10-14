import { FontAwesome } from '@expo/vector-icons';
import * as React from 'react';
import { Text, View, Pressable } from 'react-native';

const LevelStatus = () => {
  const currentProgress = 35;
  const maxProgress = 100;
  const progressPercentage = (currentProgress / maxProgress) * 100;

  return (
    <Pressable className="relative flex h-[125px] w-full flex-1 items-center justify-center rounded-xl bg-white shadow-lg">
      <View className="mb-4 w-[90%] flex-row items-center justify-between">
        <Text className="font-montserrat-semiBold text-left text-[24px] font-semibold text-black">
          JLPT N5 - CẤP ĐỘ 1
        </Text>
        <FontAwesome name="arrow-right" size={24} color="black" />
      </View>

      <View className="relative w-[90%]">
        <View className="h-[8px] rounded-full bg-gray-300">
          <View
            style={{ width: `${progressPercentage}%` }}
            className="h-full rounded-full bg-green-500"
          />
        </View>

        <View className="absolute left-0 right-0 top-[10px] mt-1 flex-row justify-between">
          <Text className="text-[14px] font-medium text-black">Tới cấp độ 2</Text>
          <Text className="text-[16px] font-medium text-black">{`${currentProgress}/${maxProgress}`}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default LevelStatus;
