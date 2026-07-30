from fastapi import APIRouter
from app.schemas.prediction import EnvironmentInput, PredictionOutput
from app.services.prediction_service import predict_crop_status

router = APIRouter()

@router.post("/", response_model=PredictionOutput)
def create_prediction(data: EnvironmentInput):
    return predict_crop_status(data)
