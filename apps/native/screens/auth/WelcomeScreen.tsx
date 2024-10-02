import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Linking from 'expo-linking';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';

import { SERVER_URL } from '~/config/env';
import { useAuth } from '~/context/AuthContext';
import { checkExists, storeTokens } from '~/utils/store';

const WelcomeScreen = () => {
  const router = useRouter();
  const redirectUri = Linking.createURL('auth/callback');
  const googleAuthUrl = `${SERVER_URL}/auth/google`;
  const { setIsLogged } = useAuth();

  const handleOpenURL = async ({ url }: { url: string }) => {
    const { token, refresh_token } = Linking.parse(url)?.queryParams || {};
    if (token && refresh_token) {
      await storeTokens(token as string, refresh_token as string);
      const exists = await checkExists();
      if (exists) {
        setIsLogged(true);
        router.replace('/');
      }
    } else {
      console.log('Login failed or canceled.');
      const token = await AsyncStorage.getItem('access_token');
      console.log('Access Token:', token);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await WebBrowser.openAuthSessionAsync(googleAuthUrl, redirectUri);
      if (result.type === 'success') {
        handleOpenURL(result);
      } else {
        console.log('Authentication was canceled or failed.');
      }
    } catch (error) {
      console.error('An error occurred during authentication:', error);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-[rgb(241,139,47)] pt-10">
      <StatusBar style="light" translucent />
      <View className="mt-4 flex flex-row items-start justify-between px-5">
        <Text className="text-4xl font-extrabold text-white">Kapi!</Text>
        <View className="flex flex-row gap-x-1">
          <Image
            source={require('../../assets/image/vietnam_flag.png')}
            style={{ width: 24, height: 24 }}
          />
          <Image
            source={require('../../assets/image/japanese_flag.png')}
            style={{ width: 24, height: 24 }}
          />
        </View>
      </View>
      <View className="flex-1 items-center justify-center">
        <Image
          source={require('../../assets/image/Capy.png')}
          className="mt-6 h-[430px] w-[430px] rounded-full object-cover sm:h-64 sm:w-64"
          accessibilityRole="image"
          accessibilityLabel="Capybara Illustration"
        />
        <View className="mt-3 w-full px-5 sm:px-10">
          <TouchableOpacity
            onPress={() => {
              router.push('/(auth)/sign-in');
            }}
            className="mx-auto w-[80%] rounded-lg bg-white py-4 shadow-lg sm:w-3/4 sm:py-5"
            accessibilityRole="button">
            <Text className="text-center text-lg font-bold text-[rgb(241,139,47)]">ĐĂNG NHẬP</Text>
          </TouchableOpacity>
          <View className="my-4 w-full flex-row items-center justify-center">
            <View className="h-0.5 w-1/3 bg-white opacity-50" />
            <Text className="px-3 text-sm text-white">HOẶC</Text>
            <View className="h-0.5 w-1/3 bg-white opacity-50" />
          </View>
          <TouchableOpacity
            onPress={handleGoogleLogin}
            className="mx-auto w-[80%] flex-row items-center justify-center rounded-lg border-2 border-[rgb(241,139,47)] bg-white py-4 shadow-lg"
            accessibilityRole="button">
            <Image
              source={{
                uri: 'https://logos-world.net/wp-content/uploads/2020/09/Google-Symbol.png',
              }}
              style={{ width: 24, height: 24 }}
            />
            <Text className="ml-3 text-lg font-semibold text-[rgb(241,139,47)] sm:text-xl">
              TIẾP TỤC VỚI GOOGLE
            </Text>
          </TouchableOpacity>
        </View>
        <View className="mx-auto mt-6 max-w-[80%]">
          <Text className="text-center text-sm leading-5 text-white">
            Bằng cách đăng ký, bạn đồng ý với{' '}
            <TouchableOpacity>
              <Text className="font-semibold underline">Điều khoản & Điều kiện</Text>
            </TouchableOpacity>{' '}
            và{' '}
            <TouchableOpacity>
              <Text className="font-semibold underline">Chính sách Bảo mật</Text>
            </TouchableOpacity>
          </Text>
          <Text className="mt-4 text-center text-sm text-white">
            Bạn chưa có tài khoản?{' '}
            <TouchableOpacity onPress={() => router.replace('/sign-up')}>
              <Text className="font-bold underline">Đăng Ký</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
