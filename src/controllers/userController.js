 //Standardized handleRespoce

const handleResponse = (res, status, message, data = null) => {
    res.status(status).json({ status, message, data });
  }

export const CreateUser = (req, res) => {
    const { name, email } = req.body;
    try{ 
        const newUser = createUserService(name, email);
        handleResponse(res, 201, "User created successfully", newUser);
    }
    catch(error) { 
        next(error);
    }
}
export const getAllUsers = (req, res) => {
    try{ 
        const users = getAllUserService();
        handleResponse(res, 200, "Users retrieved successfully", users);
    }
    catch(error) { 
        next(error);
    }
}
export const getUserById = (req, res) => {
    const { id } = req.params;
    try{ 
        const user = getUserByIdService(id);
        handleResponse(res, 200, "User retrieved successfully", user);
    }
    catch(error) { 
        next(error);
    }
}
export const UpdateUser = (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    try{ 
        const updatedUser = updateUserService(id, name, email);
        handleResponse(res, 200, "User updated successfully", updatedUser);
    }
    catch(error) { 
        next(error);
    }
}
export const DeleteUser = (req, res) => {
    const { id } = req.params;
    try{ 
        const deletedUser = deleteUserService(id);
        handleResponse(res, 200, "User deleted successfully", deletedUser);
    } catch(error) { 
        next(error);
    }
}