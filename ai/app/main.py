import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes import health, prediction, recommendation

app = FastAPI(
    title="Smart Farm AI Engine API",
    description="Crop Environment Optimization & Prediction Microservice",
    version="1.0.0"
)

# CORS Middlewares
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include Routers
app.include_router(health.router, tags=["Health"])
app.include_router(prediction.router, prefix="/api/v1/prediction", tags=["Prediction"])
app.include_router(recommendation.router, prefix="/api/v1/recommendation", tags=["Recommendation"])

@app.get("/")
def root():
    return {"message": "Smart Farm AI Engine Running", "docs": "/docs"}
