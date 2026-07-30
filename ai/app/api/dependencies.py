# Dependency injection utilities for FastAPI routes
from app.models.model_loader import model_loader

def get_model():
    return model_loader.load_model()
