# Database Setup & Migration Guide

## Directory Structure
- `init/01_create_database.sql` : DB 생성 및 권한 부여
- `init/02_create_tables.sql` : 테이블 DDL (members, farms, sensors, sensor_data, devices, device_logs, predictions)
- `init/03_insert_sample_data.sql` : 초기 테스팅용 샘플 데이터 DML
- `schema/smart_farm_erd.sql` : ERD 관련 SQL 스키마 정의

Docker Compose 실행 시 `/docker-entrypoint-initdb.d` 디렉터리에 마운트되어 컨테이너 최초 생성 시 자동 실행됩니다.
