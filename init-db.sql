-- Adminer 5.2.1 MySQL 9.3.0 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

-- CREATE DATABASE `mtis-grupal` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `mtis-grupal`;

DROP TABLE IF EXISTS `Usuario`;
CREATE TABLE `Usuario` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(30) NOT NULL,
  `Apellidos` varchar(60) NOT NULL,
  `DNI` varchar(10) NOT NULL,
  `Telefono` varchar(13) NOT NULL,
  `Correo` varchar(50) NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `DNI` (`DNI`)
);

INSERT INTO `Usuario` (`ID`, `Nombre`, `Apellidos`, `DNI`, `Telefono`, `Correo`) VALUES
(1,	'Raúl',	'Fernández López',	'13232020M',	'722118305',	'raulfernandez@gmail.com'),
(2,	'Paula',	'Giménez Jiménez',	'67970954C',	'608922065',	'paulagj@gmail.com'),
(3,	'Jose María',	'Domínguez Ramos',	'42469628J',	'720677332',	'josemdominguez@gmail.com'),
(4,	'Raquel',	'García López',	'87011952P',	'669966219',	'raquelgarcia@gmail.com');


DROP TABLE IF EXISTS `Perito`;
CREATE TABLE `Perito` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `DNI` varchar(10) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Apellidos` varchar(255) NOT NULL,
  `Num_colegiado` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `DNI` (`DNI`),
  UNIQUE KEY `Num_colegiado` (`Num_colegiado`)
);

INSERT INTO `Perito` (`ID`, `DNI`, `Nombre`, `Apellidos`, `Num_colegiado`) VALUES
(1,	'19252682A',	'Javier',	'López Maestre',	'839053016278'),
(2,	'15843495Z',	'Claudia',	'Pastor García',	'836401728395'),
(3,	'87606879V',	'Patricia',	'Pérez Pérez',	'840326349619'),
(4,	'96965360M',	'Eric',	'Valentín Callejo',	'283456201734');

DROP TABLE IF EXISTS `Tipo_Seguro`;
CREATE TABLE `Tipo_Seguro` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(100) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `Nombre` (`Nombre`)
);

INSERT INTO `Tipo_Seguro` (`ID`, `Nombre`) VALUES
(1, 'Todo riesgo'),
(2, 'Terceros');

DROP TABLE IF EXISTS `Tipo_Incidencia`;
CREATE TABLE `Tipo_Incidencia` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(255) NOT NULL,
  `Seguro_Cubre_Nombre` varchar(100) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `Nombre` (`Nombre`),
  CONSTRAINT `Tipo_Incidencia_ibfk_1` FOREIGN KEY (`Seguro_Cubre_ID`) REFERENCES `Tipo_Seguro` (`ID`) ON DELETE CASCADE
);


DROP TABLE IF EXISTS `Seguro`;
CREATE TABLE `Seguro` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `DNI_Usuario` varchar(10) NOT NULL,
  `Tipo_Seguro` varchar(100) NOT NULL,
  `Fecha_inicio` date NOT NULL,
  `Fecha_fin` date NOT NULL,
  `Precio` double NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `DNI_Usuario` (`DNI_Usuario`),
  KEY `Tipo_Seguro` (`Tipo_Seguro`),
  CONSTRAINT `Seguro_ibfk_1` FOREIGN KEY (`DNI_Usuario`) REFERENCES `Usuario` (`DNI`),
  CONSTRAINT `Seguro_ibfk_2` FOREIGN KEY (`Tipo_Seguro`) REFERENCES `Tipo_Seguro` (`Nombre`) ON DELETE CASCADE ON UPDATE CASCADE
);


INSERT INTO `Seguro` (`ID`, `DNI_Usuario`, `Tipo_Seguro`, `Fecha_inicio`, `Fecha_fin`, `Precio`) VALUES
(1,	'67970954C',	'Todo riesgo',	'2023-01-01',	'2026-01-01',	1200),
(2,	'13232020M',	'Terceros',	'2025-04-01',	'2026-04-01',	300),
(3,	'42469628J',	'Todo riesgo',	'2025-01-01',	'2026-01-01',	6000),
(4,	'87011952P',	'Terceros',	'2025-01-01',	'2030-01-01',	7000);

DROP TABLE IF EXISTS `Incidencia`;
CREATE TABLE `Incidencia` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Titulo` varchar(255) NOT NULL,
  `Descripcion` varchar(1000) NOT NULL,
  `DNI_Usuario` varchar(10) NOT NULL,
  `Fecha` date NOT NULL,
  `Evidencias` varchar(1000) DEFAULT NULL,
  `Latitud` DECIMAL(11, 8) NOT NULL,
  `Longitud` DECIMAL(11, 8) NOT NULL,
  `Tipo_Incidencia_ID` int NOT NULL,
  `Poliza_ID` int NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `DNI_Usuario` (`DNI_Usuario`),
  CONSTRAINT `Incidencia_ibfk_1` FOREIGN KEY (`DNI_Usuario`) REFERENCES `Usuario` (`DNI`),
  CONSTRAINT `Incidencia_ibfk_2` FOREIGN KEY (`Poliza_ID`) REFERENCES `Seguro` (`ID`),
  CONSTRAINT `Incidencia_ibfk_3` FOREIGN KEY (`Tipo_Incidencia_ID`) REFERENCES `Tipo_Incidencia` (`ID`) ON DELETE CASCADE
);


DROP TABLE IF EXISTS `Informe`;
CREATE TABLE `Informe` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Perito_asociado` varchar(255) NOT NULL,
  `DNI_Usuario` varchar(10) NOT NULL,
  `ID_Incidencia` int NOT NULL,
  `Mensaje` varchar(1000) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `Perito_asociado` (`Perito_asociado`),
  KEY `DNI_Usuario` (`DNI_Usuario`),
  KEY `ID_Incidencia` (`ID_Incidencia`),
  CONSTRAINT `Informe_ibfk_1` FOREIGN KEY (`Perito_asociado`) REFERENCES `Perito` (`Num_colegiado`),
  CONSTRAINT `Informe_ibfk_2` FOREIGN KEY (`DNI_Usuario`) REFERENCES `Usuario` (`DNI`),
  CONSTRAINT `Informe_ibfk_3` FOREIGN KEY (`ID_Incidencia`) REFERENCES `Incidencia` (`ID`) ON DELETE CASCADE
);


DROP TABLE IF EXISTS `Fraude`;
CREATE TABLE `Fraude` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `DNI_Usuario` varchar(10) NOT NULL,
  `ID_Informe` int NOT NULL,
  `Es_fraude` tinyint NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `DNI_Usuario` (`DNI_Usuario`),
  KEY `ID_Informe` (`ID_Informe`),
  CONSTRAINT `Fraude_ibfk_1` FOREIGN KEY (`DNI_Usuario`) REFERENCES `Usuario` (`DNI`),
  CONSTRAINT `Fraude_ibfk_2` FOREIGN KEY (`ID_Informe`) REFERENCES `Informe` (`ID`) ON DELETE CASCADE
);

DROP TABLE IF EXISTS `Reclamaciones`;
CREATE TABLE `Reclamaciones` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `DNI_Usuario` varchar(10) NOT NULL,
  `ID_Incidencia` int NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `DNI_Usuario` (`DNI_Usuario`),
  KEY `ID_Incidencia` (`ID_Incidencia`),
  CONSTRAINT `Reclamaciones_ibfk_1` FOREIGN KEY (`DNI_Usuario`) REFERENCES `Usuario` (`DNI`),
  CONSTRAINT `Reclamaciones_ibfk_2` FOREIGN KEY (`ID_Incidencia`) REFERENCES `Incidencia` (`ID`) ON DELETE CASCADE
);


DROP TABLE IF EXISTS `Seguro_coche`;
CREATE TABLE `Seguro_coche` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `ID_Seguro` int NOT NULL,
  `Marca` varchar(255) NOT NULL,
  `Modelo` varchar(255) NOT NULL,
  `Matricula` varchar(20) NOT NULL,
  `Condiciones` varchar(1000) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `ID_Seguro` (`ID_Seguro`),
  CONSTRAINT `Seguro_coche_ibfk_1` FOREIGN KEY (`ID_Seguro`) REFERENCES `Seguro` (`ID`) ON DELETE CASCADE
);

INSERT INTO `Seguro_coche` (`ID`, `ID_Seguro`, `Marca`, `Modelo`, `Matricula`, `Condiciones`) VALUES
(1,	1,	'Mazda',	'3',	'9633MDL',	'Condiciones normales'),
(2,	3,	'Audi',	'RS6',	'0623LDD',	'Muy buenas condiciones');

DROP TABLE IF EXISTS `Seguro_hogar`;
CREATE TABLE `Seguro_hogar` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `ID_Seguro` int NOT NULL,
  `Direccion` varchar(255) NOT NULL,
  `Condiciones` varchar(1000) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `ID_Seguro` (`ID_Seguro`),
  CONSTRAINT `Seguro_hogar_ibfk_1` FOREIGN KEY (`ID_Seguro`) REFERENCES `Seguro` (`ID`) ON DELETE CASCADE
);

INSERT INTO `Seguro_hogar` (`ID`, `ID_Seguro`, `Direccion`, `Condiciones`) VALUES
(1,	2,	'Calle Madrid, 33, 4A',	'Buenas condiciones'),
(2,	4,	'Calle Alicante, 10',	'Condiciones normales');


/*
DROP TABLE IF EXISTS `Parte`;
CREATE TABLE `Parte` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Incidencia_ID` int NOT NULL,
  `Poliza_ID` int NOT NULL,
  `Descripcion` varchar(2000) NOT NULL,
  `Estado` varchar(20) NOT NULL DEFAULT 'Pendiente',
  PRIMARY KEY (`ID`),
  KEY `Incidencia_ID` (`Incidencia_ID`),
  KEY `Poliza_ID` (`Poliza_ID`),
  CONSTRAINT `Parte_ibfk_1` FOREIGN KEY (`Incidencia_ID`) REFERENCES `Incidencia` (`ID`) ON DELETE CASCADE,
  CONSTRAINT `Parte_ibfk_2` FOREIGN KEY (`Poliza_ID`) REFERENCES `Seguro` (`ID`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `Parte` (`ID`, `Incidencia_ID`, `Poliza_ID`, `Descripcion`) VALUES
(1,	1,	1,	'Descripción de los daños del incidente'),
(2,	1,	1,	'Descripción de los daños del incidente'),
(3,	1,	1,	'Descripción de los daños del incidente');
*/

DROP TABLE IF EXISTS `Fraude`;
CREATE TABLE `Fraude` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `DNI_Usuario` varchar(10) NOT NULL,
  `ID_Informe` int NOT NULL,
  `Es_fraude` tinyint NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `DNI_Usuario` (`DNI_Usuario`),
  KEY `ID_Informe` (`ID_Informe`),
  CONSTRAINT `Fraude_ibfk_1` FOREIGN KEY (`DNI_Usuario`) REFERENCES `Usuario` (`DNI`),
  CONSTRAINT `Fraude_ibfk_2` FOREIGN KEY (`ID_Informe`) REFERENCES `Informe` (`ID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 2025-05-11 11:00:04 UTC

