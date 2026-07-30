export interface PredictionRequest {
  temperature: number;
  humidity: number;
  co2: number;
  soil_moisture?: number;
  crop_type: string;
}

export interface PredictionResult {
  crop_type: string;
  predicted_yield_kg: number;
  disease_risk: 'LOW' | 'MEDIUM' | 'HIGH';
  confidence_score: number;
  timestamp: string;
}
