import { useEffect } from 'react';
import { useDeviceStore } from '../stores/deviceStore';

export const useDevices = (farmId: number = 1) => {
  const { devices, loading, fetchDevices, updateDeviceStatus } = useDeviceStore();

  useEffect(() => {
    fetchDevices(farmId);
  }, [farmId, fetchDevices]);

  return { devices, loading, updateDeviceStatus };
};
