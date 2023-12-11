import { getAnimalsData,getAnimalById } from "../adapters/supabaseAdapter.js";

export async function getAnimals(req, res) {
  try {
    const data = await getAnimalsData();
    res.status(200).json(data);
  } catch (err) {
    res.send(`error in viaSupabase: ${err}`);
  }
}

export async function getAnimal(req, res) {
  try {
    const data = await getAnimalById(req.params.id);
    res.status(200).json(data);
  } catch (err) {
    res.send(`error in viaSupabase: ${err}`);
  }
}