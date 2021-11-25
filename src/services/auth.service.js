import axiosConfig from '../utils/config/axios.config';

const login = (username, password) => {
    return axiosConfig
        .post('auth/login', {
            username,
            password,
        })
        .then((response) => {
            if (response.data.token) {
                localStorage.setItem('user', JSON.stringify(response.data));
            }

            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem('user');
};

const authService = {
    login,
    logout,
};

export default authService;
