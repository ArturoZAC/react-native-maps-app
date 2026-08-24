import { router } from 'expo-router';
import { PermissionStatus } from '../interfaces/location.interface';
import { userPermissionStore } from '../store/usePermissions';
import { PropsWithChildren, useEffect } from 'react';

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

  return <>{children}</>;
};

export default PermisionCheckerProvider;
