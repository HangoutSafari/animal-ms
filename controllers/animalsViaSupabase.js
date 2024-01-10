import { getAnimalsData,getAnimalById } from "../adapters/supabaseAdapter.js";
import { createClient } from '@supabase/supabase-js';
export async function getAnimals(req, res) {
  try {
    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_KEY,
      {
        global: {
          headers: { "set-cookies": req.headers.cookie },
        },
      }
    );
    const {
      data: { user },
    } = await supabase.auth.getUser()
    const data = await getAnimalsData(supabase);
    console.log(data);
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