import Router from 'koa-router'
import TestController from '@/controllers/test.controller'

const router: Router = new Router()

router.get('/', TestController.index)

export default router
