import { useEffect } from 'react';
import { useSensorStore } from '../stores/sensorStore';

export const useSensors = (farmId: number = 1) => {
  const { sensors, history, loading, fetchSensors } = useSensorStore();

  useEffect(() => {
    fetchSensors(farmId);
  }, [farmId, fetchSensors]);

  return { sensors, history, loading };
};
