import React from 'react';
import { Image, Text, View } from 'react-native';
import { icons } from '~/utils/icon'; 
import { Ionicons } from '@expo/vector-icons';
interface CardProps {
  vocab: string;
  meaning: string;
  example: string;
}

const Card: React.FC<CardProps> = ({ vocab, meaning, example }) => {
  return (
    <View className="p-4 bg-white rounded-lg shadow-lg w-full h-5/6 justify-center">
      <View className="flex-row items-center mb-4">
        <Text className="text-2xl font-bold">  <Ionicons name="document-text" color="black" size={15} /> {vocab}</Text>
      </View>
      <Text className="text-lg mb-2">{meaning}</Text>
      <Text className="text-sm text-gray-600">{example}</Text>
    </View>
  );
};

export default Card;