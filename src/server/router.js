import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'

const router = new Router();

router.get('/', async (ctx) => {
    ctx.status = 200;
});

export default router
