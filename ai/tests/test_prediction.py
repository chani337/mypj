from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_prediction():
    payload = {
        "temperature": 25.0,
        "humidity": 65.0,
        "co2": 450.0,
        "soil_moisture": 50.0,
        "crop_type": "Strawberry"
    }
    response = client.post("/api/v1/prediction/", json=payload)
    assert response.status_code == 200
    data = response.json()
    assert data["crop_type"] == "Strawberry"
    assert "disease_risk" in data
