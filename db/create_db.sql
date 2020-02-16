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

```javascript
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
  while (lists.length > 1) {
    lists.unshift(mergeTwoLists(lists.pop(), lists.pop()))
  }
  return lists[0] || []
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function mergeTwoLists (l1, l2) {
  let prehead = { next: null }
  let p = prehead
  let p1 = l1
  let p2 = l2
  while (p1 && p2) {
    let pSel
    if  (p1.val < p2.val) {
      pSel = p1
      p1 = p1.next
    } else {
      pSel = p2
      p2 = p2.next
    }
    p.next = pSel
    p = pSel
  }

  p.next = p1 || p2

  return prehead.next
};
```",
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
};",
"const chai = require('chai');
const mocha = require('mocha'); 
const Solution = require('./src');
const solution = new Solution();
const assert = chai.assert; 
const expect = chai.expect; 
describe('Response', function() { 
  it('the solution should return 0', function() { 
    assert(solution.solution() === 0); 
  }); 
});"
);


SELECT * FROM problem;
