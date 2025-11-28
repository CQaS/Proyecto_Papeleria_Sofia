"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { logout as logout_api } from "@/app/routes/login.routes";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user_sofia");
    const storedToken = localStorage.getItem("token_sofia");

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (userData, token) => {
    setUser(userData);

    localStorage.setItem("user_sofia", JSON.stringify(userData));
    localStorage.setItem("token_sofia", token);
  };

  const logout = async () => {
    try {
      await logout_api();

      setUser(null);
      localStorage.removeItem("user_sofia");
      localStorage.removeItem("token_sofia");

      console.log("Session cerrada");
      router.push("/");
    } catch (error) {
      console.error("Error al cerrar sesión", error);

      setUser(null);
      localStorage.removeItem("user_sofia");
      localStorage.removeItem("token_sofia");
      router.push("/");
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
