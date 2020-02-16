const fs = require('fs');

const judgeController = {}

judgeController.post = async (req, res) => {
  try {
    if (req.body === null || req.body.src === null || req.body.test === null) {
      console.log(JSON.stringify(req));
      res.status('400');
      res.send('src or test cannot be null');
    }
    // parse request body
    const src = req.body.src;
    const test = req.body.test;

    // create js files for src and test code    
    let thisDir = process.cwd();
    fs.writeFileSync(thisDir + '/code/src.js', src);
    fs.writeFileSync(thisDir + '/code/test.js', test);

    // run mocha tests
    res.send('congrats');
  }
  catch (err) {
    console.log(err);
    res.status('400');
    res.send('error handling /judge post');
  }
  finally {
    // cleanup test and src files
  }
}

module.exports = judgeController