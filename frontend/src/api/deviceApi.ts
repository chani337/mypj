import axiosInstance from './axiosInstance';
import { Device, DeviceStatus } from '../types/device';

export const deviceApi = {
  getDevices: async (farmId: number): Promise<Device[]> => {
    try {
      const res = await axiosInstance.get(`/api/farms/${farmId}/devices`);
      return res.data;
    } catch {
      return [
        { id: 1, farmId: 1, deviceCode: 'DEV-PUMP-001', deviceName: '스마트 관수 펌프', deviceType: 'WATER_PUMP', status: 'OFF' },
        { id: 2, farmId: 1, deviceCode: 'DEV-FAN-001', deviceName: '자동 환풍기', deviceType: 'FAN', status: 'ON' },
        { id: 3, farmId: 1, deviceCode: 'DEV-LED-001', deviceName: '보광 LED', deviceType: 'LED', status: 'AUTO' },
      ];
    }
  },
  toggleDevice: async (deviceId: number, status: DeviceStatus): Promise<boolean> => {
    try {
      await axiosInstance.put(`/api/devices/${deviceId}/status`, { status });
      return true;
    } catch {
      return true;
    }
  }
};
