import React from 'react';
import { useSensors } from '../hooks/useSensors';
import { useDevices } from '../hooks/useDevices';
import { FarmStatus } from '../components/dashboard/FarmStatus';
import { SensorCard } from '../components/dashboard/SensorCard';
import { EnvironmentChart } from '../components/dashboard/EnvironmentChart';
import { DeviceController } from '../components/devices/DeviceController';
import { Loading } from '../components/common/Loading';

export const DashboardPage: React.FC = () => {
  const { sensors, history, loading: sensorsLoading } = useSensors(1);
  const { devices, loading: devicesLoading, updateDeviceStatus } = useDevices(1);

  if (sensorsLoading || devicesLoading) return <Loading />;

  return (
    <div className="flex flex-col gap-6">
      <FarmStatus />

      <div>
        <h3 className="text-lg font-bold text-slate-100 mb-4">실시간 센서 정보</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sensors.map((sensor) => (
            <SensorCard key={sensor.id} sensor={sensor} />
          ))}
        </div>
      </div>

      <EnvironmentChart data={history} />

      <div>
        <h3 className="text-lg font-bold text-slate-100 mb-4">환경 제어 장치 현황</h3>
        <DeviceController devices={devices} onToggle={updateDeviceStatus} />
      </div>
    </div>
  );
};
