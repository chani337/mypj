#!/bin/bash
echo "Rolling back to previous deployment state..."
docker-compose -f docker-compose.prod.yml down
