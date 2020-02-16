// orm models
const models = require('../models/');

const problemsController = {}

// get all of the problems from the database
problemsController.getAll = async (req, res) => {
  const testCode = models.problem.findAll()
      .then((problems) => {
        let problemsResponse = [];
        for (let i = 0; i < problems.length; i++) {
          problemsResponse[i] = {
            'problemId': problems[i].problem_id,
            'name': problems[i].name,
            'text': problems[i].text
          }
        }
        res.send(problemsResponse);
      })
      .catch((err) => {
        console.log(err);
        res.status('500').send();
      });
}

problemsController.get = async (req, res) => {
  let problemId = req.query.id;
  console.log(problemId);
  models.problem.findOne({where: {problem_id: problemId}})
      .then((problem) => {
        if (problem === null) {
          res.status('404').send('problem with id not found');
        }
        let problemData = {
          'problemId': problem.problem_id,
          'name': problem.name,
          'text': problem.text,
          'defaultCode': problem.default_code,
          'testCode': problem.test
        };
        console.log(problemData);
        res.send(problemData);
      })
      .catch((err) => {
        res.status('500').send();
      });
}

module.exports = problemsController