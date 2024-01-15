import { deleteAuthDataFrom, getAuthDataFrom, getAuthDataWithFunction, insertAuthDataTo, updateAuthDataTo } from "../dbHelper.js";

export async function getAuthAllAnimalsFull(req, res) {
  // getAuthDataWithFunction(req, res, "get_animals");
  getAuthDataFrom(req, res, "full_animals");
}

export async function getAuthAllAnimals(req, res) {
  getAuthDataFrom(req, res, "animals");
}

export async function getAuthChosenAnimal(req, res) {
  getAuthDataFrom(req, res, "animals", req.params.id);
}

export async function insertAuthAnimal(req, res) {
  insertAuthDataTo(req, res, "animals");
}

export async function updateAuthAnimal(req, res) {
  updateAuthDataTo(req, res, "animals", "id", req.params.id);
  
}

export async function deleteAuthAnimal(req, res) {
  deleteAuthDataFrom(res, res, "animals", "id", req.params.id);
}
