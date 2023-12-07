import { getAnimalsData } from "../adapters/supabaseAdapter.js";

export async function getAnimals(req, res) {
  try {
    const data = await getAnimalsData();
    res.status(200).json(data);
  } catch (err) {
    res.send(`error in viaSupabase: ${err}`);
  }
}
