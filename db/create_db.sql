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
`default_code`,
`test`
) 
VALUES 
(
"Return 0",
"Make this return 0",
"/**\n* Do not modify this classes existing methods; */\n class Solution {\n constructor() {}\n \n solution() {\n/** WRITE YOUR CODE IN THIS METHOD */\n return 0;\n}\n}\n module.exports = Solution;",
"const chai = require('chai'); const mocha = require('mocha'); const Solution = require('./src'); const solution = new Solution(); const assert = chai.assert; const expect = chai.expect; describe('Response', function() { it('the solution should return 0', function() { assert(solution.solution() === 0); }); });"
);

INSERT INTO problem 
(
`name`,
`text`,
`default_code`,
`test`
) 
VALUES 
(
"Merge k Sorted Lists",
"## Merge k Sorted Lists

### Problem:

Merge *k* sorted linked lists and return it as one sorted list.

**Example:**

```
Input:
[
  1->4->5,
  1->3->4,
  2->6
]
Output: 1->1->2->3->4->4->5->6
```

### Solution:

#### ONE

Priority Queue. O(N * log(K)).

Since JavaScript does not provide a standard built-in Priority Queue data structure, it is challenging to implement an efficient one barehanded. 

#### TWO

Divide and conquer. Also O(N * log(K)).

Divide N lists into ceil(N/2) pairs and merge your way up.

From: https://github.com/crimx/leetcope/blob/master/problems/023.%20Merge%20k%20Sorted%20Lists.md
",
"
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  /** WRITE YOUR CODE HERE */
};
module.exports = mergeKLists;
",
"const chai = require('chai');
const mocha = require('mocha'); 

const merge = require('./src');

const assert = chai.assert; 
const expect = chai.expect; 

describe('Merge K Sorted Lists', function() { 
  it('returns empty array if there are no input arrays', function () {
    expect(merge([])).to.deep.equal([])
  })
  it('returns single array intact', function () {
    expect(merge([[1, 3, 5, 7]])).to.deep.equal([1, 3, 5, 7])
  })
  it('merges array into itself', function () {
    expect(merge([[1, 3, 5, 7], [1, 3, 5, 7]])).to.deep.equal([1, 1, 3, 3, 5, 5, 7, 7])
  })
  it('works', function () {
    expect(merge([
      [1, 3, 5, 7],
      [2, 4, 6, 8],
      [0, 9, 10, 11],
    ])).to.deep.equal([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
  })
});
// From: https://github.com/jedwards1211/merge-k-sorted-arrays"
);

INSERT INTO problem (`name`,`text`,`default_code`,`test`) VALUES ("String to Integer", "","","");
INSERT INTO problem (`name`,`text`,`default_code`,`test`) VALUES ("3Sum", "","","");
INSERT INTO problem (`name`,`text`,`default_code`,`test`) VALUES ("Next Permutation", "","","");
INSERT INTO problem (`name`,`text`,`default_code`,`test`) VALUES ("DFS", "","","");
INSERT INTO problem (`name`,`text`,`default_code`,`test`) VALUES ("BFS", "","","");
INSERT INTO problem (`name`,`text`,`default_code`,`test`) VALUES ("LRU Cache", "","","");
INSERT INTO problem (`name`,`text`,`default_code`,`test`) VALUES ("Flood fill", "","","");
INSERT INTO problem (`name`,`text`,`default_code`,`test`) VALUES ("Quicksort", "","","");
INSERT INTO problem (`name`,`text`,`default_code`,`test`) VALUES ("Bucket sort", "","","");
INSERT INTO problem (`name`,`text`,`default_code`,`test`) VALUES ("Radix sort", "","","");

SELECT * FROM problem;
