import express from 'express'
import HomeRouters from './src/routes/homeRoutes'

class App {
  constructor() {
    this.app = express()
    this.middlewares()
    this.routes()
  }
  middlewares() {
    this.app.use(express.urlencoded({extended: true}))
    this.app.use(express.json())
  }
  routes() {
    this.app.use('/', HomeRouters)
  }
}
export default new App().app
