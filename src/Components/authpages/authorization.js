export async function isUserLoggedIn() {
    try {
      const response = await fetch("/auth/check-session", {
        method: "GET",
        credentials: "include", // Include cookies in the request
      });
  
      const data = await response.json();
  
      if (data.loggedIn) {
        console.log("User is logged in:", data.user);
        return true;
      } else {
        console.log("User is not logged in.");
        return false;
      }
    } catch (error) {
      console.error("Error checking login status:", error);
      return false;
    }
  }
  
  // Usage
  isUserLoggedIn().then((loggedIn) => {
    if (loggedIn) {
      console.log("Proceed to dashboard");
    } else {
      console.log("Redirect to sign-in page");
    }
  });
  