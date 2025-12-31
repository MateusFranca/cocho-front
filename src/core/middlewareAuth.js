import axios from "axios";
import { API_BASE_URL } from "../../api-config.ts";

export const checkAuthMiddleware = async (to, from, next) => {
  const token = localStorage.getItem("token");

  if (to.name !== "login-auth") {
    try {
      await axios.post(
        `${API_BASE_URL}/auth/me`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      next();
    } catch (error) {
      console.error("Erro ao verificar o token:", error);
      next({ name: "login-auth" });
    }
  } else {
    next();
  }
};
