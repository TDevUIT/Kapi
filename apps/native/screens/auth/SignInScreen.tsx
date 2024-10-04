import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  ScrollView,
} from 'react-native';

import { useAuth } from '~/context/AuthContext';
import axiosInstance from '~/helper/axios';
import { checkExists, storeTokens } from '~/utils/store';

const SignInScreen: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { fetchProfile } = useAuth();

  const handleSignIn = async () => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.post('/auth/sign-in', {
        email,
        password,
      });
      if (response.data) {
        const { access_token, refresh_token } = response.data.data;
        await storeTokens(access_token, refresh_token);
        await fetchProfile();
        router.replace('/');
      }
    } catch (error) {
      setError('Đăng nhập thất bại, vui lòng kiểm tra lại.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 p-6 pt-[30%]" style={{ backgroundColor: 'white' }}>
          <View className="absolute left-4 top-12">
            <TouchableOpacity
              onPress={() => router.push('/(auth)/welcome')}
              className="flex-row items-center">
              <FontAwesome name="arrow-left" size={24} color="rgb(241,139,47)" />
            </TouchableOpacity>
          </View>

          <View className="flex-row items-center">
            <Text className="text-3xl font-bold text-black">Xin chào</Text>
            <MaterialIcons
              name="emoji-people"
              size={30}
              color="rgb(241,139,47)"
              style={{ marginLeft: 8 }}
            />
          </View>

          <Text className="mb-6 text-lg text-black">
            Rất vui khi gặp lại bạn! Chúc bạn có một trải nghiệm tuyệt vời.
          </Text>

          <Text className="mb-2 text-lg text-black">Email</Text>
          <View className="mb-4 flex-row items-center rounded-lg bg-gray-100 p-4 shadow-lg">
            <MaterialIcons name="email" size={20} color="rgb(241,139,47)" />
            <TextInput
              className="ml-2 flex-1 text-lg"
              placeholder="Nhập email của bạn"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <Text className="mb-2 text-lg text-black">Mật khẩu</Text>
          <View className="mb-4 flex-row items-center rounded-lg bg-gray-100 p-4 shadow-lg">
            <MaterialIcons name="lock" size={20} color="rgb(241,139,47)" />
            <TextInput
              className="ml-2 flex-1 text-lg"
              placeholder="Nhập mật khẩu của bạn"
              secureTextEntry={!isPasswordVisible}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
              <MaterialIcons
                name={isPasswordVisible ? 'visibility' : 'visibility-off'}
                size={20}
                color="gray"
              />
            </TouchableOpacity>
          </View>

          <View className="mb-6 flex-row justify-between">
            <Text className="text-black underline" onPress={() => console.log('Quên mật khẩu')}>
              Quên mật khẩu?
            </Text>
            <TouchableOpacity
              className="flex-row items-center"
              onPress={() => setRememberMe(!rememberMe)}>
              <MaterialIcons
                name={rememberMe ? 'check-box' : 'check-box-outline-blank'}
                size={20}
                color="rgb(241,139,47)"
              />
              <Text className="ml-2 text-black">Ghi nhớ tài khoản</Text>
            </TouchableOpacity>
          </View>

          {error ? <Text className="mb-4 text-center text-red-500">{error}</Text> : null}

          <TouchableOpacity
            onPress={handleSignIn}
            className="mb-6 h-14 items-center justify-center rounded-lg bg-[rgb(241,139,47)] shadow-lg"
            activeOpacity={0.8}
            disabled={isLoading}>
            {isLoading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text className="text-lg font-bold text-white">Đăng Nhập</Text>
            )}
          </TouchableOpacity>

          <Text className="text-center text-black">
            Chưa có tài khoản?{' '}
            <Text
              className="font-bold text-[rgb(241,139,47)] underline"
              onPress={() => router.replace('/sign-up')}>
              Đăng Ký
            </Text>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignInScreen;
