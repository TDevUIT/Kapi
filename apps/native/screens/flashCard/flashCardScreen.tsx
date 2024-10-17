import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import ModalComponent from 'react-native-modal';
import Card from '~/components/Card';

const FlashCardScreen = () => {
  const [showFirstModal, setShowFirstModal] = useState(false);

  return (
    <View className="flex-1 items-center justify-center bg-gray-100 p-4">
      <TouchableOpacity
        onPress={() => setShowFirstModal(true)}
        className="w-full h-full"
      >
        <Card vocab="Vocabulary Word" meaning="..." example="..." />
      </TouchableOpacity>

      <ModalComponent
        isVisible={showFirstModal}
        onBackdropPress={() => setShowFirstModal(false)}
        onBackButtonPress={() => setShowFirstModal(false)}
        swipeDirection={['left', 'right']} // Vuốt cả hai hướng để điều khiển modal
        onSwipeComplete={() => setShowFirstModal(false)} // Đóng khi vuốt
        animationIn="slideInLeft"
        animationOut="slideOutRight"
        animationInTiming={800}
        animationOutTiming={800}
        backdropTransitionInTiming={800}
        backdropTransitionOutTiming={800}
        backdropOpacity={0.0}
      >
        <TouchableOpacity
          className="w-full h-5/6 items-center justify-center rounded-lg bg-white p-4 shadow-lg"
          onPress={() => setShowFirstModal(false)}
        >
          <Card
            vocab="Vocabulary Word"
            meaning="Example Meaning"
            example="Example sentence using the vocabulary word."
          />
        </TouchableOpacity>
      </ModalComponent>
    </View>
  );
};

export default FlashCardScreen;
