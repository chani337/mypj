import React from 'react';
import { MapPin, Sprout, ShieldCheck } from 'lucide-react';

export const FarmStatus: React.FC = () => {
  return (
    <div className="glass-panel p-6 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div>
        <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-1">
          <Sprout size={16} />
          <span>스마트 온실 #1</span>
        </div>
        <h2 className="text-2xl font-bold text-slate-100">제1 온실 (딸기 재배동)</h2>
        <p className="text-slate-400 text-sm flex items-center gap-1 mt-1">
          <MapPin size={14} /> 전라남도 나주시 봉황면 (350.5 m²)
        </p>
      </div>

      <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400">
        <ShieldCheck size={20} />
        <span className="font-semibold text-sm">최적 재배 환경 유지 중</span>
      </div>
    </div>
  );
};
