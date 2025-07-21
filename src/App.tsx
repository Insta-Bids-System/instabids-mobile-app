import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

import { RootNavigator } from '@navigation/RootNavigator';
import { AuthProvider } from '@hooks/useAuth';
import { useThemeStore } from '@store/themeStore';
import { supabase } from '@services/supabase';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const theme = useThemeStore((state) => state.theme);
  const [fontsLoaded] = useFonts({
    'Inter-Regular': require('@assets/fonts/Inter-Regular.ttf'),
    'Inter-Medium': require('@assets/fonts/Inter-Medium.ttf'),
    'Inter-SemiBold': require('@assets/fonts/Inter-SemiBold.ttf'),
    'Inter-Bold': require('@assets/fonts/Inter-Bold.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }
    prepare();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <AuthProvider>
        <NavigationContainer>
          <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
          <RootNavigator />
        </NavigationContainer>
      </AuthProvider>
    </SafeAreaProvider>
  );
}