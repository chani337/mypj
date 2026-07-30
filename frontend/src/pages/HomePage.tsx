import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import { Sprout, ArrowRight, Activity, Cpu, Sparkles } from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center gap-8 px-4">
      <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 flex items-center gap-2 text-sm font-semibold">
        <Sprout size={20} />
        <span>지능형 스마트팜 통합 환경 제어 시스템</span>
      </div>

      <h1 className="text-4xl md:text-6xl font-extrabold max-w-3xl leading-tight">
        실시간 온실 환경 모니터링 & <br />
        <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
          AI 기반 자동 제어 솔루션
        </span>
      </h1>

      <p className="text-slate-400 max-w-xl text-lg">
        센서 데이터 분석, 병충해 예찰, 생육 예측 및 자동 관수/환기 제어를 한 곳에서 관리하세요.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          to={ROUTES.DASHBOARD}
          className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl flex items-center gap-2 transition-all shadow-lg shadow-emerald-600/20"
        >
          <span>대시보드 바로가기</span>
          <ArrowRight size={18} />
        </Link>
        <Link
          to={ROUTES.PREDICTION}
          className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-xl flex items-center gap-2 transition-all border border-slate-700"
        >
          <Sparkles size={18} className="text-emerald-400" />
          <span>AI 생육 예측</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full max-w-4xl text-left">
        <div className="glass-panel p-6 rounded-2xl">
          <Activity className="text-emerald-400 mb-3" size={28} />
          <h3 className="font-bold text-slate-100 mb-1">실시간 환경 수집</h3>
          <p className="text-xs text-slate-400">온도, 습도, CO2, 토양수분 센서의 데이터를 정밀 추적합니다.</p>
        </div>
        <div className="glass-panel p-6 rounded-2xl">
          <Cpu className="text-cyan-400 mb-3" size={28} />
          <h3 className="font-bold text-slate-100 mb-1">원격 장치 제어</h3>
          <p className="text-xs text-slate-400">관수 펌프 및 환풍기 등 제어 장치를 안전하게 제어합니다.</p>
        </div>
        <div className="glass-panel p-6 rounded-2xl">
          <Sparkles className="text-amber-400 mb-3" size={28} />
          <h3 className="font-bold text-slate-100 mb-1">AI 생육 예측</h3>
          <p className="text-xs text-slate-400">FastAPI ML 서버 연동을 통해 수확량 및 병충해 위험을 예찰합니다.</p>
        </div>
      </div>
    </div>
  );
};
