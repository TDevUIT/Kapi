import React, { useState } from 'react';
import { Text, View, Pressable } from 'react-native';

type FilterState = {
  category: string;
  VocabID: string;
  Color: string;
};

const ClassifyButton: React.FC = () => {
  const [expanded, setExpanded] = useState<FilterState>({
    category: '',
    VocabID: '',
    Color: '',
  });

  const Classify: React.FC<{
    category: string;
    VocabID: string;
    Color: string;
  }> = ({ category, VocabID, Color }) => {
    return (
      <Pressable
        onPress={() => setExpanded({ category, VocabID, Color })}
        style={{ backgroundColor: Color }}
        className="p-2 rounded m-1 w-1/3 items-center justify-center flex-1"
      >
        <Text className="text-white">{category}</Text>
      </Pressable>
    );
  };

  return (
    <View className="flex-row w-full bg-white p-4 mb-16">
      <Classify category="Easy" VocabID="123" Color="#60D433" />
      <Classify category="Simple" VocabID="456" Color="#F1AA6A" />
      <Classify category="Hard" VocabID="789" Color="#F96565" />
    </View>
  );
};

export default ClassifyButton;