// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const MiddleWares = jsonServer.defaults()

server.use(MiddleWares)
server.use(router)
server.listen(() => 
{
  console.log('JSON Server is running')
})