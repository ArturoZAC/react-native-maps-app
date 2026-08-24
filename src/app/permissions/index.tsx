import { userPermissionStore } from '@/src/modules/permissions/store/usePermissions';
import { View, Text, Pressable } from 'react-native';

const PermissionsScreen = () => {
  const { locationStatus, requestLocationPermission } = userPermissionStore();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Pressable onPress={requestLocationPermission}>
        <Text>Habilitar Ubicacion</Text>
      </Pressable>

      <Text>Estado Actual: {locationStatus}</Text>
    </View>
  );
};

export default PermissionsScreen;
