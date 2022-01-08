import { Server } from "socket.io";
import { createServer } from 'http';
import express from 'express';

const app = express();

/* 跨域设置 */
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

const server = createServer(app);

const io = new Server(server, {
  path: '/chat/message',
  serveClient: false,
  cookie: false,
});

io.on('connection', () => {
  console.log('client connection');
});

server.listen(8080, () => {
  console.log("listening on *:8080");
});


