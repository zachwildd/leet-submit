DROP DATABASE IF EXISTS master;
CREATE DATABASE master;
USE master;

CREATE TABLE `problem` (
  `problem_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `text` text NOT NULL,
  `test` text,
  PRIMARY KEY (`problem_id`),
  UNIQUE KEY `problem_id_UNIQUE` (`problem_id`)
);

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `password` varchar(60) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_id_UNIQUE` (`user_id`)
);

INSERT INTO problem 
(
`name`,
`text`,
`test`
) 
VALUES 
(
"Return 0",
"Make this return 0",
"const chai = require('chai'); const mocha = require('mocha'); const assert = chai.assert; const expect = chai.expect; describe('Response', function() { it('should construct the expected Response', function() { assert(1 === 2); }); });"
);

SELECT * FROM problem;
