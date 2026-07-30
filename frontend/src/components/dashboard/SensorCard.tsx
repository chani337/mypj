import React from 'react';
import { Sensor } from '../../types/sensor';
import { Thermometer, Droplets, Cloud, Sun } from 'lucide-react';

interface SensorCardProps {
  sensor: Sensor;
}

export const SensorCard: React.FC<SensorCardProps> = ({ sensor }) => {
  const getIcon = () => {
    switch (sensor.sensorType) {
      case 'TEMPERATURE': return <Thermometer className="text-amber-400" />;
      case 'HUMIDITY': return <Droplets className="text-cyan-400" />;
      case 'CO2': return <Cloud className="text-indigo-400" />;
      default: return <Sun className="text-emerald-400" />;
    }
  };

  return (
    <div className="glass-panel p-5 rounded-2xl flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <span className="text-xs font-semibold uppercase text-slate-400 tracking-wider">{sensor.sensorType}</span>
        <div className="p-2 bg-slate-800 rounded-lg">{getIcon()}</div>
      </div>
      <div className="flex items-baseline gap-1">
        <span className="text-3xl font-extrabold text-slate-100">{sensor.latestValue ?? '--'}</span>
        <span className="text-sm font-medium text-slate-400">{sensor.unit}</span>
      </div>
      <div className="flex items-center gap-2 text-xs">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span className="text-emerald-400">정상 작동 중</span>
      </div>
    </div>
  );
};
