const express = require('express');//引入

const app = express();//生成实例

app.get('/', (req, res) => {
   res.send(`
         <!DOCTYPE html>
         <html lang="en">
         <head>
             <meta charset="UTF-8">
             <title>Title</title>
         </head>
         <body>
            <h1>我是html</h1>
         </body>
         </html>`
   )
});

app.listen(3000);