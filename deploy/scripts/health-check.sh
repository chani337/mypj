#!/bin/bash
curl -f http://localhost/api/health || exit 1
curl -f http://localhost/ai/health || exit 1
echo "Health Checks Passed!"
