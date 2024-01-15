import express, { Router } from 'express';
import cors from 'cors';
import { getAnimals, getAnimal } from '../controllers/animalsViaSupabase.js';
import { deleteAnimal, getAllAnimals, getChosenAnimal, insertAnimal, updateAnimal } from '../controllers/animalsViaSupabase.js';
const router = express.Router();

router.options('/', (req, res, next) => {
  try {
    res.header({
      allow: 'GET, POST, PUT, DELETE, OPTIONS',
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

router.get('/', cors(), getAllAnimals);
router.get('/:id', cors(), getChosenAnimal);
router.post('/', cors(), insertAnimal);
router.put('/:id', cors(), updateAnimal);
router.delete('/:id', cors(), deleteAnimal);
export default router;
