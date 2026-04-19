var express = require("express");
var router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Ontario Fertility Journey' });
});

router.get('/stage1', (req, res) => {
  res.render('stage1', { title: 'Stage 1: Before the Family Doctor — Ontario Fertility Journey' });
});

router.get('/stage2', (req, res) => {
  res.render('stage2', { title: 'Stage 2: The Investigative Cycle — Ontario Fertility Journey' });
});

router.get('/stage3', (req, res) => {
  res.render('stage3', { title: 'Stage 3: Treatment & Funding — Ontario Fertility Journey' });
});

module.exports = router;
