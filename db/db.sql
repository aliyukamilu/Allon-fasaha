-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 05, 2022 at 01:38 PM
-- Server version: 10.3.36-MariaDB
-- PHP Version: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `steazhex_allonfasaha`
--

-- --------------------------------------------------------

--
-- Table structure for table `access_students`
--

CREATE TABLE `access_students` (
  `id` int(11) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `nationality` varchar(50) NOT NULL,
  `state` varchar(200) NOT NULL,
  `last_seen` varchar(50) DEFAULT NULL,
  `password` varchar(15) NOT NULL,
  `lga` varchar(200) NOT NULL,
  `center_id` int(11) NOT NULL,
  `img` longtext DEFAULT NULL,
  `age` varchar(100) NOT NULL,
  `edu_background` varchar(100) NOT NULL,
  `hash_pin` longtext NOT NULL,
  `timeIn` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `access_students`
--

INSERT INTO `access_students` (`id`, `first_name`, `last_name`, `nationality`, `state`, `last_seen`, `password`, `lga`, `center_id`, `img`, `age`, `edu_background`, `hash_pin`, `timeIn`) VALUES
(54, 'new', 'new', 'Nigeria', 'Kano', NULL, '12345', 'Nassarawa', 4, NULL, 'A', '', '625d99e12c5a1', '2022-04-18 17:03:29'),
(71, 'Ibrahim', 'Bilyaminu', 'Nigeria', 'Kano', NULL, '12345', 'Ajingi', 27, NULL, '10', 'Dropout Attended school to primary 4', '63049be42fedd', '2022-08-23 09:20:36'),
(72, 'Zahraddeen ', 'Awwal', 'Nigeria', 'Kano', NULL, '12345', 'Ajingi', 27, NULL, '16', 'Dropout Attended to primary 5', '63049d3e1208d', '2022-08-23 09:26:22'),
(73, 'Isa ', 'Shuaibu', 'Nigeria', 'Bauchi', NULL, '12345', 'Ajingi', 27, NULL, '16', 'Never attended school', '63049e4ddbc37', '2022-08-23 09:30:53'),
(74, 'Ibrahim', 'Saidu', 'Nigeria', 'Kano', NULL, '12345', 'Ajingi', 27, NULL, '11', 'Dropout Attended to primary 3', '63049f2468b5f', '2022-08-23 09:34:28'),
(75, 'Alamin ', 'Hamisu', 'Nigeria', 'Kano', NULL, '12345', 'Ajingi', 27, NULL, '10', 'Never attended school', '6304a023b3b9a', '2022-08-23 09:38:43'),
(76, 'Umar ', 'Abubakar ', 'Nigeria', 'Gombe', NULL, '12345', 'Akko', 27, NULL, '16', 'Attended school to primary 2', '6304a133c37c8', '2022-08-23 09:43:15'),
(77, 'Abbati', 'Abubakar ', 'Nigeria', 'Gombe', NULL, '12345', 'Akko', 27, NULL, '12', 'Attended school to Primary 4', '6304a21f92c41', '2022-08-23 09:47:11'),
(78, 'Kamaluddeen', 'Awwal', 'Nigeria', 'Kano', NULL, '12345', 'Ajingi', 27, NULL, '13', 'Attended school to primary 5', '6304a2eeb88d3', '2022-08-23 09:50:38'),
(79, 'Usman ', 'Sulaiman ', 'Nigeria', 'Kano', NULL, '12345', 'Ajingi', 27, NULL, '10', 'Attended school to primary 4', '6304a3e1b66c6', '2022-08-23 09:54:41'),
(80, 'Ali', 'Sulaiman ', 'Nigeria', 'Kano', NULL, '12345', 'Ajingi', 27, NULL, '10', 'Never attended school', '6304a4b03750c', '2022-08-23 09:58:08'),
(81, 'Yusuf ', 'Alam', 'Nigeria', 'Kano', NULL, '12345', 'Ajingi', 27, NULL, '7', 'Never attended school', '6304a58c462c7', '2022-08-23 10:01:48'),
(82, 'Yusuf ', 'Awwal ', 'Nigeria', 'Kano', NULL, '12345', 'Ajingi', 27, NULL, '11', 'Attended school to primary 4', '6304a6391672d', '2022-08-23 10:04:41'),
(83, 'Ibrahim ', 'Habibu', 'Nigeria', 'Kano', NULL, '12345', 'Ajingi', 27, NULL, '8', 'Attended school to primary 2', '6304a6e73508e', '2022-08-23 10:07:35'),
(84, 'Abdullahi ', 'Saidu', 'Nigeria', 'Kano', NULL, '12345', 'Ajingi', 27, NULL, '10', 'Attended school to primary 3', '6304a794e92a3', '2022-08-23 10:10:28'),
(85, 'Shamsi', 'Habibu', 'Nigeria', 'Kano', NULL, '12345', 'Ajingi', 27, NULL, '10', 'Never attended school', '6304a8cf60590', '2022-08-23 10:15:43'),
(86, 'Abubakar ', 'Yusuf ', 'Nigeria', 'Kano', NULL, '12345', 'Ajingi', 27, NULL, '17', 'Attended school to primary 6', '6304a9ad6df44', '2022-08-23 10:19:25'),
(88, 'Shamsu ', 'Ashiru', 'Nigeria', 'Katsina', NULL, '12345', 'Bakori', 29, NULL, '20', 'Attended school to primary 5', '630c7a42cb314', '2022-08-29 15:54:09'),
(89, 'Attahir', 'Ibrahim', 'Nigeria', 'Katsina', NULL, '12345', 'Bakori', 29, NULL, '20', 'Attended school to primary 5', '630c7ba4add73', '2022-08-29 15:54:14'),
(90, 'Abdulkadir ', 'Ibrahim', 'Nigeria', 'Katsina', NULL, '12345', 'Bakori', 29, NULL, '20', 'Attended school to primary 6', '630c7c8b4da73', '2022-08-29 15:54:19'),
(91, 'Abdulaziz ', 'Abdullahi ', 'Nigeria', 'Katsina', NULL, '12345', 'Bakori', 29, NULL, '20', 'Attended school to primary 6', '630c7d6c33522', '2022-08-29 15:54:25'),
(92, 'Fahad ', 'Shuaibu ', 'Nigeria', 'Katsina', NULL, '12345', 'Bakori', 29, NULL, '22', 'Attended school to Junior Secondary 2', '630c7e3644700', '2022-08-29 15:54:29'),
(93, 'Mustafa', 'Abdullahi ', 'Nigeria', 'Katsina', NULL, '12345', 'Bakori', 29, NULL, '18', 'Attended school to primary 6', '630c7efa2e60f', '2022-08-29 15:54:33'),
(94, 'Salisu ', 'Musa', 'Nigeria', 'Katsina', NULL, '12345', 'Bakori', 29, NULL, '19', 'Attended school to primary 6', '630c7fdad6d35', '2022-08-29 15:54:37'),
(95, 'Nafiu ', 'Ashiru', 'Nigeria', 'Katsina', NULL, '12345', 'Bakori', 29, NULL, '18', 'Attended school to primary 5', '630c809c77061', '2022-08-29 15:54:41'),
(96, 'Sanusi', 'Yusuf ', 'Nigeria', 'Katsina', NULL, '12345', 'Bakori', 29, NULL, '18', 'Attended school to primary 6', '630c8172ad87c', '2022-08-29 15:54:54'),
(97, 'Bashir ', 'Isa ', 'Nigeria', 'Katsina', NULL, '12345', 'Bakori', 29, NULL, '20', 'Attended school to primary 6', '630c826272880', '2022-08-29 15:54:59'),
(98, 'Ismail', 'Ibrahim', 'Nigeria', 'Katsina', NULL, '12345', 'Bakori', 29, NULL, '12', 'Attended school to primary 6', '630c8363be1c5', '2022-08-29 15:55:03'),
(99, 'Tasiu ', 'Abdullahi ', 'Nigeria', 'Katsina', NULL, '12345', 'Bakori', 29, NULL, '15', 'Attended school to primary 6', '630c844b1cca6', '2022-08-29 15:55:08'),
(100, 'Muhammad ', 'Yusuf ', 'Nigeria', 'Katsina', NULL, '12345', 'Bakori', 29, NULL, '13', 'Attended school to primary 6', '630c853267c21', '2022-08-29 15:55:12'),
(101, 'Gaddafi ', 'Musa ', 'Nigeria', 'Katsina', NULL, '12345', 'Bakori', 29, NULL, '13', 'Attended school to primary 2', '630c8605ae2fc', '2022-08-29 15:55:17'),
(109, 'aliyu', 'musa', 'Nigeria', 'Abia', NULL, '12345', 'Ajingi', 27, NULL, '12', 'ssdgsghghs', '630dd29982244', '2022-08-30 09:04:25');

-- --------------------------------------------------------

--
-- Table structure for table `admin_center`
--

CREATE TABLE `admin_center` (
  `id` int(11) NOT NULL,
  `fullname` varchar(200) NOT NULL,
  `region` varchar(200) NOT NULL,
  `country` varchar(200) NOT NULL,
  `state` varchar(200) NOT NULL,
  `lga` varchar(200) NOT NULL,
  `email` varchar(1000) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `role` varchar(255) NOT NULL,
  `center` varchar(255) NOT NULL,
  `password` varchar(200) NOT NULL,
  `timeIn` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin_center`
--

INSERT INTO `admin_center` (`id`, `fullname`, `region`, `country`, `state`, `lga`, `email`, `phone`, `role`, `center`, `password`, `timeIn`) VALUES
(1, 'Mukhtar Kano', '', 'Nigeria', 'Kano', 'Nasarawa', 'mukhtar@gmail.com', '1234567890', 'admin', '', '12345', '2022-08-23 21:56:10'),
(57, '', '', 'Nigeria', 'Kano', 'Gwale', '', '', 'SuperAdmin', '12345', '', '2022-08-29 16:19:43');

-- --------------------------------------------------------

--
-- Table structure for table `assessment`
--

CREATE TABLE `assessment` (
  `id` int(11) NOT NULL,
  `level` int(100) NOT NULL,
  `mode` varchar(30) NOT NULL,
  `level_assN` varchar(100) NOT NULL,
  `module_name` varchar(100) NOT NULL,
  `module` int(20) NOT NULL,
  `assm_unit` int(200) NOT NULL,
  `student_id` varchar(200) NOT NULL,
  `subject_name` varchar(100) NOT NULL,
  `quiz_point` varchar(100) NOT NULL,
  `quiz_unit_point` longtext NOT NULL,
  `highS` varchar(100) NOT NULL,
  `avgS` varchar(100) NOT NULL,
  `trails` int(50) NOT NULL,
  `timeStamp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `assessment`
--

INSERT INTO `assessment` (`id`, `level`, `mode`, `level_assN`, `module_name`, `module`, `assm_unit`, `student_id`, `subject_name`, `quiz_point`, `quiz_unit_point`, `highS`, `avgS`, `trails`, `timeStamp`) VALUES
(38, 1, 'literacy_phonics', '40,40,50,50,50', 'Phonics', 1, 40, '38', 'Literacy', '', '', '40', '40', 2, '2022-07-19 15:58:02'),
(172, 3, 'literacy_phonics', '10,20,20,40', 'Phonics', 1, 10, '3', 'Literacy', '', '', '40', '16.666666666667', 4, '2022-04-24 15:43:29'),
(173, 3, 'literacy_spelling', '40,40,50,50,50', 'Spelling', 1, 50, '3', 'Literacy', '', '', '50', '50', 1, '2022-04-24 15:43:32'),
(175, 1, 'literacy_spelling', '40,40,50,50,50', 'Spelling', 1, 10, '3', 'Literacy', '', '12', '10', '10', 1, '2022-04-24 15:43:37'),
(176, 1, 'literacy_reading', '50,50', 'Reading', 1, 50, '3', 'Literacy', '', '54', '50', '50', 2, '2022-04-24 15:43:40'),
(177, 1, 'literacy_vocabulary', '40,40,50,50,50', 'Vocabulary', 3, 50, '2', 'Literacy', '', '21', '50', '50', 1, '2022-04-24 15:43:43'),
(178, 1, 'literacy_writing', '40', 'Writing', 0, 40, '3', 'Literacy', '', '', '40', '40', 1, '2022-04-24 15:43:46'),
(179, 1, 'literacy_grammar', '40,40,50,50,50', 'Grammar', 0, 50, '3', 'Literacy', '', '', '50', '50', 1, '2022-04-24 15:43:49'),
(180, 1, 'literacy_phonics', '40,40,50,50,50', 'Phonics', 1, 50, '3', 'Literacy', '', '', '50', '50', 1, '2022-04-24 15:43:52'),
(181, 1, 'literacy_reading', '40,40,50,50,50', 'Reading', 1, 40, '3', 'Literacy', '', '', '50', '45', 5, '2022-04-24 15:43:54'),
(182, 2, 'literacy_vocabulary', '50', 'Vocabulary', 1, 50, '2', 'Literacy', '', '21', '50', '50', 1, '2022-04-24 15:43:57'),
(183, 2, 'literacy_writing', '30,15', 'Writing', 2, 30, '3', 'Literacy', '', '43', '30', '30', 1, '2022-04-24 15:43:59'),
(184, 2, 'literacy_grammar', '50,20', 'Grammar', 3, 50, '3', 'Literacy', '', '12', '50', '50', 1, '2022-04-24 15:44:03'),
(185, 1, 'literacy_phonics', '50', 'Phonics', 0, 50, '3', 'Literacy', '', '', '50', '50', 1, '2022-04-24 15:44:06'),
(186, 1, 'literacy_spelling', '50', 'Spelling', 0, 50, '3', 'Literacy', '', '', '50', '50', 1, '2022-04-24 15:44:08'),
(187, 2, 'literacy_reading', '50', 'Reading', 0, 50, '1', 'Literacy', '', '', '50', '50', 1, '2022-04-24 15:44:11'),
(188, 3, 'literacy_vocabulary', '40,40,50,50,50', 'Vocabulary', 1, 50, '2', 'Literacy', '', '21', '50', '50', 1, '2022-04-24 15:44:38'),
(189, 3, 'literacy_writing', '0', 'Writing', 0, 0, '3', 'Literacy', '', '', '0', '0', 1, '2022-04-24 15:44:41'),
(190, 3, 'literacy_grammar', '40', 'Grammar', 2, 40, '2', 'Literacy', '', '11', '40', '40', 1, '2022-04-24 15:44:43'),
(191, 2, 'literacy_phonics', '20,40,50', 'Phonics', 3, 20, '3', 'Literacy', '', '', '50', '30', 3, '2022-04-24 15:44:45'),
(192, 2, 'literacy_reading', '50', 'Reading', 0, 50, '3', 'Literacy', '', '', '50', '50', 1, '2022-04-24 15:44:47'),
(193, 2, 'literacy_vocabulary', '30', 'Vocabulary', 0, 30, '3', 'Literacy', '', '', '30', '30', 1, '2022-04-24 15:44:53'),
(194, 2, 'literacy_writing', '50', 'Writing', 0, 50, '3', 'Literacy', '', '', '50', '50', 1, '2022-04-24 15:44:56'),
(195, 2, 'literacy_grammar', '50', 'Grammar', 0, 50, '3', 'Literacy', '', '', '50', '50', 1, '2022-04-24 15:44:59'),
(196, 1, 'literacy_phonics', '40,50', 'Phonics', 0, 40, '3', 'Literacy', '', '', '50', '40', 2, '2022-04-24 15:45:03'),
(197, 2, 'literacy_reading', '50', 'Reading', 0, 50, '1', 'Literacy', '', '', '50', '50', 1, '2022-04-24 15:45:05'),
(198, 2, 'literacy_writing', '20,50,50', 'Writing', 0, 20, '1', 'Literacy', '', '', '50', '35', 3, '2022-04-24 15:45:08'),
(199, 3, 'literacy_grammar', '50', 'Grammar', 0, 50, '1', 'Literacy', '', '', '50', '50', 1, '2022-04-24 15:45:11'),
(200, 3, 'literacy_phonics', '50,50,50,50', 'Phonics', 0, 50, '1', 'Literacy', '', '', '50', '50', 4, '2022-04-24 15:45:17'),
(201, 2, 'literacy_reading', '50', 'Reading', 1, 50, '54', 'Literacy', '', '', '50', '50', 1, '2022-04-24 16:00:47'),
(202, 2, 'literacy_writing', '40', 'Writing', 1, 40, '54', 'Literacy', '', '', '40', '40', 1, '2022-04-24 16:00:44'),
(203, 2, 'literacy_phonics', '50,50', 'Phonics', 1, 50, '54', 'Literacy', '', '', '50', '50', 2, '2022-04-24 16:00:42'),
(204, 2, 'literacy_spelling', '50', 'Spelling', 1, 50, '54', 'Literacy', '', '', '50', '50', 1, '2022-04-24 16:00:39'),
(205, 1, '', '43,43,43,43,43,43,43,43,43', 'reading', 1, 43, '54', 'literacy', '50,55', '55', '43', '0', 9, '2022-04-24 15:38:10'),
(206, 1, '', '80', 'vocabulary', 1, 80, '54', 'literacy', '80', '80', '80', '80', 1, '2022-04-24 15:38:24'),
(207, 1, '', '80', 'sounds', 1, 80, '54', 'literacy', '80', '80', '80', '80', 1, '2022-04-24 15:37:47'),
(208, 1, '', '80', 'spelling', 1, 80, '54', 'literacy', '80', '80', '80', '80', 1, '2022-04-24 15:37:52');

-- --------------------------------------------------------

--
-- Table structure for table `assigned_center`
--

CREATE TABLE `assigned_center` (
  `id` int(11) NOT NULL,
  `center_id` varchar(1000) NOT NULL,
  `admin_id` int(255) NOT NULL,
  `timeIn` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `c_name` varchar(100) NOT NULL,
  `lesson` varchar(100) NOT NULL,
  `module` varchar(100) NOT NULL,
  `property` varchar(100) NOT NULL,
  `property_name` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `center_assistant`
--

CREATE TABLE `center_assistant` (
  `id` int(11) NOT NULL,
  `fullname` varchar(200) NOT NULL,
  `region` varchar(200) NOT NULL,
  `country` varchar(200) NOT NULL,
  `state` varchar(200) NOT NULL,
  `lga` varchar(200) NOT NULL,
  `email` varchar(1000) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `password` varchar(200) NOT NULL,
  `center_id` int(255) NOT NULL,
  `address` varchar(500) NOT NULL,
  `timeIn` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `center_assistant`
--

INSERT INTO `center_assistant` (`id`, `fullname`, `region`, `country`, `state`, `lga`, `email`, `phone`, `password`, `center_id`, `address`, `timeIn`) VALUES
(1, 'Abu Test', '', 'Nigeria', 'Kano', 'Kumbutso', 'assistant@gmail.com', '876543', ' ', 27, 'Abia', '2022-09-01 14:36:44'),
(2, '', '', '', '', 'Nigeria', '', 'Abak', ' ', 0, 'Abia', '2022-09-01 14:42:50');

-- --------------------------------------------------------

--
-- Table structure for table `centres`
--

CREATE TABLE `centres` (
  `id` int(11) NOT NULL,
  `centre_name` varchar(200) NOT NULL,
  `centre_region` varchar(200) NOT NULL,
  `centre_country` varchar(200) NOT NULL,
  `centre_state` varchar(200) NOT NULL,
  `centre_lga` varchar(200) NOT NULL,
  `center_type` varchar(2) NOT NULL,
  `latitude` varchar(100) NOT NULL,
  `longitude` varchar(100) NOT NULL,
  `timeIn` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `centres`
--

INSERT INTO `centres` (`id`, `centre_name`, `centre_region`, `centre_country`, `centre_state`, `centre_lga`, `center_type`, `latitude`, `longitude`, `timeIn`) VALUES
(27, 'Zawiyar Mal Aminu Gerawa', 'region', 'Nigeria', 'Kano', 'Kumbotso', '0', '', '', '2022-08-23 09:12:22'),
(29, 'Tsangayar Mal Usman Maisaje', 'region', 'Nigeria', 'Kano', 'Nasarawa', '0', '', '', '2022-08-29 08:26:58');

-- --------------------------------------------------------

--
-- Table structure for table `feeding`
--

CREATE TABLE `feeding` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `fed_date_time` longtext DEFAULT NULL,
  `timeIn` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `feeding`
--

INSERT INTO `feeding` (`id`, `user_id`, `fed_date_time`, `timeIn`) VALUES
(1, 37, NULL, '2022-07-20 10:10:39'),
(2, 38, NULL, '2022-07-20 10:10:39'),
(3, 39, NULL, '2022-07-20 10:46:20'),
(4, 40, NULL, '2022-07-20 10:46:20'),
(5, 41, NULL, '2022-07-20 10:46:30'),
(6, 44, NULL, '2022-07-20 10:46:30'),
(7, 45, NULL, '2022-07-20 10:46:30'),
(8, 47, NULL, '2022-07-20 10:49:44'),
(9, 54, NULL, '2022-07-21 11:04:37'),
(10, 37, NULL, '2022-07-21 11:04:43'),
(11, 44, NULL, '2022-07-21 11:04:43'),
(12, 45, NULL, '2022-07-21 11:04:43');

-- --------------------------------------------------------

--
-- Table structure for table `level_status`
--

CREATE TABLE `level_status` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `level` varchar(10) NOT NULL,
  `timeIn` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `literacy_content`
--

CREATE TABLE `literacy_content` (
  `id` int(11) NOT NULL,
  `level_id` varchar(100) NOT NULL,
  `topic` varchar(100) NOT NULL,
  `subject` varchar(100) NOT NULL,
  `directory` varchar(1000) NOT NULL,
  `age` varchar(100) NOT NULL,
  `module` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `literacy_content`
--

INSERT INTO `literacy_content` (`id`, `level_id`, `topic`, `subject`, `directory`, `age`, `module`) VALUES
(1, '1', 'phonics', 'literacy', 'assets/video/new/phonics/1/1/', 'A', '1'),
(2, '1', 'number', 'numeracy', 'assets/video/new/number/1/1/', 'A', '1'),
(3, '1', 'writing', 'literacy', 'assets/video/new/handwriting/1/1/', 'A', '1'),
(4, '1', 'spelling', 'literacy', 'assets/video/new/spelling/1/1/', 'A', '1'),
(5, '1', 'comprehension', 'literacy', 'assets/video/new/comprehension/1/1/', 'A', '1'),
(6, '1', 'e-arith', 'numeracy', 'assets/video/new/e-arith/1/1/', 'A', '1'),
(7, '1', 'basicOps', 'numeracy', 'assets/video/new/basicOps/1/1/', 'A', '1');

-- --------------------------------------------------------

--
-- Table structure for table `l_users`
--

CREATE TABLE `l_users` (
  `l_id` int(11) NOT NULL,
  `fullname` varchar(100) NOT NULL,
  `username` varchar(200) NOT NULL,
  `password` varchar(100) NOT NULL,
  `assigned_centers` varchar(100) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `img` varchar(200) NOT NULL,
  `access_level` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `l_users`
--

INSERT INTO `l_users` (`l_id`, `fullname`, `username`, `password`, `assigned_centers`, `phone`, `img`, `access_level`) VALUES
(1, 'Abubakar Bello', 'ab@ab.com', '12345', '0', '08162248564', '', 0);

-- --------------------------------------------------------

--
-- Table structure for table `parent_guardian`
--

CREATE TABLE `parent_guardian` (
  `id` int(11) NOT NULL,
  `fullname` varchar(200) NOT NULL,
  `relationship` varchar(200) NOT NULL,
  `state` varchar(200) NOT NULL,
  `occupation` varchar(200) NOT NULL,
  `education` varchar(200) NOT NULL,
  `address` varchar(200) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `guardian_name` varchar(200) NOT NULL,
  `guardain_relationship` varchar(200) NOT NULL,
  `guardian_address` varchar(200) NOT NULL,
  `guardian_phone` varchar(15) NOT NULL,
  `guardain_occupation` varchar(50) DEFAULT NULL,
  `hash_pin` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `parent_guardian`
--

INSERT INTO `parent_guardian` (`id`, `fullname`, `relationship`, `state`, `occupation`, `education`, `address`, `phone`, `guardian_name`, `guardain_relationship`, `guardian_address`, `guardian_phone`, `guardain_occupation`, `hash_pin`) VALUES
(1, 'new', 'Parent', 'Kano', 'new', 'new', 'new', '123456789', 'new', 'Abductor', 'new', '345678909', 'Lawyer', '625d99e12c5a1'),
(2, 'kjhgfds', 'jghfds', 'Kaduna', 'uytrew', 'grfeds', 'trfd', '7654321', 'kjhgfds', 'jghfds', 'ererr', '7654321', NULL, '62694fb31f2ec'),
(3, 'kjhgfds', 'jghfds', 'Kaduna', 'uytrew', 'grfeds', 'trfd', '7654321', 'kjhgfds', 'jghfds', 'ererr', '7654321', NULL, '626950063cd5e'),
(4, 'efrssd', 'sdsdd', 'Kano', 'efdfdf', 'ggrrr', 'lkjhg', '6543', 'efrssd', 'sdsdd', 'gfdsd', '6543', NULL, '62695039cb40b'),
(5, 'wejh', 'jhhjj', 'Kano', 'hjjhj', 'jhhj', 'eee', '543', 'wejh', 'jhhjj', 'gfd', '543', NULL, '6269512aad891'),
(6, 'Mike Testing', 'Father', 'Akwa Ibom', 'Teacher', 'unknown', 'Sardauna CrescentGiginyu 700213, Kano', 'unknown', 'Mike Testing', 'Father', 'Sardauna CrescentGiginyu 700213, Kano', '765432', NULL, '62d42e2875d7b'),
(7, 'Abubakar Bello', 'Father', 'Akwa Ibom', 'Consultant', 'unknown', 'Sardauna CrescentGiginyu 700213, Kano', '', 'Abubakar Bello', 'Father', 'Sardauna CrescentGiginyu 700213, Kano', '76543', NULL, '62d42f2ddbbfc'),
(8, 'Abubakar Bello', 'Father', 'Akwa Ibom', 'Consultant', 'unknown', 'Sardauna CrescentGiginyu 700213, Kano', '76543', 'Abubakar Bello', 'Father', 'Sardauna CrescentGiginyu 700213, Kano', '76543', NULL, '62d42f5ac5d86'),
(9, 'Sule Testing', 'Father', 'Adamawa', 'Teacher', 'unknown', 'Sardauna CrescentGiginyu 700213, Kano', '876543', 'Sule Testing', 'Father', 'Sardauna CrescentGiginyu 700213, Kano', '876543', NULL, '62d6c9dc9ddc8'),
(10, 'aliyu', 'father', 'Abia', 'teacher', 'unknown', 'sardaaa', '123457889', 'aliyu', 'father', 'sardaaa', '123457889', NULL, '62fa326286a4e'),
(11, 'Ibrahim Ismail ', 'Father ', 'Kano', 'Engineer', 'unknown', 'Kofar Garko', '07031487474', 'Ibrahim Ismail ', 'Father ', 'Kofar Garko ', '07031487474', NULL, '63048666ec9eb'),
(12, 'Bilyaminu Ali ', 'Father ', 'Kano', 'Farmer ', 'unknown', 'Gidan Karofi', '', 'Mal Aminu Farawa', 'Teacher ', 'Gerawa Farawa', '08135964937', NULL, '63049be42fedd'),
(13, 'Awwal Haruna', 'Father', 'Kano', 'Truck Driver ', 'unknown', 'Gidan Karofi', '', 'Mal Aminu Gerawa', 'Teacher ', 'Gerawa Farawa ', '08135964937', NULL, '63049d3e1208d'),
(14, 'Shuaibu Isa ', 'Father', 'Kano', 'Farmer ', 'unknown', 'Barriga', '', 'Mal Aminu Gerawa', 'Teacher ', 'Gerawa Farawa ', '08135964937', NULL, '63049e4ddbc37'),
(15, 'Saidu Ali', 'Father ', 'Kano', 'Farmer', 'unknown', 'Gidan Karofi ', '', 'Mal Aminu Gerawa ', 'Teacher ', 'Gerawa Farawa ', '08135964937', NULL, '63049f2468b5f'),
(16, 'Hamisu Abubakar ', 'Father', 'Kano', 'Islamic Teacher ', 'unknown', 'Falke Layin Gidan Kaji Goron Dutse', '', 'Mal Aminu Gerawa ', 'Teacher ', 'Gerawa Farawa ', '08135964937', NULL, '6304a023b3b9a'),
(17, 'Abubakar Habu', 'Father', 'Gombe', 'Entrepreneur ', 'unknown', 'Layin Gidan Mai Unguwa Kagarawai', '', 'Mal Aminu Gerawa ', 'Teacher ', 'Gerawa Farawa ', '08135964937', NULL, '6304a133c37c8'),
(18, 'Abubakar Habu', 'Father', 'Gombe', 'Entrepreneur ', 'unknown', 'Layin Mai Unguwa Saddiqu Kagarawai', '', 'Mal Aminu Gerawa ', 'Teacher ', 'Gerawa Farawa Kano', '08135964937', NULL, '6304a21f92c41'),
(19, 'Awwal Haruna', 'Father ', 'Kano', 'Truck Driver ', 'unknown', 'Gidan Karofi ', '', 'Mal Aminu Gerawa ', 'Teacher ', 'Gerawa Farawa Kano ', '08135964937', NULL, '6304a2eeb88d3'),
(20, 'Sulaiman Gambo', 'Father ', 'Kano', 'Vulcanizer ', 'unknown', 'Gidan Karofi ', '', 'Mal Aminu Gerawa ', 'Teacher ', 'Gerawa Farawa Kano ', '08135964937', NULL, '6304a3e1b66c6'),
(21, 'Sulaiman Isa', 'Father', 'Kano', 'Vulcanizer ', 'unknown', 'Gidan Karofi ', '', 'Mal Aminu Gerawa ', 'Teacher ', 'Gerawa Farawa Kano ', '08135964937', NULL, '6304a4b03750c'),
(22, 'Alam Baban Inani', 'Father ', 'Kano', 'Truck Driver ', 'unknown', 'Gidan Karofi ', '', 'Mal Aminu Gerawa ', 'Teacher ', 'Gerawa Farawa Kano ', '08135964937', NULL, '6304a58c462c7'),
(23, 'Awwal Ali', 'Father ', 'Kano', 'Commodity Trader', 'unknown', 'Gidan Karofi ', '', 'Mal Aminu Gerawa ', 'Teacher ', 'Gerawa Farawa Kano ', '08135964937', NULL, '6304a6391672d'),
(24, 'Habibu Mal Baba', 'Father ', 'Kano', 'Truck Driver ', 'unknown', 'Gidan Karofi ', '', 'Mal Aminu Gerawa ', 'Teacher ', 'Gerawa Farawa Kano ', '08135964937', NULL, '6304a6e73508e'),
(25, 'Saidu Jafar', 'Father ', 'Kano', 'Entrepreneur ', 'unknown', 'Gidan Karofi ', '', 'Mal Aminu Gerawa ', 'Teacher ', 'Gerawa Farawa Kano ', '08135964937', NULL, '6304a794e92a3'),
(26, 'Habibu Aye', 'Father ', 'Kano', 'Truck Driver ', 'unknown', 'Gidan Karofi ', '', 'Mal Aminu Gerawa ', 'Teacher ', 'Gerawa Farawa Kano ', '08135964937', NULL, '6304a8cf60590'),
(27, 'Yusuf Adam', 'Father ', 'Kano', 'Entrepreneur ', 'unknown', 'Gidan Mal Yusufa Kofar Waika Kano', '', 'Mal Aminu Gerawa ', 'Teacher ', 'Gerawa Farawa Kano ', '08135964937', NULL, '6304a9ad6df44'),
(28, '', '', 'Abia', '', 'unknown', '', '', '', '', '', '', NULL, '63051eedcdd00'),
(29, 'Ashiru Shuaibu ', 'Father', 'Katsina', 'Farmer ', 'unknown', 'Gidan Gayya Santar Ringi', '', 'Mal Usman Muhammad ', 'Teacher ', 'Tsangayar Mal Usman Maisaje Garza Hotoro', '08035595584', NULL, '630c7a42cb314'),
(30, 'Ibrahim Ayuba ', 'Father', 'Katsina', 'Farmer', 'unknown', 'Gidan Gayya Santar Rinji Musawa', '', 'Mal Usman Muhammad ', 'Teacher ', 'Tsangayar Mal Usman Maisaje Garza Hotoro', '08035595584', NULL, '630c7ba4add73'),
(31, 'Ibrahim Ayuba ', 'Father ', 'Katsina', 'Farmer ', 'unknown', 'Gidan Gayya Santar Rinji Musawa ', '', 'Mal Usman Muhammad ', 'Teacher ', 'Tsangayar Mal Usman Maisaje Garza Hotoro ', '08035595584', NULL, '630c7c8b4da73'),
(32, 'Abdullahi Isa', 'Father', 'Katsina', 'Entrepreneur ', 'unknown', 'Gidan Abdullahi Santar Rinji', '', 'Mal Usman Muhammad ', 'Teacher ', 'Tsangayar Mal Usman Maisaje Garza Hotoro ', '08035595584', NULL, '630c7d6c33522'),
(33, 'Shuaibu Isiyaku', 'Father ', 'Katsina', 'Farmer ', 'unknown', 'Gidan Gayya Santar Rinji ', '', 'Mal Usman Muhammad ', 'Teacher ', 'Tsangayar Mal Usman Maisaje Garza Hotoro ', '08035595584', NULL, '630c7e3644700'),
(34, 'Abdullahi Isa', 'Father', 'Katsina', 'Farmer ', 'unknown', 'Gidan Gayya Santar Rinji ', '', 'Mal Usman Muhammad ', 'Teacher ', 'Tsangayar Mal Usman Maisaje Garza Hotoro ', '08035595584', NULL, '630c7efa2e60f'),
(35, 'Musa Ibrahim ', 'Father ', 'Katsina', 'Bike Rider', 'unknown', 'Gidan Bundi Sabon Layi ', '', 'Mal Usman Muhammad ', 'Teacher ', 'Tsangayar Mal Usman Maisaje ', '08035595584', NULL, '630c7fdad6d35'),
(36, 'Ashiru Shuaibu ', 'Father ', 'Katsina', 'Farmer ', 'unknown', 'Gidan Gayya Santar Rinji ', '', 'Mal Usman Muhammad ', 'Teacher ', 'Tsangayar Mal Usman Maisaje Garza Hotoro ', '08035595584', NULL, '630c809c77061'),
(37, 'Yusuf Ibrahim ', 'Father ', 'Katsina', 'Farmer ', 'unknown', 'Gidan Bindi Kira Sabon Layi ', '', 'Mal Usman Muhammad ', 'Teacher ', 'Tsangayar Mal Usman Maisaje Garza Hotoro ', '08035595584', NULL, '630c8172ad87c'),
(38, 'Alh Isa', 'Father', 'Katsina', 'Farmer ', 'unknown', 'Gidan Gayya Santar Rinji ', '', 'Mal Usman Muhammad ', 'Teacher ', 'Tsangayar Mal Usman Maisaje Garza Hotoro ', '08035595584', NULL, '630c826272880'),
(39, 'Ibrahim Haruna ', 'Father ', 'Katsina', 'Entrepreneur ', 'unknown', 'Gidan Haruna Mai Engine ', '', 'Mal Usman Muhammad ', 'Teacher ', 'Tsangayar Mal Usman Maisaje Garza Hotoro ', '08035595584', NULL, '630c8363be1c5'),
(40, 'Abdullahi Shuaibu ', 'Father', 'Katsina', 'Farmer, Entrepreneur ', 'unknown', 'Gidan Gayya Santar Rinji ', '', 'Mal Usman Muhammad ', 'Teacher ', 'Tsangayar Mal Usman Maisaje ', '08035595584', NULL, '630c844b1cca6'),
(41, 'Yusuf Idris', 'Father ', 'Katsina', 'Commodity Trader', 'unknown', 'Gidan Bindi Kira Sabon Layi', '', 'Mal Usman Muhammad ', 'Teacher ', 'Tsangayar Mal Usman Maisaje Garza Hotoro ', '08035595584', NULL, '630c853267c21'),
(42, 'Musa Ibrahim ', 'Father ', 'Katsina', 'Farmer ', 'unknown', 'Gidan Bindi Kira Sabon Layi ', '', 'Mal Usman Muhammad ', 'Teacher ', 'Tsangayar Mal Usman Maisaje ', '08035595584', NULL, '630c8605ae2fc'),
(43, 'hshssgsg', 'hdhsh', 'Niger', 'gsgsgssg', 'unknown', 'Flat 373 Federal lowcost kontagora', '08162248564', 'Muhammad', 'dgdgdgdg', 'gsdgdgs', '08162248564', NULL, '630ce1ea0a031'),
(44, '', '', 'Abia', '', 'unknown', '', '', '', '', '', '', NULL, '630ce23f660a3'),
(45, '', '', 'Abia', '', 'unknown', '', '', '', '', '', '', NULL, '630ce2b2c4c03'),
(46, '', '', 'Abia', '', 'unknown', '', '', '', '', '', '', NULL, '630ce30f7bfcc'),
(47, '', '', 'Abia', '', 'unknown', '', '', '', '', '', '', NULL, '630ce4af248bb'),
(48, '', '', 'Abia', '', 'unknown', '', '', '', '', '', '', NULL, '630ce802d0cd9'),
(49, '', '', 'Abia', '', 'unknown', '', '', '', '', '', '', NULL, '630ce8591621a'),
(50, 'Muhammad', 'father', 'Kano', 'musa', 'unknown', 'aliyu', '08162248564', 'Muhammad', 'father', 'Flat 373 Federal lowcost kontagora', '08162248564', NULL, '630dd29982244'),
(51, 'tanko', 'mother', 'Abia', 'tr', 'unknown', 'loc', '9393939', 'hshshs', 'dgdgdgdg', 'hdhdhd', '653353535', NULL, '630df26dc2fa0'),
(52, 'tanko', 'mother', 'Abia', 'tr', 'unknown', 'loc', '9393939', 'hshshs', 'dgdgdgdg', 'hdhdhd', '653353535', NULL, '630df26fa2c6f'),
(53, 'tanko', 'mother', 'Abia', 'tr', 'unknown', 'loc', '9393939', 'hshshs', 'dgdgdgdg', 'hdhdhd', '653353535', NULL, '630df271432ee'),
(54, 'tanko', 'mother', 'Abia', 'tr', 'unknown', 'loc', '9393939', 'hshshs', 'dgdgdgdg', 'hdhdhd', '653353535', NULL, '630df2704488b'),
(55, 'tanko', 'mother', 'Abia', 'tr', 'unknown', 'loc', '9393939', 'hshshs', 'dgdgdgdg', 'hdhdhd', '653353535', NULL, '630df2748dc4c'),
(56, 'tanko', 'mother', 'Abia', 'tr', 'unknown', 'loc', '9393939', 'hshshs', 'dgdgdgdg', 'hdhdhd', '653353535', NULL, '630df272afb8a');

-- --------------------------------------------------------

--
-- Table structure for table `reg_form`
--

CREATE TABLE `reg_form` (
  `id` int(11) NOT NULL,
  `input_name` varchar(200) NOT NULL,
  `label` varchar(200) NOT NULL,
  `visibility` varchar(100) NOT NULL,
  `type` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `reg_form`
--

INSERT INTO `reg_form` (`id`, `input_name`, `label`, `visibility`, `type`) VALUES
(13, 's_fname', 'Student First Name', '', ''),
(14, 's_lname', 'Student Last Name', '', ''),
(15, 's_mname', 'Student Middle Name', '', ''),
(16, 's_dob', 'Date of Birth', '', ''),
(17, 's_trackId', 'Student Admission Number', 'GCC/2020/', ''),
(18, 's_password', 'Student Password', '', 'password'),
(19, 'access_l', 'Student Access Level', '1', 'hidden');

-- --------------------------------------------------------

--
-- Table structure for table `st_activities`
--

CREATE TABLE `st_activities` (
  `id` int(11) NOT NULL,
  `st_id` int(11) NOT NULL,
  `logins` varchar(200) NOT NULL,
  `timeSpent` varchar(200) NOT NULL,
  `module` varchar(20) NOT NULL,
  `level` varchar(20) NOT NULL,
  `timeOn` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `st_activities`
--

INSERT INTO `st_activities` (`id`, `st_id`, `logins`, `timeSpent`, `module`, `level`, `timeOn`) VALUES
(1, 54, '2', '0.5mins', '2', '3', '2022-07-20 05:38:53');

-- --------------------------------------------------------

--
-- Table structure for table `time_spent`
--

CREATE TABLE `time_spent` (
  `id` int(11) NOT NULL,
  `dateIn` varchar(30) NOT NULL,
  `timeSpent` int(255) NOT NULL,
  `student_id` int(255) NOT NULL,
  `center_id` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `time_spent`
--

INSERT INTO `time_spent` (`id`, `dateIn`, `timeSpent`, `student_id`, `center_id`) VALUES
(1, '2022.01.11', 11, 38, 4),
(2, '2022.01.12', 54, 38, 4);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `access_students`
--
ALTER TABLE `access_students`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `admin_center`
--
ALTER TABLE `admin_center`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `assessment`
--
ALTER TABLE `assessment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `assigned_center`
--
ALTER TABLE `assigned_center`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `center_assistant`
--
ALTER TABLE `center_assistant`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `centres`
--
ALTER TABLE `centres`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `feeding`
--
ALTER TABLE `feeding`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `level_status`
--
ALTER TABLE `level_status`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `literacy_content`
--
ALTER TABLE `literacy_content`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `l_users`
--
ALTER TABLE `l_users`
  ADD PRIMARY KEY (`l_id`);

--
-- Indexes for table `parent_guardian`
--
ALTER TABLE `parent_guardian`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reg_form`
--
ALTER TABLE `reg_form`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `st_activities`
--
ALTER TABLE `st_activities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `time_spent`
--
ALTER TABLE `time_spent`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `access_students`
--
ALTER TABLE `access_students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=116;

--
-- AUTO_INCREMENT for table `admin_center`
--
ALTER TABLE `admin_center`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT for table `assessment`
--
ALTER TABLE `assessment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=209;

--
-- AUTO_INCREMENT for table `center_assistant`
--
ALTER TABLE `center_assistant`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `centres`
--
ALTER TABLE `centres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `feeding`
--
ALTER TABLE `feeding`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `l_users`
--
ALTER TABLE `l_users`
  MODIFY `l_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `parent_guardian`
--
ALTER TABLE `parent_guardian`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT for table `reg_form`
--
ALTER TABLE `reg_form`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `st_activities`
--
ALTER TABLE `st_activities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `time_spent`
--
ALTER TABLE `time_spent`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
