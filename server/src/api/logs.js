const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.json({
    message: 'this is a message',
  });
});

router.post('/', async (req, res, next) => {
  try {
    // eslint-disable-next-line new-cap
    const logEntry = new logEntry(req.body);
    const createdEntry = await logEntry.save();
    res.json(createdEntry);
  } catch (error) {
    // eslint-disable-next-line no-undef
    Console.log(error.constructor.name);
    next(error);
  }
});

module.exports = router;
