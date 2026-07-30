import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { SensorPage } from '../pages/SensorPage';
import { DevicePage } from '../pages/DevicePage';
import { PredictionPage } from '../pages/PredictionPage';
import { NotFoundPage } from '../pages/NotFoundPage';

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.DASHBOARD} element={<DashboardPage />} />
      <Route path={ROUTES.SENSORS} element={<SensorPage />} />
      <Route path={ROUTES.DEVICES} element={<DevicePage />} />
      <Route path={ROUTES.PREDICTION} element={<PredictionPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
