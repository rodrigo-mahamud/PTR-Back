import express from 'express';

const router = express.Router();

type RangeResponse = {
  min: number;
  max: number;
};

router.get<{}, RangeResponse>('/', (req, res) => {
  res.json({
    min: 0,
    max: 200,
  });
});

export default router;