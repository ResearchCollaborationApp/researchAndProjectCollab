import axios from "axios";

//we will find a way to define header once
// const headers = {
//   userId: "bhandarib1",
// };

//user prpofile page loader
export const userProfileLoader = async (user) => {
  if (!user) {
    throw new Error("User is not logged in");
  }
  try {
    const response = await axios.get("/api/user/profile", {
      headers: {
        User: user,
      },
    });
    if (response.ok) {
      const userProfileInformation = await response.json();
      return userProfileInformation;
    } else {
      console.error("Failed to fetch user profile data");
    }
  } catch (error) {
    console.error("Error fetching user profile data:", error);
  }
};

//top research loader
export const topResearchLoader = async (user) => {
  try {
    const response = await axios.get("/api/topresearch", {
      headers: {
        User: user,
      },
    });
    if (response.ok) {
      const topResearchInformation = await response.json();
      return topResearchInformation;
    } else {
      console.error("Failed to fetch top research data");
    }
  } catch (error) {
    console.error("Error fetching top research data:", error);
  }
};

//project ideas loader
export const projectIdeasLoader = async (user) => {
  try {
    const response = await axios.get("/api/projectideas", {
      headers: {
        User: user,
      },
    });
    if (response.ok) {
      const projectIdeas = await response.json();
      return projectIdeas;
    } else {
      console.error("Failed to fetch project ideas data");
    }
  } catch (error) {
    console.error("Error fetching project ideas data:", error);
  }
};

//my collabs page loader
export const collabProjectsLoader = async (user) => {
  try {
    const response = await axios.get("/api/collabprojects", {
      headers: {
        User: user,
      },
    });
    if (response.ok) {
      const boardData = await response.json();
      return boardData;
    } else {
      console.error("Failed to collab projects data");
    }
  } catch (error) {
    console.error("Error fetching collab projects data:", error);
  }
};

//feedpage loader(to be done once the recommendation model is ready)
