import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import normalrange from './normalrange';
import fixedrange from './fixedrange';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/normalrange', normalrange);
router.use('/fixedrange', fixedrange);

export default router;
