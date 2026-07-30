USE `smart_farm`;

-- Insert Initial Sample User (password: password123)
INSERT INTO `members` (`id`, `email`, `password`, `name`, `role`) VALUES
(1, 'admin@smartfarm.com', '$2a$10$e8vK1N1l1b.Z7qU1E.1X.uN8G6c6f6Z6e6f6g6h6i6j6k6l6m6n6', '스마트팜 관리자', 'ROLE_ADMIN'),
(2, 'farmer@smartfarm.com', '$2a$10$e8vK1N1l1b.Z7qU1E.1X.uN8G6c6f6Z6e6f6g6h6i6j6k6l6m6n6', '김농부', 'ROLE_USER');

-- Insert Initial Farm
INSERT INTO `farms` (`id`, `member_id`, `name`, `location`, `crop_type`, `area_size`) VALUES
(1, 2, '제1 온실 (딸기)', '전라남도 나주시 봉황면', 'Strawberry', 350.5);

-- Insert Sensors
INSERT INTO `sensors` (`id`, `farm_id`, `sensor_code`, `sensor_type`, `status`) VALUES
(1, 1, 'SENS-TEMP-001', 'TEMPERATURE', 'ACTIVE'),
(2, 1, 'SENS-HUM-001', 'HUMIDITY', 'ACTIVE'),
(3, 1, 'SENS-CO2-001', 'CO2', 'ACTIVE');

-- Insert Sample Sensor Data
INSERT INTO `sensor_data` (`sensor_id`, `value`, `unit`) VALUES
(1, 24.5, '°C'),
(2, 65.2, '%'),
(3, 450.0, 'ppm');

-- Insert Devices
INSERT INTO `devices` (`id`, `farm_id`, `device_code`, `device_name`, `device_type`, `status`) VALUES
(1, 1, 'DEV-PUMP-001', '스마트 관수 펌프', 'WATER_PUMP', 'OFF'),
(2, 1, 'DEV-FAN-001', '자동 환풍기', 'FAN', 'ON');
