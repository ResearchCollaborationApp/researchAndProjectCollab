
export const authorizeUser = async()=> {
    try {
      const response = await fetch("/auth/check-session", {
        method: "GET",
        credentials: "include", // Include cookies in the request
      });
      const data = await response.json();
      return data;
      }
      catch (error) {
      console.error("Error checking login status:", error);
      return false;
    }
  }
  