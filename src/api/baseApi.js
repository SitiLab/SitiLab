// src/api/baseApi.js
/**
 * Base API class for handling common behaviors across all API calls
 */
class BaseApi {
    constructor() {
        this.baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:8080/api/v1';
        this.headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
    }

    /**
     * Add authorization headers if user is authenticated
     */
    getAuthHeaders() {
        const token = localStorage.getItem('auth_token');
        return token ? { 'Authorization': `Bearer ${token}` } : {};
    }

    /**
     * Handle API responses and errors consistently
     */
    async handleResponse(response) {
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw {
                status: response.status,
                message: errorData.message || 'Si è verificato un errore durante la richiesta',
                errors: errorData.errors || {}
            };
        }

        return response.json();
    }

    /**
     * Common GET request method
     */
    async get(endpoint, params = {}) {
        const url = new URL(`${this.baseUrl}${endpoint}`);

        Object.keys(params).forEach(key => {
            if (params[key] !== undefined && params[key] !== null) {
                url.searchParams.append(key, params[key]);
            }
        });

        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    ...this.headers,
                    ...this.getAuthHeaders()
                }
            });

            return this.handleResponse(response);
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    }

    /**
     * Common POST request method
     */
    async post(endpoint, data = {}) {
        try {
            const response = await fetch(`${this.baseUrl}${endpoint}`, {
                method: 'POST',
                headers: {
                    ...this.headers,
                    ...this.getAuthHeaders()
                },
                body: JSON.stringify(data)
            });

            return this.handleResponse(response);
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    }

    /**
     * Common PUT request method
     */
    async put(endpoint, data = {}) {
        try {
            const response = await fetch(`${this.baseUrl}${endpoint}`, {
                method: 'PUT',
                headers: {
                    ...this.headers,
                    ...this.getAuthHeaders()
                },
                body: JSON.stringify(data)
            });

            return this.handleResponse(response);
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    }

    /**
     * Common DELETE request method
     */
    async delete(endpoint) {
        try {
            const response = await fetch(`${this.baseUrl}${endpoint}`, {
                method: 'DELETE',
                headers: {
                    ...this.headers,
                    ...this.getAuthHeaders()
                }
            });

            return this.handleResponse(response);
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    }
}

export default BaseApi;