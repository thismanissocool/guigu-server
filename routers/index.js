/**
 * Created by Administrator on 2018/12/3.
 */
const express = require('express');

const router = new express.Router();

router.get('/', (req, res) => {
  res.send('jhgjhgjhgjh')
});

module.exports = router;