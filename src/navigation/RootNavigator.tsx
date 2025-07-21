import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuthStore } from '@store/authStore';
import { AuthNavigator } from './AuthNavigator';
import { MainNavigator } from './MainNavigator';
import { AuctionDetailsScreen } from '@screens/AuctionDetails';
import { CreateAuctionScreen } from '@screens/CreateAuction';
import { UserProfileScreen } from '@screens/UserProfile';
import { MessagesScreen } from '@screens/Messages';
import { ConversationScreen } from '@screens/Conversation';
import { SettingsScreen } from '@screens/Settings';
import { SearchScreen } from '@screens/Search';
import type { RootStackParamList } from '@types/index';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'ios',
      }}
    >
      {!isAuthenticated ? (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      ) : (
        <>
          <Stack.Screen name="Main" component={MainNavigator} />
          <Stack.Screen
            name="AuctionDetails"
            component={AuctionDetailsScreen}
            options={{
              headerShown: true,
              headerTransparent: true,
              headerTitle: '',
            }}
          />
          <Stack.Screen
            name="CreateAuction"
            component={CreateAuctionScreen}
            options={{
              headerShown: true,
              headerTitle: 'Create Listing',
              presentation: 'modal',
            }}
          />
          <Stack.Screen
            name="UserProfile"
            component={UserProfileScreen}
            options={{
              headerShown: true,
              headerTitle: '',
            }}
          />
          <Stack.Screen
            name="Messages"
            component={MessagesScreen}
            options={{
              headerShown: true,
              headerTitle: 'Messages',
            }}
          />
          <Stack.Screen
            name="Conversation"
            component={ConversationScreen}
            options={{
              headerShown: true,
            }}
          />
          <Stack.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              headerShown: true,
              headerTitle: 'Settings',
              presentation: 'modal',
            }}
          />
          <Stack.Screen
            name="Search"
            component={SearchScreen}
            options={{
              headerShown: true,
              headerTitle: 'Search',
              animation: 'fade',
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}