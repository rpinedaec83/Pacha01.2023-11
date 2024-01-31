
CREATE TABLE `Mascota_log` (
  `id` int NOT NULL,
  `Nombre` varchar(255) NOT NULL,
  `fechaNacimiento` date DEFAULT NULL,
  `idEspecie` int NOT NULL,
  `idRaza` int NOT NULL,
  `idSexo` int NOT NULL,
  `idPropietario` int NOT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  `usuarioCreacion` int NOT NULL,
  `fechaCreacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `usuarioModificacion` int DEFAULT NULL,
  `fechaModificacion` datetime DEFAULT NULL,
  operacion varchar(1) not null,
  usuario varchar(100) not null
)
