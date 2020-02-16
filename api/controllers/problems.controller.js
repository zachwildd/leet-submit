// orm models
const models = require('../models/');

const problemsController = {}

// get all of the problems from the database
problemsController.get = async (req, res) => {
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

module.exports = problemsController