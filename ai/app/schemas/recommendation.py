from pydantic import BaseModel, Field
from typing import List

class ControlActionRecommendation(BaseModel):
    device_type: str # WATER_PUMP, FAN, HEATER
    action: str # TURN_ON, TURN_OFF, ADJUST
    reason: str
    target_setting: float

class RecommendationResponse(BaseModel):
    farm_id: int
    recommendations: List[ControlActionRecommendation]
