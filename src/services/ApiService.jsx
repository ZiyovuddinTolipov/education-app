import axios from "axios";

const API_URL = 'https://c8e1-213-230-87-2.ngrok-free.app'; // Replace with your actual API URL

const ApiService = {
    signin: async (username, password) => {
        const credentials = btoa(`${username}:${password}`); // Base64 encode the credentials
        const response = await fetch(`${API_URL}/signin/`, {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${credentials}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }), // Send username and password in the body if needed
        });

        if (!response.ok) {
            throw new Error('Login failed');
        }

        return response.json(); // Return the response data
    },
    createUser: async(userData)=> {
        try {
            const response = await axios.post(`${API_URL}/create/user/`, userData, {
                headers: {
                    'accept': 'application/json',
                    'authorization': `Token ${localStorage.getItem('token')}`, // Basic auth token
                    'Content-Type': 'application/json',
                    // Note: In a real app, you'd dynamically get the CSRF token                }
            }});
            return response.data;
        } catch (error) {
            console.error('Error creating user:', error.response ? error.response.data : error.message);
            throw error;
        }
    }
};

export default ApiService;
