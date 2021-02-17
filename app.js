import express from 'express'
import HomeRouters from './src/routes/homeRoutes'
import StudentRouters from './src/routes/studentRouter'
import UserRouters from './src/routes/userRouter'

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
    this.app.use('/', StudentRouters)
    this.app.use('/', UserRouters)
  }
}
export default new App().app
