const Router = require('express').Router
const judgeController = require('../controllers/judge.controller')

const router = new Router()

router.post('/', (req, res) => {
  judgeController.post(req, res)
    .catch( err => {
    })
});

module.exports = router;