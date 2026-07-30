#!/bin/bash
echo "Starting Smart Farm Deployment..."
docker-compose -f docker-compose.prod.yml up -d --build
echo "Deployment Finished Successfully!"
