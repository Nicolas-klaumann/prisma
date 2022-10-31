import { Router } from 'express'

import UserController from './controller/UserController';
import PostContoller from './controller/PostContoller';

const router = Router();

router.post('/user', UserController.createUser);
router.get('/users', UserController.findAllUsers);
router.get('/user/:id', UserController.findUser);
router.put('/user/:id', UserController.updateUser);
router.delete('/user/:id', UserController.deleteUser);


router.post('/post/user/:id', PostContoller.createPost);
router.put('/post/:id', PostContoller.updatePost);
router.get('/posts', PostContoller.FindAllPosts);

export { router };