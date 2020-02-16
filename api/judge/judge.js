const axios = require('axios');
const SubmissionResult = require('../domain/submissionResult');

class Judge {
  /**
   * Creates an instance of judge. The num parameter will determine which
   * port this class should expect the judge to be listening on.
   * PORT = 7331 + num
   * 
   * @param {*} num (0-4) the number of the judge being created
   */
  constructor(num) {
    this.num = num;
    this.port = 7331 + num;
    this.address = '0.0.0.0';
  }

  // get whether or not the judge is bust currently judging a submission
  isBusy() {
    let port = this.port;
    return new Promise(function(resolve, reject) {
      // make a request
      axios.get('http://localhost:' + port + '/judge/status')
          .then((status) => {
            resolve(status.data.status);
            console.log('getting status of judge');
            console.log(status.data.status);
            return;
          })
          .catch((err) => {
            // if error is connection refuse
            if (err.code === 'ECONNREFUSED') {
              resolve(true);
              return;
            }
            reject(err);
            return;
          });
    })
  }

  // submit a submission to a judge
  async executeSubmission(submission) {
    console.log('judge#' + this.num + ' executing submission');
    let port = this.port;
    let data = {
      'src': '',
      'test': submission.testCode
    };
    return new Promise(function (resolve, reject) {
      axios.post('http://localhost:' + port + '/judge', data)
          .then((result) => {
            console.log('received response from judge: ' + JSON.stringify(result.data));
            let submissionResult = new SubmissionResult(
              result.data.output,
              result.data.outcome
            );
            resolve(submissionResult);
          })
          .catch((err) => {
            console.log('error in executeSubmission: ' + err);
            reject(err);
          });
    })
  }
}

module.exports = Judge;