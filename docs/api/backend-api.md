# Spring Boot Backend API Specifications

- `POST /api/auth/login` : 사용자 로그인 및 JWT 발급
- `GET /api/farms/{farmId}/sensors` : 온실 센서 조회
- `GET /api/farms/{farmId}/devices` : 온실 제어 장치 조회
- `PUT /api/devices/{deviceId}/status` : 장치 ON/OFF/AUTO 제어
