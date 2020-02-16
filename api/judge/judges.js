// const Judge = require('./judge');

// class Judges {
//   constructor() {
//     this.judges = [];

//     /** we are hard coding that there should be 4 judges on ports 7331-5 */
//     for (let i = 0; i < 4; i++) {
//       let judge = new Judge(i);
//       this.judges.push(judge);
//     }
//   }

//   isAJudgeFree() {
//     let judge = false;
//     let judges = this.judges;
//     return new Promise(function (resolve, reject) {
//       judges[0].isBusy()
//           .then((isBusy) => {
//             if (!isBusy) {
//               resolve(true);
//               return;
//             }
//             return judges[1].isBusy();
//           })
//           .then((isBusy) => {
//             if (!isBusy) {
//               resolve(true);
//               return;
//             }
//             return judges[2].isBusy();
//           })
//           .then((isBusy) => {
//             if (!isBusy) {
//               resolve(true);
//               return;
//             }
//             return judges[3].isBusy();
//           })
//           .then((isBusy) => {
//             if (!isBusy) {
//               resolve(true);
//               return;
//             }
//             resolve(false);
//             return;
//           })
//           .catch((err) => {
//             reject(err);
//           });
//     });
//   }

//   /**
//    * Execute a submission with a judge.
//    *
//    * @param {*} response
//    * @param {Submission} submission
//    * @param {*} callback
//    * @memberof Judges
//    */
//   executeSubmission(response, submission, callback) {
//     console.log('judges executing a submission');
//     // find a non busy judge and execute the response
//     this.getFreeJudge()
//         .then((judge) => {
//           console.log('got free judge');
//           // judge will callback with submission result
//           return judge.executeSubmission(
//               submission.response,
//               submission.submission,
//               submission.callback
//           );
//         })
//         .catch((err) => {
//           if (err === false) {
//             // no free judges
//             return;
//           }
//         });
//   }

//   getFreeJudge() {
//     console.log('getting free judge');
//     let judges = this.judges;
//     return new Promise(function (resolve, reject) {
//       judges[0].isBusy()
//           .then((isBusy) => {
//             if (!isBusy) {
//               resolve(judges[0]);
//               return;
//             }
//             return judges[1].isBusy();
//           })
//           .then((isBusy) => {
//             if (!isBusy) {
//               resolve(judges[1]);
//               return;
//             }
//             return judges[2].isBusy();
//           })
//           .then((isBusy) => {
//             if (!isBusy) {
//               resolve(judges[2]);
//               return;
//             }
//             return judges[3].isBusy();
//           })
//           .then((isBusy) => {
//             if (!isBusy) {
//               resolve(judges[3]);
//               return;
//             }
//             resolve(false);
//             return;
//           })
//           .catch((err) => {
//             reject(err);
//           });
//     });
//   }
// }

// module.exports = Judges;