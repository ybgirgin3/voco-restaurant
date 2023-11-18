import express from 'express';
import { orderMock } from '../mocks';

import MessageResponse from '../../interfaces/MessageResponse';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'order list of user',
    response: orderMock,
  });
});

export default router;
