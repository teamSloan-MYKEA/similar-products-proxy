const express = require('express');
const app = express();
const port = 2999;
const servicePort = 3001;
const path = require('path');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

app.use(cors());
app.use(express.text());
app.use(express.urlencoded({ extended: false }));
app.use(('/:id'), express.static(path.join(__dirname, '../client')));
app.use('/:id/pictures/:id', createProxyMiddleware({ target: 'http://localhost:3000' }));
app.use('/:id/similar/:id', createProxyMiddleware({ target: 'http://localhost:3001' }));
app.use('/:id/reviews/:id', createProxyMiddleware({ target: 'http://localhost:3002' }));
app.use('/:id/bag/:id', createProxyMiddleware({ target: 'http://localhost:3003' }));



app.listen(port, () => {
  console.log('Connected to server on port 2999');
});