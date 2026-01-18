// src/admin/utils/adminAuth.js

const ADMIN_KEY = 'isAdminLoggedIn';

export const loginAdmin = () => {
  localStorage.setItem(ADMIN_KEY, 'true');
};

export const logoutAdmin = () => {
  localStorage.removeItem(ADMIN_KEY);
};

export const isAdminLoggedIn = () => {
  return localStorage.getItem(ADMIN_KEY) === 'true';
};
