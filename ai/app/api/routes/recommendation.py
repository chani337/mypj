from fastapi import APIRouter
from app.schemas.prediction import EnvironmentInput
from app.schemas.recommendation import RecommendationResponse
from app.services.recommendation_service import recommend_device_actions

router = APIRouter()

@router.post("/{farm_id}", response_model=RecommendationResponse)
def get_recommendations(farm_id: int, env: EnvironmentInput):
    return recommend_device_actions(farm_id, env)
