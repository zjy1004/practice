const express = require('express'); // 引入express
const app = express(); // 生成一个app实例
const path = require('path');
const formidable = require('formidable');



app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './图片上传.html'))
});

app.post('/upload',  (req, res) => {
    const form = new formidable.IncomingForm();// 新建有一个表单管理对象
    form.maxFieldsSize = 20 * 1024 * 1024;
    form.keepExtensions = true;
    form.uploadDir = path.resolve(__dirname, './public');// 设置上传文件的缓存位置


    form.parse(req, function(err, fields, files) {
        console.log('fields', fields);
        console.log('files', files)
    });

    form.on('end', function () {
        console.log('success');
        res.send('图片上传成功')
    })

});

app.listen(3000)