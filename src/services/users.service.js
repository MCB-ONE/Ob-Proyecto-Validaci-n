import axiosConfig from '../utils/config/axios.config';

const getAllUsers = (token) => {
    return axiosConfig
        .get('users', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
        })
        .then((response) => {
           return response.data;
        });
};

// Update User
const updateUserSatatusByID = (id, token, newStatus) => {
    const body = {
        id,
        newStatus,
    };
    const headers = {
        Authorization: `Bearer ${token}`,
    };

    // Returns the response with a Promise
    return axiosConfig.put(`/api/users/${id}`, body, { headers });
};

const usersService = {
    getAllUsers,
    updateUserSatatusByID,
};

export default usersService;
