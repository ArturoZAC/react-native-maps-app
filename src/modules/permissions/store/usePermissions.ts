import { create, type StateCreator } from 'zustand';

import { PermissionStatus } from '../interfaces/location.interface';
import { checkLocationPermission, requestLocationPermission } from '../services/location.service';

interface PermissionState {
  locationStatus: PermissionStatus;
}

interface PermissionHandlers {
  requestLocationPermission: () => Promise<PermissionStatus>;
  checkLocationPermission: () => Promise<PermissionStatus>;
}

type PermissionStore = PermissionState & PermissionHandlers;

const storePermission: StateCreator<PermissionStore> = (set) => ({
  locationStatus: PermissionStatus.CHECKING,

  requestLocationPermission: async () => {
    const status = await requestLocationPermission();
    set({ locationStatus: status });
    return status;
  },

  checkLocationPermission: async () => {
    const status = await checkLocationPermission();
    set({ locationStatus: status });
    return status;
  },
});

export const userPermissionStore = create<PermissionStore>(storePermission);
