import axiosConfig from '../utils/config/axios.config';

// GetAllUsers service
const getAllUsers = (token) => {
    const headers = {
        Authorization: `Bearer ${token}`,
    };
    return axiosConfig
        .get('users', { headers })
        .then((response) => {
           return response.data;
        });
};

// Update User Validation Status
const updateUserStatusById = (id, body, headers) => {
    // Returns the response with a Promise
    return axiosConfig
    .patch(`/api/users/${id}`, body, { headers })
    .then((response) => {
        return response.data;
     });
};

const usersService = {
    getAllUsers,
    updateUserStatusById,
};

export default usersService;
