import os

class Settings:
    ENV: str = os.getenv("ENV", "local")
    PORT: int = int(os.getenv("PORT", 8000))
    MODEL_PATH: str = os.getenv("MODEL_PATH", "app/models/crop_model.pkl")
    LOG_LEVEL: str = os.getenv("LOG_LEVEL", "INFO")

settings = Settings()
