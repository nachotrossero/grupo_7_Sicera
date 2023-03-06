
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sicera_db`
--

-- --------------------------------------------------------
DROP DATABASE IF EXISTS sicera_db;
CREATE DATABASE sicera_db;
USE sicera_db;
--
-- Estructura de tabla para la tabla `cart`
--

CREATE TABLE `cart` (
  `id_cart` int(11) NOT NULL,
  `product_quantity` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `uptade_at` datetime NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `id_order` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product`
--

CREATE TABLE `product` (
  `id_product` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `price` int(11) NOT NULL,
  `description` varchar(500) NOT NULL,
  `rating` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `country` varchar(45) NOT NULL,
  `is_active` tinyint(4) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `brand` varchar(45) NOT NULL,
  `cellar` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `product`
--

INSERT INTO `product` (`id_product`, `name`, `price`, `description`, `rating`, `image`, `country`, `is_active`, `created_at`, `updated_at`, `brand`, `cellar`) VALUES
(1, 'Sidra 1888', 1873, '\"Sidra 1888 tiene como ingrediente principal manzanas del Alto Valle de Río Negro que son el corazón y la esencia de la marca. Al estar elaborada solo a base de manzanas seleccionadas del tipo Red Delicious, esta sidra ofrece notas dulces, refrescantes y amigables al paladar.', 4, '/img/products/1888-product-1.jpg', 'argentina', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '1888', 'Sáenz Briones'),
(2, 'Sidra La Victoria', 1540, 'La Victoria está elaborada a partir de una cuidadosa selección de su materia prima, la manzana. Basada en una receta tradicional, conserva su esencia de generación en generación, brindando un sabor natural, frutal y burbujeante, agradable para todos e ideal para cualquier ocasión.', 2, '/img/products/la-victoria-product-2.jpg', 'argentina', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'La Victoria', 'Sáenz Briones'),
(3, 'Sidra Real', 1615, 'La Sidra Real Etiqueta Blanca es un clásico argentino que no puede faltar en las mesas de Navidad. Sidra Real Argentina elabora desde hace más de un siglo la mejor sidra. Para acompañarte a disfrutar los buenos momentos con tu familia, tus amigos de siempre. El proceso de elaboración de Sidra Real se distingue por la cuidadosa selección de manzanas Red Delicious y Granny Smith. Las mismas rojas y verdes que consumimos a diario, que realizan las cualidades del producto final logrando una mezcla refrescante, aromática y ligera.', 3, '/img/products/real-product-3.png', 'argentina', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Real', 'Sáenz Briones'),
(4, 'Sidra orgánica Pulku', 700, 'Pülku Dulce es la sidra que conocemos en Argentina, pero el cuidado de la fruta y de la producción que hacemos en Chacra Don Simón permite que sea una sidra natural, sin saborizantes ni esencias químicas, con fruta orgánica, poca azúcar y libre de TACC. Es perfecta para acompañar postres y brindar en las fiestas, sin dejar de disfrutar los aromas y el sabor natural de la manzana.', 1, '/img/products/sidra-pulku-organica.jpg', 'argentina', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Pulku', 'Pulku'),
(5, 'Sidra 1930 Dolce Saccani', 1180, '1930, es la Sidra premium de Bodegas Cuvillier, originaria de la Familia Saccani que lleva sesenta años de historia en producción de sidras y jugos naturales. Es un producto elegante, y de calidad superior, su naríz es pura de manzana frescas prensadas, lleva un paladar frutado con bajo contenido de azúcar; a su vez es seca y con una leve acidez al final, la cual le otorga un perfecto equilibrio para acompañar comidas como quesos semi duros con frutas frescas y secas, entre otros.', 4, '/img/products/Sidra-1930-Saccani-Extra-Dulce.jpg', 'argentina', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', '1930', 'Cuvillier');
(6, 'Sidra Demisec', 850, 'La tradicional límpida, fresca dulce y aromática, que invita al brindis ó simplemente al gozoso placer de beberla.', 3, '/img/products/sidra-rama-caida-.jpg', 'argentina', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Rma Caida', 'Rama Caisada');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `purchase_order`
--

CREATE TABLE `purchase_order` (
  `id_order` int(11) NOT NULL,
  `final_price` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `uptade_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(100) NOT NULL,
  `image` varchar(45) NOT NULL,
  `is_active` tinyint(4) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `is_admin` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `first_name`, `last_name`, `email`, `password`, `image`, `is_active`, `created_at`, `updated_at`, `is_admin`) VALUES
(5, 'coso', 'coso', 'coso@coso.com', '$2a$10$toRnfQTef5OoLCxXYmX8eu0m43pfvL9NeATV5YNKCBPiXEHdCmGFy', '/img/users/image-1675207974976-456056461.jpg', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id_cart`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_product` (`id_product`),
  ADD KEY `id_order` (`id_order`);

--
-- Indices de la tabla `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id_product`);

--
-- Indices de la tabla `purchase_order`
--
ALTER TABLE `purchase_order`
  ADD PRIMARY KEY (`id_order`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cart`
--
ALTER TABLE `cart`
  MODIFY `id_cart` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `product`
--
ALTER TABLE `product`
  MODIFY `id_product` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `purchase_order`
--
ALTER TABLE `purchase_order`
  MODIFY `id_order` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `id_order` FOREIGN KEY (`id_order`) REFERENCES `purchase_order` (`id_order`),
  ADD CONSTRAINT `id_product` FOREIGN KEY (`id_product`) REFERENCES `product` (`id_product`),
  ADD CONSTRAINT `id_user` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
