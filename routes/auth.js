import express, { Router } from 'express';
import { getNewAnimals } from '../controllers/animalsViaSupabase.js';

const router = express.Router();

export async function getAnimalById(req, id) {
  const session = await getCurrentSession(req);
  if (session['code' == 1]) console.log(session['error']);
  else {
    const supabaseInstance = session['client'];
    const { data, error } = await supabaseInstance.from('new_animals').select().eq('id',id).single();
    if (error) return {id:null};
    else return data;
  }
}


export async function getAnimals(req, res) {
  const session = await getCurrentSession(req);
  if (session['code'] == 1) res.send(`error in session: ${session['error']}`);
  else {
    const supabaseInstance = session['client'];
    const { data, error } = await supabaseInstance.from('new_animals').select();
    if (error) res.send(`query error in supabase: ${error.message}`);
    else {
      res.set("Access-Control-Allow-Credentials", "true");
      res.set("Access-Control-Allow-Origin", "http://localhost:5173");
      res.status(200).json(data); 
    } 
  }
}




export async function getAnimal(req, res) {
  try {
    const data = await getAnimalById(req, req.params.id);
    res.set("Access-Control-Allow-Credentials", "true");
    res.set("Access-Control-Allow-Origin", "http://localhost:5173");
    res.status(200).json(data);
  } catch (err) {
    res.send(`error in viaSupabase: ${err}`);
  }
}

router.options('/', (req, res, next) => {
  try {
    res.header({
      allow: 'GET, POST, OPTIONS',
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



router.get('/', getNewAnimals);
router.get('/:id',getAnimal)

export default router;
