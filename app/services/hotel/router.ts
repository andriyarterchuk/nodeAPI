import { getRouter } from '../../interfaces';
import { RouterContext } from 'koa-router';
import sendResponse from '../../base/response';

const getRouter: getRouter = ({ getAllHotels, getHotelById, createHotel }, router) => {
  router.get('/', async (ctx: RouterContext) => {
    try {
      const result = await getAllHotels();
      sendResponse(ctx, result);
    } catch (error) {
      const result = {
        result: error,
        status: 500
      }
      sendResponse(ctx, result);
    }
  })
  router.get('/:id', async ctx => {
    const result = await getHotelById(ctx.params.id);
    sendResponse(ctx, result);
  })
  router.post('/', async ctx => {
    const result = await createHotel(ctx.request.body);
    sendResponse(ctx, result);
  })

  return router
}

export default getRouter;