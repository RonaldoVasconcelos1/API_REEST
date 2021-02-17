import { Router } from  'express'
import studentController from '../controllers/StudentController'

const router = new Router()

router.get('/student', studentController.list)
router.get('/student', studentController.view)
router.post('/student', studentController.insert)
router.patch('/student', studentController.update)
router.delete('/student', studentController.delete)

export default router
