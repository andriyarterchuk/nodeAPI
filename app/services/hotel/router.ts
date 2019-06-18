import controller from "./controller";
import { getRouter } from '../../interfaces';

const getRouter: getRouter = (connection, router) => {
  const { getAll, getById, create } = controller(connection);
  router.get('/', getAll)
  router.get('/:id', getById)
  router.post('/', create)

  return router
}

export default getRouter;