import { RouterContext } from 'koa-router'

class Test {
  public index (ctx: RouterContext) : void {
    ctx.body = 'sfsdfsdf'
  }
}

export default new Test()
