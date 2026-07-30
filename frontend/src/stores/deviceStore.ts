import { create } from 'zustand';
import { Device, DeviceStatus } from '../types/device';
import { deviceApi } from '../api/deviceApi';

interface DeviceState {
  devices: Device[];
  loading: boolean;
  fetchDevices: (farmId: number) => Promise<void>;
  updateDeviceStatus: (deviceId: number, status: DeviceStatus) => Promise<void>;
}

export const useDeviceStore = create<DeviceState>((set, get) => ({
  devices: [],
  loading: false,
  fetchDevices: async (farmId: number) => {
    set({ loading: true });
    const devices = await deviceApi.getDevices(farmId);
    set({ devices, loading: false });
  },
  updateDeviceStatus: async (deviceId: number, status: DeviceStatus) => {
    await deviceApi.toggleDevice(deviceId, status);
    set({
      devices: get().devices.map((d) => (d.id === deviceId ? { ...d, status } : d)),
    });
  },
}));
