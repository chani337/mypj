import React from 'react';
import { useDevices } from '../hooks/useDevices';
import { DeviceController } from '../components/devices/DeviceController';
import { Loading } from '../components/common/Loading';

export const DevicePage: React.FC = () => {
  const { devices, loading, updateDeviceStatus } = useDevices(1);

  if (loading) return <Loading />;

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold text-slate-100">온실 구동 장치 원격 제어</h2>
      <DeviceController devices={devices} onToggle={updateDeviceStatus} />
    </div>
  );
};
