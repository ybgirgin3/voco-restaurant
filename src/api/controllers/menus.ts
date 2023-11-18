import express from 'express';
import { menuMock } from '../mocks';

import MessageResponse from '../../interfaces/MessageResponse';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'menu list of a restaurant',
    response: menuMock,
  });
});

export default router;
