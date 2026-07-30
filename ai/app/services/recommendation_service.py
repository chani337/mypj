from typing import List
from app.schemas.recommendation import RecommendationResponse, ControlActionRecommendation
from app.schemas.prediction import EnvironmentInput

def recommend_device_actions(farm_id: int, env: EnvironmentInput) -> RecommendationResponse:
    recs: List[ControlActionRecommendation] = []
    
    if env.humidity > 75.0:
        recs.append(ControlActionRecommendation(
            device_type="FAN",
            action="TURN_ON",
            reason="High humidity level detected (>75%), ventilating to prevent mold",
            target_setting=60.0
        ))
    if env.soil_moisture and env.soil_moisture < 40.0:
        recs.append(ControlActionRecommendation(
            device_type="WATER_PUMP",
            action="TURN_ON",
            reason="Low soil moisture detected (<40%), initiating irrigation",
            target_setting=65.0
        ))
        
    return RecommendationResponse(farm_id=farm_id, recommendations=recs)
