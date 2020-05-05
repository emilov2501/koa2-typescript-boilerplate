import { RouterContext } from 'koa-router'

class Test {
  public index (ctx: RouterContext) : void {
    ctx.body = 'Hello world'
  }
}

export default new Test()
