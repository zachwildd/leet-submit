DROP DATABASE IF EXISTS master;
CREATE DATABASE master;
USE master;

CREATE TABLE `problem` (
  `problem_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `text` text NOT NULL,
  `test` mediumtext,
  PRIMARY KEY (`problem_id`),
  UNIQUE KEY `problem_id_UNIQUE` (`problem_id`)
);
