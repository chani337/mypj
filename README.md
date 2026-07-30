# Smart Farm Platform (스마트팜 플랫폼)

통합 스마트팜 관리 시스템: React Frontend, Spring Boot Backend, FastAPI AI Server, MySQL Database, Nginx Reverse Proxy.

## 🚀 quick Start (로컬 개발 환경 실행)

### 1. 환경 변수 설정
```bash
cp .env.example .env
```

### 2. Docker Compose로 전 서비스 실행
```bash
docker-compose -f docker-compose.local.yml up --build -d
```

### 3. 서비스 접속 URL
- **Frontend (Web UI)**: http://localhost (via Nginx) 또는 http://localhost:3000
- **Backend API**: http://localhost/api 또는 http://localhost:8080
- **AI Server Docs**: http://localhost/ai/docs 또는 http://localhost:8000/docs
- **Database (MySQL)**: `localhost:3306` (`smart_farm`)

---

## 📁 프로젝트 구조
- `frontend/` : React + TypeScript + Vite + Tailwind CSS
- `backend/` : Java 17 + Spring Boot 3 + Spring Data JPA
- `ai/` : Python 3.10 + FastAPI + Scikit-Learn
- `database/` : MySQL 스키마 및 초기화 SQL
- `nginx/` : Nginx 리버스 프록시 설정
- `deploy/` : 배포 스크립트 및 systemd 서비스
- `docs/` : 아키텍처 및 API 명세서 문서
