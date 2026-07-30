import { create } from 'zustand';
import { Sensor, SensorDataPoint } from '../types/sensor';
import { sensorApi } from '../api/sensorApi';

interface SensorState {
  sensors: Sensor[];
  history: SensorDataPoint[];
  loading: boolean;
  fetchSensors: (farmId: number) => Promise<void>;
}

export const useSensorStore = create<SensorState>((set) => ({
  sensors: [],
  history: [],
  loading: false,
  fetchSensors: async (farmId: number) => {
    set({ loading: true });
    const sensors = await sensorApi.getSensors(farmId);
    const history = await sensorApi.getSensorHistory(farmId);
    set({ sensors, history, loading: false });
  },
}));
