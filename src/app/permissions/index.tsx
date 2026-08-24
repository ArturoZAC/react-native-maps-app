import ThemedPressable from '@/src/components/ThemedPressable';
import { userPermissionStore } from '@/src/modules/permissions/store/usePermissions';
import { View, Text } from 'react-native';

const PermissionsScreen = () => {
  const { locationStatus, requestLocationPermission } = userPermissionStore();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ThemedPressable onPress={requestLocationPermission}>Habilitar Ubicacion</ThemedPressable>

      <Text>Estado Actual: {locationStatus}</Text>
    </View>
  );
};

export default PermissionsScreen;
