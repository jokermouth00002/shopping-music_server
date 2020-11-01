const Router = require('koa-router')
const router = new Router();
const fs = require('fs')

let musicData = fs.readFileSync('./music.json', {
  encoding: 'utf8'
})

let shopData = fs.readFileSync('./shop.json', {
  encoding: 'utf8'
})

musicData = JSON.parse(musicData)
shopData = JSON.parse(shopData)

router.get('/', async ctx => {
  ctx.body = 'hello'
})

router.get('/shop/:key', async ctx => {
  // ctx.params // 物件，來自網址的變數
  // ctx.request.query // 物件，網址的參數，以問號為分界
  // ctx.request.body // 物件
  ctx.body = shopData[ctx.params.key]
})

router.get('/music/:key', async ctx => {
  ctx.body = musicData[ctx.params.key]
})

module.exports = router
