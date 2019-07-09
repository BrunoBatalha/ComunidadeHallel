-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 09-Jul-2019 às 23:42
-- Versão do servidor: 10.1.32-MariaDB
-- PHP Version: 7.2.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hallel2`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `administrador`
--

CREATE TABLE `administrador` (
  `idAdm` int(11) NOT NULL,
  `login` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `senha` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `administrador`
--

INSERT INTO `administrador` (`idAdm`, `login`, `email`, `senha`) VALUES
(1, 'login', 'email@gmail.com', '123123'),
(12, 'login2', 'email2@gmail.com', '123123');

-- --------------------------------------------------------

--
-- Estrutura da tabela `evento`
--

CREATE TABLE `evento` (
  `idEvento` int(11) NOT NULL,
  `nomeEvento` varchar(100) NOT NULL,
  `descricaoEvento` text NOT NULL,
  `dataEvento` date NOT NULL,
  `horaEvento` time NOT NULL,
  `idAdm` int(11) NOT NULL,
  `localEvento` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `evento`
--

INSERT INTO `evento` (`idEvento`, `nomeEvento`, `descricaoEvento`, `dataEvento`, `horaEvento`, `idAdm`, `localEvento`) VALUES
(1, 'asda', 'asda', '2200-12-12', '12:12:00', 1, '21212'),
(2, 'evetnto', 'desc', '2001-09-22', '12:50:00', 1, 'local'),
(3, 'evento top', 'asda', '2001-09-22', '19:50:00', 12, 'local');

-- --------------------------------------------------------

--
-- Estrutura da tabela `pedidooracao`
--

CREATE TABLE `pedidooracao` (
  `idPedido` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `mensagem` text NOT NULL,
  `visualizado` tinyint(1) NOT NULL DEFAULT '0',
  `idAdm` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `administrador`
--
ALTER TABLE `administrador`
  ADD PRIMARY KEY (`idAdm`),
  ADD UNIQUE KEY `login` (`login`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `evento`
--
ALTER TABLE `evento`
  ADD PRIMARY KEY (`idEvento`),
  ADD UNIQUE KEY `nomeEvento` (`nomeEvento`),
  ADD KEY `FK_evento_adm` (`idAdm`) USING BTREE;

--
-- Indexes for table `pedidooracao`
--
ALTER TABLE `pedidooracao`
  ADD PRIMARY KEY (`idPedido`),
  ADD KEY `FK_pedido_adm` (`idAdm`) USING BTREE;

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `administrador`
--
ALTER TABLE `administrador`
  MODIFY `idAdm` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `evento`
--
ALTER TABLE `evento`
  MODIFY `idEvento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `pedidooracao`
--
ALTER TABLE `pedidooracao`
  MODIFY `idPedido` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `evento`
--
ALTER TABLE `evento`
  ADD CONSTRAINT `FK_idAdm` FOREIGN KEY (`idAdm`) REFERENCES `administrador` (`idAdm`);

--
-- Limitadores para a tabela `pedidooracao`
--
ALTER TABLE `pedidooracao`
  ADD CONSTRAINT `FK_pedido` FOREIGN KEY (`idAdm`) REFERENCES `administrador` (`idAdm`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
