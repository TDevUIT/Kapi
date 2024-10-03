import React, { useEffect, useState } from 'react';
import { View, Animated, Image } from 'react-native';

import { images } from '~/utils/icon';

const Loading = () => {
  const [width] = useState(new Animated.Value(0));
  const [bounceValue] = useState(new Animated.Value(1));

  useEffect(() => {
    const chunkedAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(width, {
          toValue: 100,
          duration: 1200,
          useNativeDriver: false,
        }),
        Animated.timing(width, {
          toValue: 150,
          duration: 1200,
          useNativeDriver: false,
        }),
        Animated.timing(width, {
          toValue: 200,
          duration: 1200,
          useNativeDriver: false,
        }),
        Animated.timing(width, {
          toValue: 275,
          duration: 1200,
          useNativeDriver: false,
        }),
        Animated.timing(width, {
          toValue: 0,
          duration: 0,
          useNativeDriver: false,
        }),
      ])
    );
    const bounceAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(bounceValue, {
          toValue: 1.2,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(bounceValue, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    );

    chunkedAnimation.start();

    bounceAnimation.start();

    return () => {
      chunkedAnimation.stop();
      bounceAnimation.stop();
    };
  }, [width, bounceValue]);

  return (
    <View className="flex-1 items-center justify-center">
      <Animated.Image
        source={images.capy}
        className="h-[350px] w-[250px]"
        style={{
          transform: [{ scale: bounceValue }],
        }}
      />
      <View className="w-[275px] space-y-3">
        <Animated.View className="h-5 rounded-lg bg-[#f28b2f]" style={{ width }} />
      </View>
    </View>
  );
};

export default Loading;
