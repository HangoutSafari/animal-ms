import * as dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config({ path: 'variables.env' });
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

export async function getAnimalsData() {
  const { data, error } = await supabase.from('animals').select();
  if (error) console.log('query error', error);
  else return data;
}

export async function getAnimalById(id) {
  const { data, error } = await supabase.from('animals').select().eq('id',id).single();
  if (error) return {id:null};
  else return data;
}
