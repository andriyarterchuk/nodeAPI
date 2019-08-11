import controller from "./controller";
import { getRouter } from '../../interfaces';
import { RouterContext } from 'koa-router';
import sendResponse from '../../base/response';

const getRouter: getRouter = ({ db: { mongo: connection } }, router) => {
  const { getAllHotels, getHotelById, createHotel } = controller(connection);
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