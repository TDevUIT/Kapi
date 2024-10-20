import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

import Header from '../../components/Header.tsx';

// Sentence Component
const GrammarSentence = ({ sentence, translation }) => {
  return (
    <View style={tw`mb-4`}>
      <Text style={tw`text-lg font-normal leading-5 py-1`}>{sentence}</Text>
      <Text style={tw`text-sm text-gray-500`}>{translation}</Text>
    </View>
  );
};

// Grammar Section Component
const GrammarSection = ({ title, detail, mean, sentences }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <View style={tw`bg-white px-4 py-2 rounded-lg shadow-md`}>
        <Text style={tw`text-3xl font-extrabold mb-4 text-center pt-8 pb-2`}>{title}</Text>
        <View style={tw`mb-4`}>
          <View
            style={tw`bg-[#f1aa6a] p-4 rounded-xl shadow-lg flex-row justify-center items-center`}
            onPress={() => setExpanded(!expanded)}>
            <Text style={tw`text-xl justify-center font-extrabold p-2`}>{detail}</Text>
          </View>
        </View>
        <View style={tw`px-3`}>
          <View>
            <Text style={tw`text-lg font-bold mb-4 pt-4`}>{mean}</Text>
          </View>
          <View style={tw`mb-4 py-2`}>
            {sentences.map((item, index) => (
              <GrammarSentence
                key={index}
                sentence={item.sentence}
                translation={item.translation}
              />
            ))}
          </View>
        </View>
      </View>
    </>
  );
};

const GrammarScreen = () => {
  const grammarData = [
    {
      title: 'ことにしている',
      detail: 'Vる・Vない + ことにしている',
      mean: `Thói quen do mình tự quyết định (Cố gắng.../Nỗ lực...)`,
      sentences: [
        {
          sentence: '健康のため、毎日牛乳を飲むことにしている。',
          translation: 'Vì sức khỏe, mỗi ngày tôi đều cố gắng uống sữa.',
        },
        {
          sentence: '田中さんは、帰りが遅くなるときは、必ずメールすることにしているそうだ。',
          translation: 'Nghe nói là Tanaka mỗi khi về trễ đều cố gắng nhắn tin.',
        },
        {
          sentence: '若いころはオリンピックに出るのが夢で、毎日8時間練習することにしていた。',
          translation:
            'Khi còn trẻ tham dự Olympic là giấc mơ của tôi, tôi đã cố gắng luyện tập 8 tiếng một ngày.',
        },
        {
          sentence:
            '休日は家で仕事をしないことにしているのに、今週はどうしても金曜日に終わらせることができず、持って帰ってきた。',
          translation:
            'Mặc dù tôi cố gắng ngày nghỉ không làm việc ở nhà, nhưng tuần này dù thế nào cũng không thể hoàn thành công việc vào thứ sáu nên tôi đã mang về nhà.',
        },
      ],
    },
  ];

  return (
    <View style={tw`flex-1`}>
      <Header />
      <ScrollView style={tw`p-4`} contentContainerStyle={{ paddingBottom: 20 }}>
        {grammarData.map((section, index) => (
          <>
            <GrammarSection
              key={index}
              title={section.title}
              detail={section.detail}
              mean={section.mean}
              sentences={section.sentences}
            />
          </>
        ))}
      </ScrollView>
    </View>
  );
};

export default GrammarScreen;
