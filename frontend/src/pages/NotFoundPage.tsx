import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 text-center">
      <h1 className="text-6xl font-extrabold text-emerald-400">404</h1>
      <p className="text-slate-400">요청하신 페이지를 찾을 수 없습니다.</p>
      <Link to={ROUTES.HOME} className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-medium">
        홈으로 돌아가기
      </Link>
    </div>
  );
};
