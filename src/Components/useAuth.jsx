import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function useAuth() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
            navigate('/backend_login')
        }
    }, []);

    const logout = () => {
        try {
            localStorage.removeItem('token');
            setIsAuthenticated(false);
            navigate('/backend_login')
        } catch (error) {
            console.error('Error occurred during logout:', error);
        }
    };

    return { isAuthenticated, logout };
}
