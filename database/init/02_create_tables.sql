USE `smart_farm`;

-- 1. Member (사용자 Table)
CREATE TABLE IF NOT EXISTS `members` (
    `id` BIGINT AUTO_INCREMENT PRIMARY KEY,
    `email` VARCHAR(100) NOT NULL UNIQUE,
    `password` VARCHAR(255) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `role` VARCHAR(20) NOT NULL DEFAULT 'ROLE_USER',
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 2. Farm (농장 Table)
CREATE TABLE IF NOT EXISTS `farms` (
    `id` BIGINT AUTO_INCREMENT PRIMARY KEY,
    `member_id` BIGINT NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `location` VARCHAR(255),
    `crop_type` VARCHAR(50),
    `area_size` DOUBLE,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (`member_id`) REFERENCES `members`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 3. Sensor (센서 장비 Table)
CREATE TABLE IF NOT EXISTS `sensors` (
    `id` BIGINT AUTO_INCREMENT PRIMARY KEY,
    `farm_id` BIGINT NOT NULL,
    `sensor_code` VARCHAR(50) NOT NULL UNIQUE,
    `sensor_type` VARCHAR(30) NOT NULL, -- TEMPERATURE, HUMIDITY, CO2, SOIL_MOISTURE, LIGHT
    `status` VARCHAR(20) DEFAULT 'ACTIVE',
    `installed_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (`farm_id`) REFERENCES `farms`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 4. Sensor Data (센서 측정 데이터 Table)
CREATE TABLE IF NOT EXISTS `sensor_data` (
    `id` BIGINT AUTO_INCREMENT PRIMARY KEY,
    `sensor_id` BIGINT NOT NULL,
    `value` DOUBLE NOT NULL,
    `unit` VARCHAR(20),
    `measured_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (`sensor_id`) REFERENCES `sensors`(`id`) ON DELETE CASCADE,
    INDEX `idx_sensor_measured` (`sensor_id`, `measured_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 5. Device (제어 장치 Table - 급수기, 환풍기 등)
CREATE TABLE IF NOT EXISTS `devices` (
    `id` BIGINT AUTO_INCREMENT PRIMARY KEY,
    `farm_id` BIGINT NOT NULL,
    `device_code` VARCHAR(50) NOT NULL UNIQUE,
    `device_name` VARCHAR(100) NOT NULL,
    `device_type` VARCHAR(30) NOT NULL, -- WATER_PUMP, FAN, LED, HEATER
    `status` VARCHAR(20) DEFAULT 'OFF', -- ON, OFF, AUTO
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (`farm_id`) REFERENCES `farms`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 6. Device Log (장치 작동 로그 Table)
CREATE TABLE IF NOT EXISTS `device_logs` (
    `id` BIGINT AUTO_INCREMENT PRIMARY KEY,
    `device_id` BIGINT NOT NULL,
    `action` VARCHAR(20) NOT NULL, -- TURN_ON, TURN_OFF
    `triggered_by` VARCHAR(30) NOT NULL, -- MANUAL, AI_AUTO, SCHEDULED
    `executed_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (`device_id`) REFERENCES `devices`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 7. AI Prediction & Recommendation (AI 분석/추천 결과 Table)
CREATE TABLE IF NOT EXISTS `predictions` (
    `id` BIGINT AUTO_INCREMENT PRIMARY KEY,
    `farm_id` BIGINT NOT NULL,
    `prediction_type` VARCHAR(50) NOT NULL, -- CROP_YIELD, DISEASE_RISK, OPTIMAL_HARVEST
    `result_json` TEXT NOT NULL,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (`farm_id`) REFERENCES `farms`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
