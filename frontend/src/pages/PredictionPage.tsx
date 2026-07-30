import React, { useState } from 'react';
import { predictionApi } from '../api/predictionApi';
import { PredictionResult } from '../types/prediction';
import { Input } from '../components/common/Input';
import { Button } from '../components/common/Button';
import { Sparkles, AlertTriangle, CheckCircle, TrendingUp } from 'lucide-react';

export const PredictionPage: React.FC = () => {
  const [temp, setTemp] = useState('24.5');
  const [humidity, setHumidity] = useState('65.0');
  const [co2, setCo2] = useState('450.0');
  const [soilMoisture, setSoilMoisture] = useState('50.0');
  const [cropType, setCropType] = useState('Strawberry');
  
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handlePredict = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await predictionApi.predict({
        temperature: parseFloat(temp),
        humidity: parseFloat(humidity),
        co2: parseFloat(co2),
        soil_moisture: parseFloat(soilMoisture),
        crop_type: cropType
      });
      setResult(res);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-2">
        <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-xl">
          <Sparkles size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-100">AI 수확량 & 병충해 예측 엔진</h2>
          <p className="text-xs text-slate-400">온실 환경 파라미터를 입력하여 예측 수확량과 병충해 위험을 수시로 분석하세요.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <form onSubmit={handlePredict} className="glass-panel p-6 rounded-2xl flex flex-col gap-4">
          <h3 className="font-bold text-slate-200">환경 파라미터 입력</h3>
          <Input label="작물 종류" value={cropType} onChange={(e) => setCropType(e.target.value)} required />
          <Input label="온도 (°C)" type="number" step="0.1" value={temp} onChange={(e) => setTemp(e.target.value)} required />
          <Input label="습도 (%)" type="number" step="0.1" value={humidity} onChange={(e) => setHumidity(e.target.value)} required />
          <Input label="CO2 농도 (ppm)" type="number" step="1" value={co2} onChange={(e) => setCo2(e.target.value)} required />
          <Input label="토양 수분 (%)" type="number" step="0.1" value={soilMoisture} onChange={(e) => setSoilMoisture(e.target.value)} required />
          <Button type="submit" disabled={loading} className="mt-2 flex items-center justify-center gap-2">
            <Sparkles size={16} />
            {loading ? 'AI 분석 실행 중...' : '생육 시뮬레이션 분석'}
          </Button>
        </form>

        <div className="glass-panel p-6 rounded-2xl flex flex-col justify-between">
          <h3 className="font-bold text-slate-200">AI 예측 분석 결과</h3>

          {result ? (
            <div className="flex flex-col gap-6 py-4">
              <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <TrendingUp className="text-emerald-400" size={24} />
                  <div>
                    <span className="text-xs text-slate-400">예상 수확량</span>
                    <h4 className="text-2xl font-bold text-emerald-400">{result.predicted_yield_kg} kg</h4>
                  </div>
                </div>
                <span className="text-xs px-2.5 py-1 bg-emerald-500/20 text-emerald-300 rounded-full font-semibold">
                  신뢰도 {(result.confidence_score * 100).toFixed(0)}%
                </span>
              </div>

              <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700 flex items-center gap-3">
                {result.disease_risk === 'LOW' ? (
                  <CheckCircle className="text-emerald-400" size={24} />
                ) : (
                  <AlertTriangle className="text-rose-400" size={24} />
                )}
                <div>
                  <span className="text-xs text-slate-400">병충해 발생 위험도</span>
                  <h4 className={`text-lg font-bold ${result.disease_risk === 'LOW' ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {result.disease_risk} (양호)
                  </h4>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center my-auto text-slate-500 gap-2">
              <Sparkles size={40} className="opacity-40" />
              <p className="text-sm">좌측 파라미터를 입력하고 분석을 실행하세요.</p>
            </div>
          )}
          
          <div className="text-xs text-slate-500 border-t border-slate-800 pt-3">
            * FastAPI Microservice (`/api/v1/prediction/`) 모델 추론 연동
          </div>
        </div>
      </div>
    </div>
  );
};
