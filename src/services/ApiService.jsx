const API_URL = 'https://b425-188-113-214-118.ngrok-free.app/'; // Replace with your actual API URL

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
};

export default ApiService;
