import * as request from '../api/request';

const baseUrl = 'http://localhost:3030/users';

export const login = async (username, email, password) => {
    const result = await request.post(`${baseUrl}/login`, {
        username,
        email,
        password,
    });

    return result;
};

export const register = async (username, email, password, confirmPassword) => {
    if (password !== confirmPassword) {
        throw new Error("Password was not confirmed. Please, try again!");
    }

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            email,
            password
        })
    };

    const response = await fetch(`${baseUrl}/register`, options);

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to register');
    }

    const result = await response.json();
    return result;
};

export const logout = () => request.get(`${baseUrl}/logout`);
