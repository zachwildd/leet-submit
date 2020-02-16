// orm models
const models = require('../models/');
// submission domain model
const Submission = require('../domain/submission');
// submission queue for dispatching submissions to judges
// const submissionQueueManager = require('../judge/submissionQueueManager.js');
// judge
const Judge = require('../judge/judge');
const judge = new Judge(0);

const submitController = {}

// users posts a new submission for a problem
submitController.post = async (req, res) => {
  // get the problem id & user's code from request
  const problemId = req.body.problemId;
  const userCode = req.body.src;
  console.log('problemId: ' + JSON.stringify(problemId));
  console.log('userCode: ' + JSON.stringify(userCode));

  // get the tests for the problem from the database
  const testCode = models.problem.findOne({
    where: {problem_id: problemId}
  })
      .then((problem) => {
        // create new submission for problem
        const submission = new Submission(problem.problem_id, 0, userCode, problem.test);
        // add submission to queue with callback for resolution
        // submissionQueueManager.executeSubmission(res, submission, resolveSubmission);
        return judge.executeSubmission(submission);
      })
      .then((submissionResult) => {
        const response = {
          'outcome': submissionResult.outcome,
          'output': submissionResult.output
        };
        res.send(response);
      })
      .catch((err) => {
        console.log(err);
        res.status('500').send();
      });
}

module.exports = submitController