export const formatSensorValue = (val?: number, unit?: string): string => {
  if (val === undefined || val === null) return '--';
  return `${val} ${unit || ''}`.trim();
};
