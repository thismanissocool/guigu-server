/**
 * Created by Administrator on 2018/12/3.
 */
const express = require('express');
const db = require('./db');
const router = require('./routers/index');

const app = express();

(async () => {
  await db;
  app.use(router);
})();


app.listen('4000', err => {
  if (!err) console.log('服务器连接成功，请访问:http://localhost:4000');
  else console.log(err);
});