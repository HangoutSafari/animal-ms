import express, { Router } from 'express';
import cors from 'cors';
import { getAnimals, getAnimal } from '../controllers/animalsViaSupabase.js';

const router = express.Router();

router.options('/', (req, res, next) => {
  try {
    res.header({
      allow: 'GET, POST, OPTIONS',
      'Content-type': 'application/json',
      Data: Date.now(),
      'Content-length': 0,
    });

    // response
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});

router.get('/', cors(), getAnimals);
router.get('/:id',cors(),getAnimal)

export default router;
