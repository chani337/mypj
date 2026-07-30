import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Cpu, ToggleRight, Sparkles, Home } from 'lucide-react';
import { ROUTES } from '../../constants/routes';

export const Sidebar: React.FC = () => {
  const links = [
    { to: ROUTES.HOME, label: '홈', icon: Home },
    { to: ROUTES.DASHBOARD, label: '대시보드', icon: LayoutDashboard },
    { to: ROUTES.SENSORS, label: '센서 모니터링', icon: Cpu },
    { to: ROUTES.DEVICES, label: '장치 제어', icon: ToggleRight },
    { to: ROUTES.PREDICTION, label: 'AI 생육 예측', icon: Sparkles },
  ];

  return (
    <aside className="w-64 border-r border-slate-800 bg-slate-900/50 p-4 flex flex-col gap-2 min-h-[calc(100vh-4rem)]">
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
                isActive
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`
            }
          >
            <Icon size={18} />
            <span>{link.label}</span>
          </NavLink>
        );
      })}
    </aside>
  );
};
