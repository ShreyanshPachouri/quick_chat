import { Router } from "express"
import AuthController from "../controllers/AuthController.js"
import ChatGroupController from "../controllers/ChatGroupController.js"
import authMiddleware from "../middlewares/AuthMiddleware.js"
import ChatGroupUserController from "../controllers/ChatGroupUserController.js"

const router = Router()

router.post('/auth/login', AuthController.login)
router.post('/chat-group', authMiddleware, ChatGroupController.store)
router.get('/chat-group', authMiddleware, ChatGroupController.index)
router.get('/chat-group/:id', ChatGroupController.show)
router.put('/chat-group/:id', authMiddleware, ChatGroupController.update)
router.delete('/chat-group/:id', authMiddleware, ChatGroupController.destroy)
router.get('/chat-group-users',  ChatGroupUserController.index)
router.post('/chat-group-users', ChatGroupUserController.store)

export default router