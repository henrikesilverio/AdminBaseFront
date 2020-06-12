import axios from "axios";

// axios.defaults.baseURL = process.env.VUE_APP_SERVICE_URL;

// axios.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem('authtoken');

//         if (token) {
//             config.headers['Authorization'] = `Bearer ${token}`;
//         }

//         return config;
//     },

//     (error) => {
//         return Promise.reject(error);
//     }
// );

const client = axios.create({
    baseURL: process.env.VUE_APP_SERVICE_URL
});

client.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authtoken');

        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },

    (error) => {
        return Promise.reject(error);
    }
);

export default client;