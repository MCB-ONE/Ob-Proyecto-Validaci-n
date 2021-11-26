import axiosConfig from '../utils/config/axios.config';

const getAllUsers = () => {
    return axiosConfig
        .post('/users')
        .then((response) => {
            if (response.data.token) {
                localStorage.setItem('user', JSON.stringify(response.data));
            }

            return response.data;
        });
};
