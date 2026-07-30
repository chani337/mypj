export type DeviceType = 'WATER_PUMP' | 'FAN' | 'LED' | 'HEATER';
export type DeviceStatus = 'ON' | 'OFF' | 'AUTO';

export interface Device {
  id: number;
  farmId: number;
  deviceCode: string;
  deviceName: string;
  deviceType: DeviceType;
  status: DeviceStatus;
}
