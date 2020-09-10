require('newrelic');

const express = require('express');
const path = require('path');
const cors = require('cors');

const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 2999;

// const servicePort = 3001;

app.use(cors());
// app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: false }));

app.use(('/:id'), express.static(path.join(__dirname, '../client')));

// app.use('/:id/similar/:id', createProxyMiddleware({ target: 'http://localhost:3001' }));
// app.use('/:id/bag/:id', createProxyMiddleware({ target: 'http://localhost:3003' }));

// app.use('/:id/pictures/:id', createProxyMiddleware({ target: 'http://3.15.203.117:3000' }));
// app.use('/:id/similar/:id', createProxyMiddleware({ target: 'http://52.207.78.191' }));
// app.use('/:id/reviews/:id', createProxyMiddleware({ target: 'http://18.223.24.49:3002' }));

app.use('/:id/pictures/:id', createProxyMiddleware({ target: 'http://18.220.212.160:3000' }));
app.use('/:id/similar/:id', createProxyMiddleware({ target: 'http://54.177.81.158:3001' }));
app.use('/:id/reviews/:id', createProxyMiddleware({ target: 'http://3.21.37.48' }));

app.listen(port, () => {
  console.log(`Similar-Products-Proxy is listening at http://localhost:${port}`);
});

//http://52.207.78.191