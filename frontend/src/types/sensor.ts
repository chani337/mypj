export type SensorType = 'TEMPERATURE' | 'HUMIDITY' | 'CO2' | 'SOIL_MOISTURE' | 'LIGHT';

export interface Sensor {
  id: number;
  farmId: number;
  sensorCode: string;
  sensorType: SensorType;
  status: 'ACTIVE' | 'INACTIVE';
  latestValue?: number;
  unit?: string;
}

export interface SensorDataPoint {
  timestamp: string;
  temperature: number;
  humidity: number;
  co2: number;
  soilMoisture: number;
}
