import { Router } from 'express';

import UserController from './app/controllers/UserController';
import ProdutoController from './app/controllers/ProdutoController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.post('/produtos', ProdutoController.store);

routes.get('/produtos', ProdutoController.index);

routes.put('/users', UserController.update);

routes.delete('/produtos/:id', ProdutoController.delete);

routes.put('/produtos/:id', ProdutoController.update);

export default routes;
