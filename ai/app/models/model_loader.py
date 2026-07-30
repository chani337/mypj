import os
import joblib
from app.core.config import settings
from app.core.logging import logger

class ModelLoader:
    _instance = None
    _model = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(ModelLoader, cls).__new__(cls)
        return cls._instance

    def load_model(self):
        if self._model is None:
            if os.path.exists(settings.MODEL_PATH):
                logger.info(f"Loading AI model from {settings.MODEL_PATH}")
                self._model = joblib.load(settings.MODEL_PATH)
            else:
                logger.warning(f"Model file not found at {settings.MODEL_PATH}. Using fallback mock model logic.")
                self._model = "MOCK_MODEL"
        return self._model

model_loader = ModelLoader()
