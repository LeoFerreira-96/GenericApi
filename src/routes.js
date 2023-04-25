import { Router } from 'express'
import errorHandler from './middlewares/errorHandler';
import PostController from './app/controllers/PostController';
import CategoryController from './app/controllers/CategoryController'

const routes = Router();

routes.use(errorHandler)
routes.get('/posts', PostController.index)
routes.post('/posts', PostController.store)
routes.put('/posts/:id', PostController.update)
routes.delete('/posts/:id', PostController.delete)
routes.get('/category', CategoryController.index)
routes.post('/category', CategoryController.store)
routes.put('/category/:id', CategoryController.update)
routes.delete('/category/:id', CategoryController.delete)


export default routes


