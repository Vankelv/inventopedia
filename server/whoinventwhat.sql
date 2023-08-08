-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 29, 2023 at 11:45 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `whoinventwhat`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `categoryName` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `categoryName`) VALUES
(1, 'Science'),
(2, 'Technology'),
(3, 'Medicine'),
(4, 'Engineering'),
(5, 'Environment'),
(6, 'Communication'),
(7, 'Transportation'),
(8, 'Energy'),
(9, 'Agriculture'),
(10, 'Space'),
(11, 'Home Appliances'),
(12, 'Electrical'),
(13, 'Science'),
(14, 'Entertainment'),
(15, 'Aviation'),
(16, 'Medical'),
(17, 'Household Items'),
(18, 'Automotive'),
(19, 'Materials'),
(20, 'Technology'),
(21, 'Accessories'),
(22, 'Mathematics'),
(23, 'Musical Instruments'),
(24, 'Metallurgy'),
(25, 'Optics'),
(26, 'Aerospace'),
(27, 'Transportation'),
(28, 'Timekeeping'),
(29, 'Manufacturing'),
(30, 'Energy'),
(31, 'Chemistry'),
(32, 'Construction'),
(33, 'Physics'),
(34, 'Photography'),
(35, 'Communication'),
(36, 'Weapons'),
(37, 'Office'),
(38, 'Electronics'),
(39, 'Music'),
(40, 'Textile'),
(41, 'Fashion'),
(42, 'Security'),
(43, 'Appliances'),
(44, 'Lighting'),
(45, 'Audio'),
(46, 'Retail'),
(47, 'Writing'),
(48, 'Maritime'),
(49, 'Pharmaceuticals'),
(50, 'Packaging'),
(51, 'Machinery'),
(52, 'Navigation'),
(53, 'Medicine'),
(54, 'Computing'),
(55, 'Finance'),
(56, 'Printing'),
(57, 'Social Media');

-- --------------------------------------------------------

--
-- Table structure for table `inventions`
--

CREATE TABLE `inventions` (
  `id` int(11) NOT NULL,
  `inventionName` varchar(255) DEFAULT NULL,
  `inventor` varchar(255) DEFAULT NULL,
  `year` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `inventions`
--

INSERT INTO `inventions` (`id`, `inventionName`, `inventor`, `year`, `country`, `category`) VALUES
(1, 'Electric Iron', 'H.W. Seeley', '1882', 'U.S.A', 'Home Appliances'),
(2, 'Electric Motor', 'Moritz Jacobi', '1834', 'Russia', 'Electrical'),
(3, 'Evolution, theory of', 'Charles Darwin', '1858', 'England', 'Science'),
(4, 'Film sound', 'Dr. Le de Forest', '1923', 'U.S.A', 'Entertainment'),
(5, 'Glider', 'Sir George Calyey', '1853', 'England', 'Aviation'),
(6, 'Insulin', 'Sir Frederick Banting', '1923', 'Canada', 'Medical'),
(7, 'Safety Match', 'J.E. Lundstrom', '1855', 'Sweden', 'Household Items'),
(8, 'Motor car, Petrol', 'Karl Benz', '1885', 'Germany', 'Automotive'),
(9, 'Radium', 'Marie & Pierre Curie', '1898', 'France', 'Science'),
(10, 'Rubber (vulcanized)', 'Charles Goodyear', '1841', 'U.S.A', 'Materials'),
(11, 'Safety Lamp', 'Sir Humphry Davy', '1816', 'England', 'Science'),
(12, 'Telescope', 'Hans Lippershey', '1608', 'Netherlands', 'Science'),
(13, 'Television', 'John Logic Baird', '1926', 'Scotland', 'Entertainment'),
(14, 'Thermometer', 'Galileo', '1593', 'Italy', 'Science'),
(15, 'Valve. Radio', 'Sir J.A Fleming', '1904', 'Britain', 'Electrical'),
(16, 'Printing Press', 'Johannes Gutenberg', '1440', 'Germany', 'Technology'),
(17, 'Pocket Watch', 'Peter Henlein', '1510', 'Germany', 'Accessories'),
(18, 'Microscope', 'Zacharis Janssen', '1590', 'Netherlands', 'Science'),
(19, 'Logarithms, Napier Bones & decim', 'John Napier', '1590', 'Scotland', 'Mathematics'),
(20, 'Automatic Calculator', 'Wilhelm Schickard', '1623', 'Germany', 'Technology'),
(21, 'Adding Machine', 'Blaise Pascal', '1642', 'France', 'Technology'),
(22, 'Barometer', 'Evangelista Torricelli', '1643', 'Italy', 'Science'),
(23, 'Air Pump', 'Otto Von Guericke', '1650', 'Germany', 'Science'),
(24, 'Bacteria', 'Antonie Van Leeuwenhoek', '1665', 'Netherlands', 'Science'),
(25, 'Pendulum Clock', 'Christian Huygens', '1657', 'Netherlands', 'Technology'),
(26, 'Gravity & Reflecting telescope', 'Isaac Newton', '1668', 'England', 'Science'),
(27, 'Clarinet', 'Johann Christoph Denner', '1690', 'Germany', 'Musical Instruments'),
(28, 'Steam Engine', 'Thomas Savery', '1698', 'UK', 'Technology'),
(29, 'Piano', 'Bartolomeo Cristofori', '1700', 'Italy', 'Musical Instruments'),
(30, 'Centigrade Scale', 'Anders Celsius', '1742', 'Sweden', 'Science'),
(31, 'Electroscope', 'Jean Nollet', '1748', 'France', 'Science'),
(32, 'Lightning Conductor', 'Benjamin Franklin', '1752', 'USA', 'Science'),
(33, 'Hydrogen', 'Henry Cavendish', '1766', 'England', 'Science'),
(34, 'Chlorine', 'Karl Wilhelm Scheele', '1774', 'Sweden', 'Science'),
(35, 'Ship (Steam)', 'J.C Perier', '1775', 'France', 'Technology'),
(36, 'Oxygen', 'Antoine Laurent Lavoisier', '1775', 'France', 'Science'),
(37, 'Submarine', 'David Bushnell', '1776', 'USA', 'Technology'),
(38, 'Hot Air Balloon', 'Josef & Etienne Montgolfier', '1783', 'France', 'Aviation'),
(64, 'Tungsten', 'Juan José Elhuyar Lubize & Fausto de Elhuyar', '1783', 'Spain', 'Metallurgy'),
(65, 'Bifocal Lens', 'Benjamin Franklin', '1784', 'USA', 'Optics'),
(66, 'Parachute', 'Jean Pierre Blanchard', '1785', 'France', 'Aerospace'),
(67, 'Steam Boat', 'John Fitch', '1786', 'USA', 'Transportation'),
(68, 'Guillotin', 'Dr. Joseph-Ignace Guillotin', '1790s', 'France', 'Medical'),
(69, 'Watch (Self Winding)', 'Abraham-Louis Breguet', '1791', 'France', 'Timekeeping'),
(70, 'Milling machine & cotton gin', 'Eli Whitney', '1793', 'USA', 'Manufacturing'),
(71, 'Small Pox Vaccine', 'Edward Jenner', '1796', 'England', 'Medical'),
(72, 'Vaccination', '', '', '', 'Medical'),
(73, 'Electric Battery', 'Volta', '1800', 'Italian', 'Energy'),
(74, 'Locomotive', 'Richard Trevithick', '1804', 'England', 'Transportation'),
(75, 'Stethoscope', 'Rene Laennec', '1816', 'France', 'Medical'),
(76, 'Dental Plate', 'Anthony A.Plantson', '1817', 'USA', 'Medical'),
(77, 'Cadmium', 'Friedrich Stromeyer', '1817', 'Germany', 'Chemistry'),
(78, 'Cement', 'Joseph Aspdin', '1824', 'England', 'Construction'),
(79, 'Electromagnet', 'William Sturgeon', '1824', 'England', 'Physics'),
(80, 'Photography (on metal)', 'Joseph Nicéphore Niepce', '1826', 'France', 'Photography'),
(81, 'Braille', 'Louis Braille', '1829', 'France', 'Communication'),
(82, 'Electromagnetic Induction', 'Michael Faraday', '1831', 'UK', 'Physics'),
(83, 'Electric Generator', '', '', '', 'Energy'),
(84, 'Revolver', 'Samuel Colt', '1835', 'USA', 'Weapons'),
(85, 'Photography (on paper)', 'W. H. Fox Talbot', '1835', 'England', 'Photography'),
(86, 'Telegraph', 'William Cook & Charles Wheatstone', '1837', 'England', 'Communication'),
(87, 'Telegraph code', 'Samuel Morse', '1837', 'USA', 'Communication'),
(88, 'Ozone', 'Christian Schonbein', '1839', 'Germany', 'Chemistry'),
(89, 'Typewriter', 'Peter Mitterhofer', '1841', 'Austria', 'Office'),
(90, 'Transformer (Induction coil)', 'William Stanley .Jr', '1842', 'US', 'Electronics'),
(91, 'Saxophone', 'Adolphe Sax', '1846', 'Belgium', 'Music'),
(92, 'Sewing Machine', 'Elias Howe', '1846', 'USA', 'Textile'),
(93, 'Motorcycle', 'Edward Butler', '1848', 'England', 'Transportation'),
(94, 'Bullet', 'Claude Minie', '1849', 'France', 'Weapons'),
(95, 'Safety Pin', 'William Hunt', '1849', 'US', 'Fashion'),
(96, 'Burglar Alarm', 'Edwin T. Holmes', '1851', 'US', 'Security'),
(97, 'Refrigerator', 'James Harrison', '1851', 'Australia', 'Appliances'),
(98, 'Elevator', 'Elisha G. Otis', '1852', 'USA', 'Construction'),
(99, 'Steam-Powered Airship', 'Henri Giffard', '1852', 'France', 'Aerospace'),
(100, 'Light Bulb', 'Heinrich Goebel', '1854', 'Germany', 'Lighting'),
(101, 'Generator', 'Piciontti', '1860', 'Italy', 'Energy'),
(102, 'Machine Gun', 'Richard Gaffing', '1861', 'USA', 'Weapons'),
(103, 'Typewriter', 'Peter Mitterhofer', '1864', 'Austria', 'Office'),
(104, 'Antiseptic', 'Dr. Joseph Lister', '1867', 'England', 'Medical'),
(105, 'Dynamite', 'Alfred B. Nobel', '1867', 'Sweden', 'Chemistry'),
(106, 'Helium', 'William Ramsay', '1868', 'Great Britain', 'Chemistry'),
(107, 'Vacuum Cleaner', 'Ives McGuffey', '1869', 'USA', 'Appliances'),
(108, 'Electric Motor (DC)', 'Zenobe Gramme', '1873', 'Belgium', 'Electronics'),
(109, 'Barbed Wire', 'Joseph F. Glidden', '1873', 'US', 'Security'),
(110, 'Telephone', 'Graham Bell', '1874', 'Canada', 'Communication'),
(111, 'Microphone', 'Alexander Graham Bell', '1876', 'US', 'Electronics'),
(112, 'Carburetor', 'Gottlieb Daimler', '1876', 'Germany', 'Automotive'),
(113, 'Phonograph', 'Thomas Edison', '1877', 'USA', 'Audio'),
(114, 'Welder (Electric Welding)', 'Elisha Thompson', '1877', 'US', 'Manufacturing'),
(115, 'Gramophone', 'Thomas Edison', '1878', 'USA', 'Audio'),
(116, 'Cash Register', 'James Ritty', '1879', 'USA', 'Retail'),
(117, 'Arc Lamp', 'C. F. Brush', '1879', 'Ohio', 'Lighting'),
(118, 'Electric Lamp', 'Thomas Alva Edison', '1879', 'USA', 'Lighting'),
(119, 'Electromagnetic theory of light & electromagnetic waves, Radio and electrical frequencies (Hz)', 'Heinrich Rudolph Hertz', '1880', 'Germany', 'Physics'),
(120, 'AC motor and transformer, vacuum tube amplifier, Tesla coil, X-Ray technology', 'Nikola Tesla', '1880s', 'USA', 'Electronics'),
(121, 'Electric Fan', 'Wheeler', '1882', 'USA', 'Appliances'),
(122, 'Fountain Pen', 'Lewis Edson Waterman', '1884', 'USA', 'Writing'),
(123, 'Fluorine', 'Ferdinand Frederick Henri Moissan', '1886', 'France', 'Chemistry'),
(124, 'Ball Point Pen', 'John Loud', '1888', 'USA', 'Writing'),
(125, 'Bicycle Tyres', 'John Boyd Dunlop', '1888', 'Scotland', 'Transportation'),
(126, 'Photography (on film)', 'John Carbutt', '1888', 'US', 'Photography'),
(127, 'Time Recorder', 'Harlow Bundy', '1890', 'USA', 'Office'),
(128, 'Animation', 'Emile Reynaud', '1892', 'France', 'Entertainment'),
(129, 'Cinema', 'Lumiere brothers', '1894', 'France', 'Entertainment'),
(130, 'Argon', 'William Ramsay & Baron Ray Leigh', '1894', 'UK', 'Chemistry'),
(131, 'Radio', 'Guglielmo Marconi', '1894', 'Italy', 'Communication'),
(132, 'Ship (Turbine)', 'Charles Parsons', '1894', 'England', 'Maritime'),
(133, 'Diesel Engine', 'Rudolf Diesel', '1895', 'Germany', 'Automotive'),
(134, 'X-ray', 'Wilhelm Conrad Roentgen', '1895', 'Germany', 'Medical'),
(135, 'Electric stove/cooker', 'William S. Hadaway', '1896', 'USA', 'Appliances'),
(136, 'Aspirin', 'Dr. Felix Hoffman', '1899', 'Germany', 'Pharmaceuticals'),
(137, 'Cellophane', 'I.E. Brandenberger', '1900', 'Switzerland', 'Packaging'),
(138, 'Tractor (Caterpillar)', 'Benjamin Holt', '1900', 'US', 'Machinery'),
(139, 'Disc Brake', 'Dr. F. Lanchester', '1902', 'England', 'Automotive'),
(140, 'Windshield wipers', 'Mary Anderson', '1903', 'USA', 'Automotive'),
(141, 'Airplanes', 'Wilber and Orville Wright', '1903', 'USA', 'Aerospace'),
(142, 'Silicones', 'F.S Kipping', '1904', 'England', 'Chemistry'),
(143, 'Bakelite', 'H. Backcland', '1907', 'Belgium/US', 'Chemistry'),
(144, 'Gyrocompass', 'Elmer A. Sperry', '1908', 'U.S', 'Navigation'),
(145, 'Vitamin A', 'Elmer V. McCollum & M. Davis', '1913', 'USA', 'Medicine'),
(146, 'Air Conditioner', 'Willis Carrier', '1914', 'USA', 'Appliances'),
(147, 'Neon Lamp', 'Georges Claude', '1915', 'France', 'Lighting'),
(148, 'Vitamin B', 'Elmer V. McCollum', '1916', 'US', 'Medicine'),
(149, 'Motor Scooter', 'Greville Bradshaw', '1919', 'England', 'Transportation'),
(150, 'Vitamin C', 'Albert Szent-Györgyi & Charles Glen King', '1920', 'USA', 'Medicine'),
(151, 'Vitamin D', 'Edward Mellanby', '1920', 'USA', 'Medicine'),
(152, 'Band Aid', 'Earle Dickson', '1920', 'USA', 'Medical'),
(153, 'Crescograph', 'Jagadish Chandra Bose', '1920s', 'India', 'Science'),
(154, 'Insulin', 'Frederick Banting & Charles H. Best', '1921', 'Canada', 'Medicine'),
(155, 'Radar', 'Dr. Albert H. Taylor & Leo C. Young', '1922', 'US', 'Technology'),
(156, 'Vitamin E', 'Herbert McLean Evans', '1922', 'USA', 'Medicine'),
(157, 'Film (Musical)', 'Warner Bros', '1923', 'US', 'Entertainment'),
(158, 'Adhesive tape', 'Richard G. Drew', '1923', 'USA', 'Manufacturing'),
(159, 'Loud Speaker', 'Chester W. Rice and Edward W. Kellogg', '1924', 'USA', 'Audio'),
(160, 'Vitamin K', 'Carl Peter Henrik Dam', '1929', 'Denmark', 'Medicine'),
(161, 'Polaroid Camera', 'Edwin H. Land', '1929', 'US', 'Photography'),
(162, 'Penicillin', 'Alexander Fleming', '1928', 'UK', 'Medicine'),
(163, 'Jet engine', 'Frank Whittle', '1930', 'England', 'Aerospace'),
(164, 'Zippers', 'Gideon Sundback', '1930', 'Sweden', 'Fashion'),
(165, 'Analog Computer', 'Vanvnevar Bush', '1930', 'US', 'Computing'),
(166, 'Frequency modulation', 'Edwin Armstrong', '1933', 'US', 'Communication'),
(167, 'Photocopying', 'Chester Carlson', '1937', 'US', 'Office'),
(168, 'Nylon', 'Wallace Hume Carothers', '1937', 'USA', 'Chemistry'),
(169, 'Ballpoint pen (Commercial)', 'László Bíró', '1938', 'Hungary', 'Writing'),
(170, 'Photocopier', 'Chester Carlson', '1938', 'USA', 'Office'),
(171, 'Nuclear fission', 'Otto Hahn', '1938', 'Germany', 'Science'),
(172, 'Helicopter', 'Igor Sikorsky', '1939', 'Russia', 'Aerospace'),
(173, 'Nuclear reactor', 'Enrico Fermi', '1942', 'Italy', 'Energy'),
(174, 'Computer (Electronic)', 'John W. Mauchly & J. Presper Eckert', '1943', 'USA', 'Computing'),
(175, 'Polyester', 'Whinfield & Dickson', '1943', 'UK', 'Chemistry'),
(176, 'Atomic bomb', 'J. Robert Oppenheimer', '1945', 'USA', 'Weapons'),
(177, 'Microwave oven', 'Percy Spencer', '1945', 'USA', 'Appliances'),
(178, 'Transistor', 'Bardeen, Brattain & Shockley', '1947', 'USA', 'Electronics'),
(179, 'Video Recorder', 'Charles Ginsberg', '1951', 'USA', 'Audio'),
(180, 'Barcode', 'Norman Woodland', '1951', 'USA', 'Retail'),
(181, 'DNA Structure', 'James D. Watson & Francis Crick', '1953', 'USA', 'Science'),
(182, 'Solar Cell', 'Calvin Fuller, Gerald Pearson & Daryl Chapin', '1954', 'USA', 'Energy'),
(183, 'Hovercraft', 'Christopher Cockerell', '1955', 'UK', 'Transportation'),
(184, 'CPR', 'Peter Safar & James Elam', '1956', 'Austria/US', 'Medical'),
(185, 'Hard Disk Drive', 'IBM', '1956', 'USA', 'Computing'),
(186, 'Computer Hard Disk Drive', 'IBM', '1956', 'USA', 'Computing'),
(187, 'Particle accelerator', 'Donald A. Glaser', '1957', 'USA', 'Science'),
(188, 'Laser', 'Theodore H. Maiman', '1960', 'USA', 'Science'),
(189, 'Light Emitting Diode (LED)', 'Nick Holonyak Jr.', '1962', 'USA', 'Electronics'),
(190, 'Computer Mouse', 'Douglas Engelbart', '1963', 'USA', 'Computing'),
(191, 'Compact Cassette', 'Philips', '1963', 'Netherlands', 'Audio'),
(192, 'Computer Network', 'Paul Baran & Donald Davies', '1964', 'USA/UK', 'Computing'),
(193, 'Communication satellite', 'Arthur C. Clarke', '1965', 'UK', 'Communication'),
(194, 'Liquid Crystal Display (LCD)', 'George Heilmeier', '1968', 'USA', 'Electronics'),
(195, 'Internet (ARPANET)', 'Leonard Kleinrock', '1969', 'USA', 'Technology'),
(196, 'Unix', 'Ken Thompson & Dennis Ritchie', '1969', 'USA', 'Computing'),
(197, 'ATM (Automated Teller Machine)', 'John Shepherd-Barron', '1969', 'Scotland', 'Finance'),
(198, 'Email', 'Ray Tomlinson', '1971', 'USA', 'Communication'),
(199, 'Microprocessor', 'Intel', '1971', 'USA', 'Electronics'),
(200, 'Ethernet', 'Robert Metcalfe', '1973', 'USA', 'Technology'),
(201, 'Cellular Phone', 'Martin Cooper', '1973', 'USA', 'Communication'),
(202, 'Rubik\'s Cube', 'Ern? Rubik', '1974', 'Hungary', 'Entertainment'),
(203, 'Personal Computer (PC)', 'MITS', '1974', 'USA', 'Computing'),
(204, 'Graphical User Interface (GUI)', 'Xerox PARC', '1974', 'USA', 'Computing'),
(205, 'MRI (Magnetic Resonance Imaging)', 'Raymond Damadian', '1977', 'USA', 'Medical'),
(206, 'Inkjet Printer', 'Hewlett-Packard', '1977', 'USA', 'Printing'),
(207, 'Apple II', 'Apple', '1977', 'USA', 'Computing'),
(208, 'GPS (Global Positioning System)', 'Ivan Getting', '1978', 'USA', 'Technology'),
(209, 'Walkman', 'Sony', '1979', 'Japan', 'Audio'),
(210, 'Fiber Optics', 'Charles K. Kao', '1979', 'China/UK', 'Technology'),
(211, 'Pac-Man (Video Game)', 'Namco', '1980', 'Japan', 'Entertainment'),
(212, 'Compact Disc (CD)', 'Sony & Philips', '1980', 'Japan/Netherlands', 'Technology'),
(213, 'Laptop Computer', 'Adam Osborne', '1981', 'USA', 'Computing'),
(214, 'IBM PC', 'IBM', '1981', 'USA', 'Computing'),
(215, 'Microsoft Disk Operating System (MS-DOS)', 'Microsoft', '1981', 'USA', 'Computing'),
(216, 'Internet Protocol Suite (TCP/IP)', 'Vinton Cerf & Robert Kahn', '1982', 'USA', 'Technology'),
(217, 'Camcorder', 'Sony', '1983', 'Japan', 'Photography'),
(218, 'CD-ROM', 'Philips', '1983', 'Netherlands', 'Technology'),
(219, 'Macintosh', 'Apple', '1984', 'USA', 'Computing'),
(220, 'DNA Fingerprinting', 'Sir Alec Jeffreys', '1984', 'UK', 'Science'),
(221, 'Handheld Game Console (Game Boy)', 'Nintendo', '1989', 'Japan', 'Entertainment'),
(222, 'World Wide Web', 'Tim Berners-Lee', '1989', 'UK', 'Technology'),
(223, 'Digital Camera', 'Kodak', '1991', 'USA', 'Photography'),
(224, 'MP3', 'Fraunhofer Institute', '1991', 'Germany', 'Audio'),
(225, 'Smartphone', 'IBM', '1992', 'USA', 'Communication'),
(226, 'DVD', 'Philips, Sony, Toshiba', '1995', 'Netherlands/Japan', 'Technology'),
(227, 'Digital Video Recorder (DVR)', 'TiVo', '1997', 'USA', 'Technology'),
(228, 'USB (Universal Serial Bus)', 'Ajay Bhatt', '1996', 'India/USA', 'Technology'),
(229, 'Wi-Fi', 'NCR Corporation', '1997', 'USA', 'Technology'),
(230, 'Bluetooth', 'Ericsson', '1998', 'Sweden', 'Technology'),
(231, 'iPod', 'Apple', '2001', 'USA', 'Technology'),
(232, 'Wikipedia', 'Jimmy Wales & Larry Sanger', '2001', 'USA', 'Technology'),
(233, 'Gmail', 'Google', '2004', 'USA', 'Communication'),
(234, 'YouTube', 'Steve Chen, Chad Hurley & Jawed Karim', '2005', 'USA', 'Entertainment'),
(235, 'Twitter', 'Jack Dorsey', '2006', 'USA', 'Social Media'),
(236, 'iPhone', 'Apple', '2007', 'USA', 'Technology'),
(237, 'Android', 'Andy Rubin', '2008', 'USA', 'Technology'),
(238, 'Bitcoin', 'Satoshi Nakamoto', '2009', 'Unknown', 'Finance'),
(239, 'iPad', 'Apple', '2010', 'USA', 'Technology'),
(240, 'Instagram', 'Kevin Systrom & Mike Krieger', '2010', 'USA', 'Social Media'),
(241, 'Tesla Model S', 'Elon Musk', '2012', 'USA', 'Automotive'),
(242, 'CRISPR-Cas9', 'Jennifer Doudna & Emmanuelle Charpentier', '2012', 'USA/France', 'Science'),
(243, 'Virtual Reality Headset (Oculus Rift)', 'Palmer Luckey', '2012', 'USA', 'Technology'),
(244, 'Voice Assistant (Amazon Echo)', 'Amazon', '2014', 'USA', 'Technology'),
(245, 'Apple Watch', 'Apple', '2015', 'USA', 'Technology'),
(246, 'Self-Driving Car', 'Google/Waymo', '2009', 'USA', 'Automotive'),
(247, 'Deepfake', 'Ian Goodfellow', '2014', 'USA', 'Technology');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `password` varchar(32) NOT NULL,
  `userName` varchar(11) NOT NULL,
  `Fname` varchar(32) NOT NULL,
  `Lname` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `password`, `userName`, `Fname`, `Lname`) VALUES
(1, 'password@', 'Vankelv', 'Kelvin', 'van');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `inventions`
--
ALTER TABLE `inventions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;

--
-- AUTO_INCREMENT for table `inventions`
--
ALTER TABLE `inventions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=248;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
