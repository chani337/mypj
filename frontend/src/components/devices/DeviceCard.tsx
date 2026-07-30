import React from 'react';
import { Device, DeviceStatus } from '../../types/device';
import { Power, Fan, Droplet, Sun } from 'lucide-react';

interface DeviceCardProps {
  device: Device;
  onToggle: (id: number, status: DeviceStatus) => void;
}

export const DeviceCard: React.FC<DeviceCardProps> = ({ device, onToggle }) => {
  const getIcon = () => {
    switch (device.deviceType) {
      case 'WATER_PUMP': return <Droplet className="text-cyan-400" />;
      case 'FAN': return <Fan className="text-emerald-400" />;
      default: return <Sun className="text-amber-400" />;
    }
  };

  const isON = device.status === 'ON';

  return (
    <div className="glass-panel p-5 rounded-2xl flex flex-col justify-between gap-4">
      <div className="flex justify-between items-center">
        <div className="p-3 bg-slate-800 rounded-xl">{getIcon()}</div>
        <button
          onClick={() => onToggle(device.id, isON ? 'OFF' : 'ON')}
          className={`p-3 rounded-xl transition-all duration-200 ${
            isON ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' : 'bg-slate-800 text-slate-500 hover:text-slate-300'
          }`}
        >
          <Power size={20} />
        </button>
      </div>

      <div>
        <h4 className="font-bold text-slate-100">{device.deviceName}</h4>
        <span className="text-xs text-slate-400">{device.deviceCode}</span>
      </div>

      <div className="flex items-center justify-between text-xs border-t border-slate-800 pt-3">
        <span className="text-slate-400">상태</span>
        <span className={`font-semibold px-2 py-0.5 rounded-full ${
          isON ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-400'
        }`}>
          {device.status}
        </span>
      </div>
    </div>
  );
};
