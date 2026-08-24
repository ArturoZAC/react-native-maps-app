import { router } from 'expo-router';
import { PermissionStatus } from '../interfaces/location.interface';
import { userPermissionStore } from '../store/usePermissions';
import { PropsWithChildren, useEffect } from 'react';
import { AppState } from 'react-native';

const PermisionCheckerProvider = ({ children }: PropsWithChildren) => {
  const { locationStatus, checkLocationPermission } = userPermissionStore();

  useEffect(() => {
    if (locationStatus === PermissionStatus.GRANTED) {
      router.replace('/map');
    } else if (locationStatus !== PermissionStatus.CHECKING) {
      router.replace('/permissions');
    }
  }, [locationStatus]);

  useEffect(() => {
    checkLocationPermission();
  }, []);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      if (nextAppState === 'active') {
        checkLocationPermission();
      }
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return <>{children}</>;
};

export default PermisionCheckerProvider;
