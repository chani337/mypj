import axiosInstance from './axiosInstance';
import { Sensor, SensorDataPoint } from '../types/sensor';

export const sensorApi = {
  getSensors: async (farmId: number): Promise<Sensor[]> => {
    try {
      const res = await axiosInstance.get(`/api/farms/${farmId}/sensors`);
      return res.data;
    } catch {
      return [
        { id: 1, farmId: 1, sensorCode: 'SENS-TEMP-001', sensorType: 'TEMPERATURE', status: 'ACTIVE', latestValue: 24.5, unit: '°C' },
        { id: 2, farmId: 1, sensorCode: 'SENS-HUM-001', sensorType: 'HUMIDITY', status: 'ACTIVE', latestValue: 65.2, unit: '%' },
        { id: 3, farmId: 1, sensorCode: 'SENS-CO2-001', sensorType: 'CO2', status: 'ACTIVE', latestValue: 450, unit: 'ppm' },
      ];
    }
  },
  getSensorHistory: async (_farmId: number): Promise<SensorDataPoint[]> => {
    return [
      { timestamp: '10:00', temperature: 22.1, humidity: 60.0, co2: 420, soilMoisture: 50 },
      { timestamp: '11:00', temperature: 23.5, humidity: 62.5, co2: 435, soilMoisture: 49 },
      { timestamp: '12:00', temperature: 25.2, humidity: 65.0, co2: 450, soilMoisture: 48 },
      { timestamp: '13:00', temperature: 24.8, humidity: 64.2, co2: 440, soilMoisture: 48 },
      { timestamp: '14:00', temperature: 24.5, humidity: 65.2, co2: 450, soilMoisture: 47 },
    ];
  }
};
