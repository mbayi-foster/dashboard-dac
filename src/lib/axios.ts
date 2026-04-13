import axios from "axios";
import { useAuthStore } from "../store/authStore";
import { getSession } from "./sessions";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
    "x-app-type": process.env.APP_TYPE || "dashboard-app",
  },
});

// 🔥 Gestion globale
let isRefreshing = false;
let failedQueue: any[] = [];

// 👉 Résout toutes les requêtes en attente
const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

// ============================
// 1. REQUEST INTERCEPTOR
// ============================
api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// ============================
// 2. RESPONSE INTERCEPTOR
// ============================
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest._noRetry
    ) {
      originalRequest._retry = true;

      // 🔥 Si un refresh est déjà en cours
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({
            resolve: (token: string) => {
              originalRequest.headers.Authorization = `Bearer ${token}`;
              resolve(api(originalRequest));
            },
            reject: (err: any) => reject(err),
          });
        });
      }

      isRefreshing = true;

      try {
        const cookie = await getSession();
        if (!cookie) throw new Error("No session");

        const res = await api.post(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh-token`,
          { refresh_token: cookie },
          
        );

        const newToken = res.data.data.access_token;

        if (!newToken) {
          throw new Error("No access token returned");
        }

        // ✅ Mise à jour Zustand
        useAuthStore.getState().setTokens(newToken);

        // ✅ Réveille toutes les requêtes
        processQueue(null, newToken);

        // ✅ Met à jour la requête actuelle
        originalRequest.headers.Authorization = `Bearer ${newToken}`;

        return api(originalRequest);
      } catch (err) {
        processQueue(err, null);
        useAuthStore.getState().logout();
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  },
);

export default api;
