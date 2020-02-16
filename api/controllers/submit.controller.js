const submitController = {}

// post a new submit
submitController.post = async (req, res) => {
  const src = req.body.src;
  const test = req.body.test;
  console.log('src: ' + JSON.stringify(src));
  console.log('test: ' + JSON.stringify(test));
  res.send(req.body);
}

module.exports = submitController