// Reading and Writing Files
const fs = require('fs');
// Creating a Simple Web Server
const http = require('http');
// Routing
const url = require('url');

const slugify = require('slugify');

// Using Modules
const replaceTemplate = require('./modules/replaceTemplate');

///////////////////////////////////
// FILES

// Blocking, synchronous way
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8")
// console.log(textIn)

// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`
// fs.writeFileSync("./txt/output.txt", textOut)
// console.log("File written")

// Non-blocking, asynchronous way
// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2)
//     fs.readFile(`./txt/append.txt`, "utf-8", (err, data3) => {
//       console.log(data3)
//       fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
//         console.log("Your file has been written 😄")
//       })
//     })
//   })
// })
// console.log("Will read file!")

//////////////////////////////////
// SERVER

// 使用同步代码只运行一次
const tempOverview = fs.readFileSync(
  `${__dirname}/template/template-overview.html`,
  'utf-8'
);
const tempProduct = fs.readFileSync(
  `${__dirname}/template/template-product.html`,
  'utf-8'
);
const tempCard = fs.readFileSync(
  `${__dirname}/template/template-card.html`,
  'utf-8'
);
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

// create slugs
const slugs = dataObj.map((el) => slugify(el.productName, { lower: true }));

const server = http.createServer((req, res) => {
  // const pathname = req.url
  const { query, pathname } = url.parse(req.url, true);
  // Overview page
  if (pathname === '/' || pathname === '/overview') {
    res.writeHead(200, {
      'Content-Type': 'text/html',
    });
    const cardsHtml = dataObj
      .map((el) => replaceTemplate(tempCard, el))
      .join('');

    const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);

    res.end(output);

    // Product page
  } else if (pathname === '/product') {
    res.writeHead(200, {
      'Content-Type': 'text/html',
    });
    const product = dataObj[query.id];
    const output = replaceTemplate(tempProduct, product);
    res.end(output);

    // API
  } else if (pathname === '/api') {
    /**
     * 相对路径存在问题
     * nodejs 中点 . 是脚本运行的地方, __dirname 是当前目录
     * require 函数例外
     */
    // fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data) => {
    //   const productData = JSON.parse(data)
    //   res.writeHead(200, {
    //     'Content-Type': 'application/json'
    //   })
    //   res.end(data)
    // })
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    res.end(data);

    // Not found
  } else {
    res.writeHead(404, {
      'Content-Type': 'text/html',
      'my-own-header': 'hello-world',
    });
    res.end('<h1>Page not found</h1>');
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to requests on port 8000 ...');
});
