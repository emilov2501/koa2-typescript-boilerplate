
import Application from 'koa'
import cors from 'koa-cors'
import morgan from 'koa-morgan'
import router from './routes'
import dotenv from 'dotenv'

dotenv.config()

class App {
  public app: Application

  constructor () {
    this.app = new Application()

    this.middlewares()
    this.database()
    this.routes()
  }

  private middlewares () : void {
    this.app.use(cors())
    this.app.use(morgan('dev'))
  }

  private database () : void {
    // Your database connect
  }

  private routes () : void {
    this.app
      .use(router.routes())
      .use(router.allowedMethods())
  }
}

export default new App().app
