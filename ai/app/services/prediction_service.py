from datetime import datetime
from app.schemas.prediction import EnvironmentInput, PredictionOutput
from app.models.model_loader import model_loader

def predict_crop_status(data: EnvironmentInput) -> PredictionOutput:
    model = model_loader.load_model()
    
    # Mock inference logic based on environment parameters
    base_yield = 100.0
    if 20.0 <= data.temperature <= 26.0 and 60.0 <= data.humidity <= 70.0:
        disease_risk = "LOW"
        predicted_yield = base_yield * 1.2
        confidence = 0.95
    elif data.humidity > 80.0:
        disease_risk = "HIGH"
        predicted_yield = base_yield * 0.7
        confidence = 0.88
    else:
        disease_risk = "MEDIUM"
        predicted_yield = base_yield * 0.95
        confidence = 0.90

    return PredictionOutput(
        crop_type=data.crop_type,
        predicted_yield_kg=round(predicted_yield, 2),
        disease_risk=disease_risk,
        confidence_score=confidence,
        timestamp=datetime.now().isoformat()
    )
