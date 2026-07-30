import React from 'react';
import { useSensors } from '../hooks/useSensors';
import { SensorCard } from '../components/dashboard/SensorCard';
import { EnvironmentChart } from '../components/dashboard/EnvironmentChart';
import { Loading } from '../components/common/Loading';

export const SensorPage: React.FC = () => {
  const { sensors, history, loading } = useSensors(1);

  if (loading) return <Loading />;

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold text-slate-100">센서 데이터 상세 모니터링</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sensors.map((sensor) => (
          <SensorCard key={sensor.id} sensor={sensor} />
        ))}
      </div>
      <EnvironmentChart data={history} />
    </div>
  );
};
