// const Judge = require('./judge');
// const Submission = require('../domain/submission');
// const SubmissionQueueManager = require('./submissionQueueManager');

// /** 
//  * testing individual judges
// */

// const judge = new Judge(0);

// judge.isBusy()
//     .then((isBusy) => {
//       console.log(isBusy);
//     })
//     .catch((err) => {
//       console.log(err);
//     });

// let submission = new Submission('0', '0', 
// "//nothing",
// "const chai = require('chai'); const mocha = require('mocha'); const assert = chai.assert; const expect = chai.expect; describe('Response', function() { it('should construct the expected Response', function() { assert(1 === 1); }); });");

// function resolvingCallback(res, subRes) {
//   console.log(res);
//   console.log(subRes.testOutput);
// }

// // judge.executeSubmission({}, submission, resolvingCallback);

// /** 
//  * test a group of judges
// */

// /** 
//  * test submission queue manager
// */
// const manager = new SubmissionQueueManager();

// for (let i = 0; i < 5; i++) {
//   console.log(i);
//   let submission = new Submission('0', '0', 
//   "//nothing",
//   "const chai = require('chai'); const mocha = require('mocha'); const assert = chai.assert; const expect = chai.expect; describe('Response', function() { it('should construct the expected Response', function() { assert(1 === 1); }); });");
//   manager.executeSubmission({}, submission, resolvingCallback);
// }