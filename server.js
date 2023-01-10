// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, "db.json"));
const MiddleWares = jsonServer.defaults()

server.use(MiddleWares)
server.use(jsonServer.bodyParser);
server.use("/api/v1", router);
server.listen(() => 
{
  console.log('JSON Server is running')
})