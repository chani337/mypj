# AI Model Training Pipeline Script
import joblib
import pandas as pd
from sklearn.ensemble import RandomForestRegressor

def train():
    print("Training Smart Farm Crop Yield & Disease Prediction Model...")
    # Mock data training logic
    X = [[24.5, 65.0, 450.0], [30.0, 85.0, 600.0], [18.0, 50.0, 400.0]]
    y = [120.0, 70.0, 95.0]
    
    model = RandomForestRegressor(n_estimators=10, random_state=42)
    model.fit(X, y)
    
    joblib.dump(model, "app/models/crop_model.pkl")
    print("Model saved to app/models/crop_model.pkl")

if __name__ == "__main__":
    train()
