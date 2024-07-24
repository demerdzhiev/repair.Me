import * as request from './request';

const baseUrl = 'http://localhost:3030/users';

export const login = async (username, email, password) => {
    const result = await request.post(`${baseUrl}/login`, {
        username,
        email,
        password,
    });

    return result;
};

export const register = async (username, email, password) => {
    // Create a new request without including the token
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            username,
            email,
            password
        })
    };
    const response = await fetch(`${baseUrl}/register`, options);

    if (!response.ok) {
        throw new Error('Failed to register');
    }

    const result = await response.json();
    return result;
};

export const logout = () => request.get(`${baseUrl}/logout`);
