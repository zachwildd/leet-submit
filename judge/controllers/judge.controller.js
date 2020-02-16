const fs = require('fs');
const { exec } = require("child_process");

const judgeController = {}
/**
 * Flag for the Judge's execution status. True if the judge is executing a problem, false otherwise.
 */
let inProgress = false;

judgeController.status = async (req, res) => inProgress;

judgeController.post = async (req, res) => {
    console.log('Received request to judge submission');
    inProgress = true;

    let response = '';
    let responseCode = '';

    try {
      // check for boundary conditions
      if (req.body == null || req.body.src == null || req.body.test == null) {
        console.log('Badly formatted request body: ' + req.body);
        res.status('400').send('Badly formatted request body');
      }

      // parse request body
      const src = req.body.src;
      const test = req.body.test;

      // create js files for src and test code    
      let thisDir = process.cwd();
      fs.writeFileSync(thisDir + '/code/src.js', src);
      fs.writeFileSync(thisDir + '/code/test.js', test);

      // run mocha tests
      await exec("mocha " + thisDir + "/code/test.js", (error, stdout, stderr) => {
        // cleanup files
        cleanupFiles();
        // send response to client
        if (error) {
          console.log(error);
          inProgress = false;
          res.status(500).send(error);
          return;
        }
        if (stderr) {
          console.log(stderr);
          inProgress = false;
          res.status(200).send(stderr);
          return;
        }
        else {
          console.log(stdout);
          inProgress = false;
          res.status(200).send(stdout);
          return;
        }
      });
  }
  catch (err) {
      console.log(err);
      // cleanup files
      cleanupFiles();
      inProgress = false;
      // send error response
      res.status('400').send(err.message);
  } finally {

  }
}

function cleanupFiles() {
  // cleanup test and src files
  let thisDir = process.cwd();
  fs.truncate(thisDir + '/code/src.js', 0, function(){console.log('Cleaned up src.js')});
  fs.truncate(thisDir + '/code/test.js', 0, function(){console.log('Cleaned up test.js')});
}

module.exports = judgeController