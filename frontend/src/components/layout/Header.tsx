import React from 'react';
import { useAuthStore } from '../../stores/authStore';
import { Sprout, LogOut, User as UserIcon } from 'lucide-react';

export const Header: React.FC = () => {
  const { user, logout } = useAuthStore();

  return (
    <header className="h-16 border-b border-slate-800 bg-slate-900/80 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-40">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
          <Sprout size={24} />
        </div>
        <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
          Smart Farm AI
        </span>
      </div>

      {user && (
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <UserIcon size={16} className="text-emerald-400" />
            <span>{user.name}</span>
          </div>
          <button
            onClick={logout}
            className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-rose-400 transition-colors"
            title="로그아웃"
          >
            <LogOut size={18} />
          </button>
        </div>
      )}
    </header>
  );
};
