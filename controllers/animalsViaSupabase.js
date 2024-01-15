import { deleteAuthDataFrom, getAuthDataFrom, insertAuthDataTo, updateAuthDataTo } from "../dbHelper.js";

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
