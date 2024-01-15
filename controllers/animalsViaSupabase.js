import { getAnimalsData,getAnimalById } from "../adapters/supabaseAdapter.js";
import { deleteAuthDataFrom, deleteDataFrom, getAuthDataFrom, getDataFrom, insertAuthDataTo, insertDataTo, updateAuthDataTo, updateDataTo } from "../dbHelper.js";


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
export async function getAllAnimals(req, res) {
  getDataFrom(req, res, "animals");
}

export async function getChosenAnimal(req, res) {
  getDataFrom(req, res, "animals", req.params.id);
}

export async function insertAnimal(req, res) {
  insertDataTo(req, res, "animals");
}

export async function updateAnimal(req, res) {
  updateDataTo(req, res, "animals", "id", req.params.id);
  
}

export async function deleteAnimal(req, res) {
  deleteDataFrom(res, res, "animals", "id", req.params.id);
}



export async function getAuthAllAnimals(req, res) {
  getAuthDataFrom(req, res, "new_animals");
}

export async function getAuthChosenAnimal(req, res) {
  getAuthDataFrom(req, res, "new_animals", req.params.id);
}

export async function insertAuthAnimal(req, res) {
  insertAuthDataTo(req, res, "new_animals");
}

export async function updateAuthAnimal(req, res) {
  updateAuthDataTo(req, res, "new_animals", "id", req.params.id);
  
}

export async function deleteAuthAnimal(req, res) {
  deleteAuthDataFrom(res, res, "new_animals", "id", req.params.id);
}
