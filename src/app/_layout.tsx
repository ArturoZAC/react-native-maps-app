import './global.css';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Stack } from 'expo-router';
import PermisionCheckerProvider from '../modules/permissions/providers/PermisionCheckerProvider';

export default function Layout() {
  return (
    <SafeAreaProvider>
      <PermisionCheckerProvider>
        <Stack
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="loading/index" options={{ animation: 'none' }} />
          <Stack.Screen name="map/index" options={{ animation: 'fade' }} />
          <Stack.Screen name="permissions/index" options={{ animation: 'fade' }} />
        </Stack>
      </PermisionCheckerProvider>
    </SafeAreaProvider>
  );
}
