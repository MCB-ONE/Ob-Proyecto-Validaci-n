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
const updateStatusById = (id, body, headers) => {
    // Returns the response with a Promise
    return axiosConfig.patch(`users/${id}`, body, { headers })
    .then((response) => {
        if (response.data && response.status === 200) {
            console.log(JSON.stringify(response.data));
        } else {
            throw new Error('User not found & no update done');
        }
    })
        .catch((error) => alert(`Something went wrong: ${error}`));
};

const usersService = {
    getAllUsers,
    updateStatusById,
};

export default usersService;
