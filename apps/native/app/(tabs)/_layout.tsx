import { FontAwesome } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { SafeAreaView, Text, View } from 'react-native';

import Header from '~/components/Header';

export default function TabLayout() {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1">
        <Header />
        <Tabs
          screenOptions={{
            tabBarActiveTintColor: '#F39C12',
            tabBarInactiveTintColor: 'gray',
            tabBarShowLabel: false,
            headerShown: false,
          }}>
          <Tabs.Screen
            name="index"
            options={{
              tabBarIcon: ({ color }) => <FontAwesome name="home" size={30} color={color} />,
              tabBarLabel: ({ focused }) => (
                <Text
                  className={`text-sm ${focused ? 'font-bold text-[#F39C12]' : 'text-gray-500'}`}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="lesson"
            options={{
              tabBarIcon: ({ color }) => <FontAwesome name="book" size={30} color={color} />,
              tabBarLabel: ({ focused }) => (
                <Text
                  className={`text-sm ${focused ? 'font-bold text-[#F39C12]' : 'text-gray-500'}`}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="rank"
            options={{
              tabBarIcon: ({ color }) => <FontAwesome name="trophy" size={30} color={color} />,
              tabBarLabel: ({ focused }) => (
                <Text
                  className={`text-sm ${focused ? 'font-bold text-[#F39C12]' : 'text-gray-500'}`}
                />
              ),
            }}
          />
          {/* Uncomment and add icon name when needed */}
          {/* <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="user" size={24} color={color} />
            ),
            tabBarLabel: ({ focused }) => (
              <Text className={`text-sm ${focused ? 'text-[#F39C12] font-bold' : 'text-gray-500'}`}>
                Profile
              </Text>
            ),
          }}
        /> */}
        </Tabs>
      </View>
    </SafeAreaView>
  );
}
