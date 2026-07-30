import React from 'react';
import { Device, DeviceStatus } from '../../types/device';
import { DeviceCard } from './DeviceCard';

interface DeviceControllerProps {
  devices: Device[];
  onToggle: (id: number, status: DeviceStatus) => void;
}

export const DeviceController: React.FC<DeviceControllerProps> = ({ devices, onToggle }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {devices.map((device) => (
        <DeviceCard key={device.id} device={device} onToggle={onToggle} />
      ))}
    </div>
  );
};
