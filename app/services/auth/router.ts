import controller from "./controller";
import { getRouter } from '../../interfaces';

const getRouter: getRouter = (connection, router) => {
  const { getUserById, create } = controller(connection);
  router.get('/:id', getUserById)
  router.post('/', create)

  return router
}

export default getRouter;