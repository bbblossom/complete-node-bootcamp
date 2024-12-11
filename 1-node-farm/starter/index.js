const fs = require('fs');
const http = require('http');


//文件
//同步读取文件 阻塞
// const input = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(input);

// fs.writeFileSync('./txt/output.txt', `This is what we know about the avocado: ${input}.\nCreated on ${Date.now()}`);
// console.log('File written!');

//异步读取文件 非阻塞
// const input =  fs.readFile('./txt/input.txt', 'utf-8', (err, data) => {
//     if (err) return console.log('ERROR! 💥');
//     console.log(data);
//     fs.writeFile('./txt/output.txt', `This is what we know about the avocado: ${data}.\nCreated on ${Date.now()}`, 'utf-8', err => {
//         console.log('Your file has been written 😁');
//     })
// })
// console.log('Will read file!');  //先输出这个，再输出data


//服务器
const server =  http.createServer((req, res) => {
    res.end('hello from the server')
})

server.listen(8000, '127.0.0.1', () => {
    console.log('listening')
})