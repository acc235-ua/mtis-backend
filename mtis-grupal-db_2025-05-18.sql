-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3307
-- Tiempo de generación: 18-05-2025 a las 14:03:11
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mtis-grupal`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fraude`
--

CREATE TABLE `fraude` (
  `ID` int NOT NULL,
  `DNI_Usuario` varchar(10) NOT NULL,
  `ID_Incidencia` int NOT NULL,
  `Es_fraude` tinyint NOT NULL,
  `Titulo` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `fraude`
--

INSERT INTO `fraude` (`ID`, `DNI_Usuario`, `ID_Incidencia`, `Es_fraude`, `Titulo`) VALUES
(3, '13232020M', 1, 1, 'Robo de cartera');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `incidencia`
--

CREATE TABLE `incidencia` (
  `ID` int NOT NULL,
  `Titulo` varchar(255) NOT NULL,
  `Descripcion` varchar(1000) NOT NULL,
  `DNI_Usuario` varchar(10) NOT NULL,
  `Fecha` date NOT NULL,
  `Evidencias` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `incidencia`
--

INSERT INTO `incidencia` (`ID`, `Titulo`, `Descripcion`, `DNI_Usuario`, `Fecha`, `Evidencias`) VALUES
(1, 'Robo de cartera', 'Me han robado la cartera en el metro', '13232020M', '2025-04-01', 'foto1.jpg'),
(2, 'Robo de cartera', 'Otra vez el mismo incidente en otro sitio', '13232020M', '2025-05-01', 'foto2.jpg'),
(3, 'Daño en vehículo', 'Golpe en la puerta del coche', '13232020M', '2025-02-15', 'foto3.jpg'),
(4, 'Robo de cartera', 'Me han robado en el supermercado', '13232020M', '2024-12-01', 'foto4.jpg'),
(5, 'Daño en vehículo', 'Otro daño similar en el coche', '13232020M', '2025-04-10', 'foto5.jpg'),
(6, 'Robo de cartera', 'Me han robado la cartera en el metro', '13232020M', '2025-05-01', 'foto6.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `informe`
--

CREATE TABLE `informe` (
  `ID` int NOT NULL,
  `Perito_asociado` varchar(255) NOT NULL,
  `DNI_Usuario` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ID_Incidencia` int NOT NULL,
  `Mensaje` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `perito`
--

CREATE TABLE `perito` (
  `ID` int NOT NULL,
  `DNI` varchar(10) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Apellidos` varchar(255) NOT NULL,
  `Num_colegiado` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `perito`
--

INSERT INTO `perito` (`ID`, `DNI`, `Nombre`, `Apellidos`, `Num_colegiado`) VALUES
(1, '19252682A', 'Javier', 'López Maestre', '839053016278'),
(2, '15843495Z', 'Claudia', 'Pastor García', '836401728395'),
(3, '87606879V', 'Patricia', 'Pérez Pérez', '840326349619'),
(4, '96965360M', 'Eric', 'Valentín Callejo', '283456201734');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `seguro`
--

CREATE TABLE `seguro` (
  `ID` int NOT NULL,
  `DNI_Usuario` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Tipo` varchar(1000) NOT NULL,
  `Fecha_inicio` date NOT NULL,
  `Fecha_fin` date NOT NULL,
  `Precio` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `seguro`
--

INSERT INTO `seguro` (`ID`, `DNI_Usuario`, `Tipo`, `Fecha_inicio`, `Fecha_fin`, `Precio`) VALUES
(1, '67970954C', 'A todo riesgo, franquicia 500 euros', '2023-01-01', '2026-01-01', 1200),
(2, '13232020M', 'Terceros', '2025-04-01', '2026-04-01', 300),
(3, '42469628J', 'Todo riesgo', '2025-01-01', '2026-01-01', 6000),
(4, '87011952P', 'Terceros', '2025-01-01', '2030-01-01', 7000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `seguro_coche`
--

CREATE TABLE `seguro_coche` (
  `ID` int NOT NULL,
  `ID_Seguro` int NOT NULL,
  `Marca` varchar(255) NOT NULL,
  `Modelo` varchar(255) NOT NULL,
  `Matricula` varchar(20) NOT NULL,
  `Condiciones` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `seguro_coche`
--

INSERT INTO `seguro_coche` (`ID`, `ID_Seguro`, `Marca`, `Modelo`, `Matricula`, `Condiciones`) VALUES
(1, 1, 'Mazda', '3', '9633MDL', 'Condiciones normales'),
(2, 3, 'Audi', 'RS6', '0623LDD', 'Muy buenas condiciones');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `seguro_hogar`
--

CREATE TABLE `seguro_hogar` (
  `ID` int NOT NULL,
  `ID_Seguro` int NOT NULL,
  `Direccion` varchar(255) NOT NULL,
  `Condiciones` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `seguro_hogar`
--

INSERT INTO `seguro_hogar` (`ID`, `ID_Seguro`, `Direccion`, `Condiciones`) VALUES
(1, 2, 'Calle Madrid, 33, 4A', 'Buenas condiciones'),
(2, 4, 'Calle Alicante, 10', 'Condiciones normales');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `ID` int NOT NULL,
  `Nombre` varchar(30) NOT NULL,
  `Apellidos` varchar(60) NOT NULL,
  `DNI` varchar(10) NOT NULL,
  `Telefono` varchar(13) NOT NULL,
  `Correo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`ID`, `Nombre`, `Apellidos`, `DNI`, `Telefono`, `Correo`) VALUES
(1, 'Raúl', 'Fernández López', '13232020M', '722118305', 'raulfernandez@gmail.com'),
(2, 'Paula', 'Giménez Jiménez', '67970954C', '608922065', 'paulagj@gmail.com'),
(3, 'Jose María', 'Domínguez Ramos', '42469628J', '720677332', 'josemdominguez@gmail.com'),
(4, 'Raquel', 'García López', '87011952P', '669966219', 'raquelgarcia@gmail.com');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `fraude`
--
ALTER TABLE `fraude`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `DNI_Usuario` (`DNI_Usuario`),
  ADD KEY `ID_Informe` (`ID_Incidencia`);

--
-- Indices de la tabla `incidencia`
--
ALTER TABLE `incidencia`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `DNI_Usuario` (`DNI_Usuario`);

--
-- Indices de la tabla `informe`
--
ALTER TABLE `informe`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `Perito_asociado` (`Perito_asociado`),
  ADD KEY `DNI_Usuario` (`DNI_Usuario`),
  ADD KEY `ID_Incidencia` (`ID_Incidencia`);

--
-- Indices de la tabla `perito`
--
ALTER TABLE `perito`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `DNI` (`DNI`),
  ADD UNIQUE KEY `Num_colegiado` (`Num_colegiado`);

--
-- Indices de la tabla `seguro`
--
ALTER TABLE `seguro`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `DNI_Usuario` (`DNI_Usuario`);

--
-- Indices de la tabla `seguro_coche`
--
ALTER TABLE `seguro_coche`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ID_Seguro` (`ID_Seguro`);

--
-- Indices de la tabla `seguro_hogar`
--
ALTER TABLE `seguro_hogar`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ID_Seguro` (`ID_Seguro`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `DNI` (`DNI`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `fraude`
--
ALTER TABLE `fraude`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `incidencia`
--
ALTER TABLE `incidencia`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `informe`
--
ALTER TABLE `informe`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `perito`
--
ALTER TABLE `perito`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `seguro`
--
ALTER TABLE `seguro`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `seguro_coche`
--
ALTER TABLE `seguro_coche`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `seguro_hogar`
--
ALTER TABLE `seguro_hogar`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `fraude`
--
ALTER TABLE `fraude`
  ADD CONSTRAINT `FK_Fraude_Incidencia` FOREIGN KEY (`ID_Incidencia`) REFERENCES `incidencia` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Fraude_ibfk_1` FOREIGN KEY (`DNI_Usuario`) REFERENCES `usuario` (`DNI`);

--
-- Filtros para la tabla `incidencia`
--
ALTER TABLE `incidencia`
  ADD CONSTRAINT `Incidencia_ibfk_1` FOREIGN KEY (`DNI_Usuario`) REFERENCES `usuario` (`DNI`);

--
-- Filtros para la tabla `informe`
--
ALTER TABLE `informe`
  ADD CONSTRAINT `Informe_ibfk_1` FOREIGN KEY (`Perito_asociado`) REFERENCES `perito` (`Num_colegiado`),
  ADD CONSTRAINT `Informe_ibfk_2` FOREIGN KEY (`DNI_Usuario`) REFERENCES `usuario` (`DNI`),
  ADD CONSTRAINT `Informe_ibfk_3` FOREIGN KEY (`ID_Incidencia`) REFERENCES `incidencia` (`ID`) ON DELETE CASCADE;

--
-- Filtros para la tabla `seguro`
--
ALTER TABLE `seguro`
  ADD CONSTRAINT `Seguro_ibfk_1` FOREIGN KEY (`DNI_Usuario`) REFERENCES `usuario` (`DNI`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `seguro_coche`
--
ALTER TABLE `seguro_coche`
  ADD CONSTRAINT `Seguro_coche_ibfk_1` FOREIGN KEY (`ID_Seguro`) REFERENCES `seguro` (`ID`) ON DELETE CASCADE;

--
-- Filtros para la tabla `seguro_hogar`
--
ALTER TABLE `seguro_hogar`
  ADD CONSTRAINT `Seguro_hogar_ibfk_1` FOREIGN KEY (`ID_Seguro`) REFERENCES `seguro` (`ID`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
