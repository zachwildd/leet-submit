// // submission domain model
// const Submission = require('../domain/submission');
// const SubmissionQueue = require('./submissionQueue');
// // a list of judges that are expected to exist on ports 7331-5
// const Judges = require('./judges');

// class SubmissionQueueManager {
//   constructor() {
//     // initialize empty queue
//     this.queue = new SubmissionQueue();
//     // initialize judges
//     this.judges = new Judges();

//     // start the submission queue loop
//     setInterval(this.loop.bind(this), 2000);
//   }

//   /**
//    * The main running loop for the submission queue. This loop runs until
//    * the program executes. Each loop it checks to see if the queue has any
//    * submissions. If there are any submissions it pulls them from the queue,
//    * checks to see if a judge is available, and then sends the submission
//    * to the judge for grading.
//    *
//    * @memberof SubmissionQueue
//    */
//   loop() {
//     let judges = this.judges;
//     console.log('running loop');
//     console.log('queue len ' + this.queue.length());
//     if (!this.queue.isEmpty()) {
//       console.log('queue is not empty');
//       // check if a judge is free
//       judges.isAJudgeFree()
//           .then((result) => {
//             if (result === true) {
//               console.log('judge is free to run submission');
//               let submission = this.queue.popSubmission();
//               judges.executeSubmission(
//                 submission.response,
//                 submission.submission,
//                 submission.callback
//               );
//             }
//           })
//           .catch((err) => {
//             console.log('judge is free errroed')
//             console.log(err);
//           });
//     }
//   }

//   /**
//    * Add subimission to the queue for eventual execution.
//    *
//    * @param {*} res response object
//    * @param {Submission} submission
//    * @param {*} callback call when submission is resolved
//    * @memberof SubmissionQueue
//    */
//   executeSubmission(res, submission, callback) {
//     const submissionObject = {
//       'response' : res,
//       'submission' : submission,
//       'callback': callback
//     };
//     this.queue.queueSubmission(submission);
//   }
// }

// module.exports = SubmissionQueueManager;