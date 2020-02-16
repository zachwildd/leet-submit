const models = require('../models/');

const submitController = {}

// post a new submission for a problem
submitController.post = async (req, res) => {
  // get the problem id & user's code from request
  const problemId = req.body.problemId;
  const userCode = req.body.src;
  console.log('problemId: ' + JSON.stringify(problemId));
  console.log('userCode: ' + JSON.stringify(userCode));

  // get the test code for the problem from the database
  const testCode = models.problem.findOne({
    where: {problem_id: problemId}
  })
      .then((problem) => {
        // once we have the test code
        res.send(problem.test);
        // find a judge to test the submission
        // get response from the judge
        // return the results to the user
        // do any other things with the results (keep record for user stats and so on)
      })
      .catch((err) => {
        console.log(err);
        res.status('500').send();
      });
}

module.exports = submitController