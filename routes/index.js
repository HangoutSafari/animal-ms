import express, { Router } from 'express';
import cors from 'cors';
import { getAnimals, getAnimal } from '../controllers/animalsViaSupabase.js';

const router = express.Router();

router.get('/', (req, res, next) => {
  res.json("it's working :3 ");
});

router.options('/animals', (req, res, next) => {
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

router.get('/animals', cors(), getAnimals);
router.get('/animals/:id',cors(),getAnimal)

export default router;
