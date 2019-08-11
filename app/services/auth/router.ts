import controller from "./controller";
import { getRouter } from '../../interfaces';

const getRouter: getRouter = (connection, router) => {
  const { getUserById, create } = controller(connection);
  router.get('/:id', ctx => {
    const result = getUserById(ctx.params.id);
    ctx.body = result;
  }
  )
  router.post('/', create)

  return router
}

export default getRouter;