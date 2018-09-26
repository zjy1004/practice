const express = require('express');//引入
const app = express();//生成app实例
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.sendFile(path.resolve( __dirname, './post请求表单.html'))
});

app.post('/post', (req, res) => {
    const {username, password} = req.body;
    res.send(
        `   
     <h1>你的用户名是:${username}</h1>
     <h2>你的密码是:${password}</h2>
   `
    )
});

app.listen(3000);