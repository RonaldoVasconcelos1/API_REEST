import { Router } from  'express'
import userController from '../controllers/UserController'

const router = new Router()

router.get('/users', userController.list)
router.get('/users', userController.view)
router.post('/users', userController.insert)
router.patch('/users', userController.update)


export default router
