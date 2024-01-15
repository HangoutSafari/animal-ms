import express, { Router } from 'express';
import { deleteAuthAnimal, getAuthAllAnimals, getAuthAllAnimalsFull, getAuthChosenAnimal, insertAuthAnimal, updateAuthAnimal } from '../controllers/animalsViaSupabase.js';


const router = express.Router();

router.options('/', (req, res, next) => {
  try {
    res.header({
      allow: 'GET, POST, PUT, DELETE, OPTIONS',
      'Content-type': 'application/json',
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Origin":"http://localhost:5173",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
      Data: Date.now(),
      'Content-length': 0,
    });

    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});



router.get('/', getAuthAllAnimals);
router.get('/full', getAuthAllAnimalsFull);
router.get('/:id',getAuthChosenAnimal);
router.post('/', insertAuthAnimal);
router.put('/:id', updateAuthAnimal);
router.delete('/:id', deleteAuthAnimal);
export default router;
