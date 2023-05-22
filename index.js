// set up express
let express = require('express');
let app = express()
app.use(express.urlencoded({
  extended: false
}))

// 首頁路由
app.get('/', function (req, res) {
  res.send(`
    <h1>Welcome to the Home Page</h1>
    <p>Click the links below to answer the questions.</p>
    <ul>
      <li><a href="/question1">Question 1</a></li>
    </ul>
  `);
});

// 第一個問題的 GET 路由
app.get('/question1', function (req, res) {
  res.send(`
    <form action="/answer1" method="POST">
      <p>Question 1: What is your favorite color?</p>
      <input name="color" autocomplete="off">
      <button>Submit</button>
    </form>
  `);
});



//設定port位置
let port = 3000;
//監聽 port
app.listen(port);


