import { Router } from 'express';
import AuthenticateUserController from './Controllers/AuthenticateUserController';
import CreateMessageController from './Controllers/CreateMessageController';
import { ensureAuthenticated } from './middleware/ensureAuthenticated';
import GetLast3MessageController from './Controllers/GetLast3MessageController';
import ProfileUserController from './Controllers/ProfileUserController';

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle)
router.post("/message", ensureAuthenticated, new CreateMessageController().handle)
router.get("/messages/last3", new GetLast3MessageController().handle)
router.get("/profile", ensureAuthenticated ,new ProfileUserController().handle)

export default router;