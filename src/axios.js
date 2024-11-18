import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8000/api', // Update with your backend URL
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add an interceptor to include the token in headers
apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default apiClient;
