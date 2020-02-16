DROP DATABASE IF EXISTS master;
CREATE DATABASE master;
USE master;

CREATE TABLE `problem` (
  `problem_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `text` text NOT NULL,
  `default_code` text,
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
`default_text`,
`test`
) 
VALUES 
(
"Return 0",
"Make this return 0",
"/**\n* Do not modify this classes existing methods; */\n class Solution {\n constructor() {}\n \n solution() {\n/** WRITE YOUR CODE IN THIS METHOD */\n return 0;\n}\n}\n module.exports = Solution;",
"const chai = require('chai'); const mocha = require('mocha'); const Solution = require('./src'); const solution = new Solution(); const assert = chai.assert; const expect = chai.expect; describe('Response', function() { it('the solution should return 0', function() { assert(solution.solution() === 0); }); });"
);

SELECT * FROM problem;
