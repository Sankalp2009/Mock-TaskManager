// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const MiddleWares = jsonServer.defaults()

server.use(MiddleWares)
server.use(router)
server.listen(8000, () => {
  console.log(`JSON Server is running at http://localhost:${8000}`)
})