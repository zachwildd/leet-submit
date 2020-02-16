const Router = require('express').Router;
const judgeController = require('../controllers/judge.controller')

const router = new Router()

router.get('/status', (req, res) => {
  let status = judgeController.status();
  res.status(200).send({
    'status': status
  });
});

router.post('/', (req, res) => {
  judgeController.post(req, res)
    .catch( (err) => {
      res.status(500).send();
    })
});

module.exports = router;