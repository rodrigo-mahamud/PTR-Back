import express from 'express';

const router = express.Router();

type RangeResponse = {

  rangeValues: number[];
  defaultValue: {
    min: number;
    max: number;
  };
};

router.get<{}, RangeResponse>('/', (req, res) => {
  const rangeValues = [1.99, 5.99, 10.99, 30.99, 50.99, 70.99];
  res.json({
    rangeValues: rangeValues,
    defaultValue: {
      min: 5.99,
      max: 30.99,
    },
  });
});

export default router;