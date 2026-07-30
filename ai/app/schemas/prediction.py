from pydantic import BaseModel, Field
from typing import Optional

class EnvironmentInput(BaseModel):
    temperature: float = Field(..., description="온도 (°C)", example=24.5)
    humidity: float = Field(..., description="습도 (%)", example=65.0)
    co2: float = Field(..., description="CO2 농도 (ppm)", example=450.0)
    soil_moisture: Optional[float] = Field(50.0, description="토양 수분 (%)", example=52.3)
    crop_type: str = Field("Strawberry", description="작물 종류", example="Strawberry")

class PredictionOutput(BaseModel):
    crop_type: str
    predicted_yield_kg: float
    disease_risk: str # LOW, MEDIUM, HIGH
    confidence_score: float
    timestamp: str
