import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import tw from 'twrnc';
import Header from '../../components/Header.tsx';

const JLPTLesson = ({ lesson }) => {
  return (
    <View style={tw`flex-row justify-between items-center mb-2 px-5 py-1`}>
      <Text style={tw`text-sm font-semibold text-[rgb(241,139,47)]`}>{lesson}</Text>
      <MaterialIcons name="check-circle" size={20} color="orange" />
    </View>
  );
};

const JLPTSection = ({ title, levels }) => {
  const [expanded, setExpanded] = useState(false);
  const [expandedItems, setExpandedItems] = useState({}); // Lưu trạng thái mở/đóng cho từng mục

  const toggleItem = (index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index], // Đảo ngược trạng thái mở/đóng cho mục được bấm
    }));
  };

  return (
    <View style={tw`mb-4`}>
      <TouchableOpacity
        style={tw`bg-white p-4 rounded-lg shadow-md flex-row justify-between items-center`}
        onPress={() => setExpanded(!expanded)}>
        <View style={tw`flex-row items-center`}>
          <FontAwesome name="star" size={24} color="rgb(241,139,47)" />
          <Text style={tw`ml-2 text-lg font-bold text-[rgb(241,139,47)]`}>{title}</Text>
        </View>
        <MaterialIcons
          name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
          size={24}
          color="rgb(241,139,47)"
        />
      </TouchableOpacity>
      {expanded && (
        <View style={tw`bg-white px-8 py-2`}>
          {levels && levels.length > 0 ? (
            levels.map((item, index) => (
              <View key={index}>
                <TouchableOpacity
                  style={tw`flex-row justify-between items-center`}
                  onPress={() => toggleItem(index)}>
                  <Text style={tw`font-semibold text-lg py-2 text-[rgb(241,139,47)]`}>
                    {`Cấp độ ${item.level}: ${item.name}`}
                  </Text>
                  <MaterialIcons name="check-circle" size={20} color="orange" />
                </TouchableOpacity>
                {expandedItems[index] && ( // Chỉ hiển thị bài học khi mục được mở
                  <View>
                    {item.lesson.map((lesson, lessonIndex) => (
                      <JLPTLesson key={lessonIndex} lesson={lesson} />
                    ))}
                  </View>
                )}
              </View>
            ))
          ) : (
            <Text style={tw`text-sm text-gray-500`}>Không có thông tin nào.</Text>
          )}
        </View>
      )}
    </View>
  );
};

const JLPTScreen = () => {
  const jlptData = {
    'JLPT N5': [],
    'JLPT N4': [],
    'JLPT N3': [
      {
        level: 1,
        name: 'Ôn tập N4',
        lesson: ['Từ vựng 1', 'Ngữ pháp 1', 'Hán tự 1', 'Từ vựng 2', 'Ngữ pháp 2', 'Hán tự 2'],
      },
      {
        level: 2,
        name: 'Chunbi',
        lesson: ['Từ vựng 1', 'Ngữ pháp 1', 'Hán tự 1', 'Từ vựng 2', 'Ngữ pháp 2', 'Hán tự 2'],
      },
      {
        level: 3,
        name: 'Taisaku',
        lesson: ['Danh từ 1', 'Tính từ', 'Nghe hiểu 1', 'Hán tự 1'],
      },
      {
        level: 4,
        name: 'Luyện đề',
        lesson: ['Đề 1', 'Đề 2', 'Đề 3', 'Đề 4'],
      },
    ],
    'JLPT N2': [],
    'JLPT N1': [],
  };

  return (
    <View style={tw`flex-3`}>
      <Header />
      <ScrollView style={tw`p-4 pt-10`}>
        {Object.keys(jlptData).map((jlptLevel) => (
          <JLPTSection key={jlptLevel} title={jlptLevel} levels={jlptData[jlptLevel]} />
        ))}
      </ScrollView>
    </View>
  );
};

export default JLPTScreen;
