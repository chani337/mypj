import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';
import { authApi } from '../api/authApi';
import { Input } from '../components/common/Input';
import { Button } from '../components/common/Button';
import { ROUTES } from '../constants/routes';
import { Sprout } from 'lucide-react';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('farmer@smartfarm.com');
  const [password, setPassword] = useState('password123');
  const [loading, setLoading] = useState(false);
  const setAuth = useAuthStore((state) => state.setAuth);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await authApi.login(email, password);
      setAuth(res.user, res.token);
      navigate(ROUTES.DASHBOARD);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[70vh]">
      <div className="glass-panel p-8 rounded-2xl w-full max-w-md flex flex-col gap-6">
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-2xl">
            <Sprout size={32} />
          </div>
          <h2 className="text-2xl font-bold text-slate-100">스마트팜 로그인</h2>
          <p className="text-xs text-slate-400">농장 통합 관리자 계정으로 접속하세요.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input label="이메일" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <Input label="비밀번호" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <Button type="submit" disabled={loading} className="w-full mt-2 py-3">
            {loading ? '로그인 처리 중...' : '로그인'}
          </Button>
        </form>
      </div>
    </div>
  );
};
