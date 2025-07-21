import { ExpoConfig, ConfigContext } from 'expo/config';

const IS_DEV = process.env.APP_VARIANT === 'development';
const IS_PREVIEW = process.env.APP_VARIANT === 'preview';

const getAppName = () => {
  if (IS_DEV) return 'Instabids (Dev)';
  if (IS_PREVIEW) return 'Instabids (Preview)';
  return 'Instabids';
};

const getBundleIdentifier = () => {
  if (IS_DEV) return 'com.instabids.dev';
  if (IS_PREVIEW) return 'com.instabids.preview';
  return 'com.instabids';
};

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: getAppName(),
  slug: 'instabids',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'automatic',
  scheme: 'instabids',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#000000',
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    bundleIdentifier: getBundleIdentifier(),
    buildNumber: '1',
    usesAppleSignIn: true,
    config: {
      usesNonExemptEncryption: false,
    },
    infoPlist: {
      NSCameraUsageDescription: 'Instabids needs camera access to take photos of items for auction.',
      NSPhotoLibraryUsageDescription: 'Instabids needs photo library access to select images for auction listings.',
      NSLocationWhenInUseUsageDescription: 'Instabids needs location access to show nearby auctions.',
    },
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#000000',
    },
    package: getBundleIdentifier(),
    versionCode: 1,
    permissions: [
      'CAMERA',
      'READ_EXTERNAL_STORAGE',
      'WRITE_EXTERNAL_STORAGE',
      'ACCESS_FINE_LOCATION',
      'ACCESS_COARSE_LOCATION',
    ],
  },
  web: {
    bundler: 'metro',
    favicon: './assets/favicon.png',
  },
  plugins: [
    'expo-build-properties',
    [
      'expo-camera',
      {
        cameraPermission: 'Allow Instabids to access your camera to take photos of items.',
      },
    ],
    [
      'expo-image-picker',
      {
        photosPermission: 'Allow Instabids to access your photos to select images for listings.',
      },
    ],
    [
      'expo-location',
      {
        locationAlwaysAndWhenInUsePermission: 'Allow Instabids to use your location to show nearby auctions.',
      },
    ],
    [
      'expo-notifications',
      {
        icon: './assets/notification-icon.png',
        color: '#000000',
      },
    ],
    'expo-font',
    'expo-secure-store',
  ],
  extra: {
    eas: {
      projectId: 'your-eas-project-id',
    },
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
  },
  experiments: {
    tsconfigPaths: true,
    typedRoutes: true,
  },
  updates: {
    url: 'https://u.expo.dev/your-eas-project-id',
    enabled: true,
    checkAutomatically: 'ON_LOAD',
    fallbackToCacheTimeout: 0,
  },
  runtimeVersion: {
    policy: 'appVersion',
  },
});