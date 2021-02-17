import { Router } from  'express'
import userController from '../controllers/UserController'

const router = new Router()

router.get('/users', userController.list)
router.get('/users/:id', userController.view)
router.post('/users', userController.insert)
router.put('/users/:id', userController.update)


export default router
