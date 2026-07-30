import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { SensorDataPoint } from '../../types/sensor';

interface EnvironmentChartProps {
  data: SensorDataPoint[];
}

export const EnvironmentChart: React.FC<EnvironmentChartProps> = ({ data }) => {
  return (
    <div className="glass-panel p-6 rounded-2xl flex flex-col gap-4">
      <h3 className="text-lg font-bold text-slate-100">24시간 환경 데이터 변화 트렌드</h3>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="timestamp" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderColor: '#475569' }} />
            <Line type="monotone" dataKey="temperature" name="온도 (°C)" stroke="#f59e0b" strokeWidth={2} />
            <Line type="monotone" dataKey="humidity" name="습도 (%)" stroke="#06b6d4" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
