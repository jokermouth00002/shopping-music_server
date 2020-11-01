const Koa = require('koa')
const cors = require('@koa/cors')
const bodyParser = require('koa-bodyparser')
const router = require('./router')

const app = new Koa()

const port = 39876

app.use(bodyParser())
// app.use(cors())
app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*')
  await next()
})
app.use(router.routes())
app.use(router.allowedMethods())

console.log(`server start at http://localhost:${port}`)
app.listen(port)
