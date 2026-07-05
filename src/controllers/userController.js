import {
  createUserService,
  getAllUserService,
  getUserByIdService,
  updateUserService,
  deleteUserService
} from "../models/usersModel.js";

// Standardized response
const handleResponse = (res, status, message, data = null) => {
  res.status(status).json({ status, message, data });
};

// CREATE USER
export const CreateUser = async (req, res, next) => {
  try {
    const { name, email } = req.body;

    const newUser = await createUserService(name, email);

    handleResponse(res, 201, "User created successfully", newUser);
  } catch (error) {
    next(error);
  }
};

// GET ALL USERS
export const getAllUsers = async (req, res, next) => {
  try {
    const users = await getAllUserService();

    handleResponse(res, 200, "Users retrieved successfully", users);
  } catch (error) {
    next(error);
  }
};

// GET USER BY ID
export const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await getUserByIdService(id);

    handleResponse(res, 200, "User retrieved successfully", user);
  } catch (error) {
    next(error);
  }
};

// UPDATE USER
export const UpdateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    const updatedUser = await updateUserService(id, name, email);

    handleResponse(res, 200, "User updated successfully", updatedUser);
  } catch (error) {
    next(error);
  }
};

// DELETE USER
export const DeleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedUser = await deleteUserService(id);

    handleResponse(res, 200, "User deleted successfully", deletedUser);
  } catch (error) {
    next(error);
  }
};