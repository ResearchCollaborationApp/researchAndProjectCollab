//userDocument
user = {
  userId: "",
  firstName: "firstName",
  lastName: "lastName",
  email: "email",
  imageLink: "",
  address: "city and address from the user",
  major: "major of study",
  openToCollaboration: true,
};

interests = {
  userId: "bhuwan123",
  skills: ["ML", "AI"],
  keywords: "keywords from post or research work or project",
};

posts = {
  userId: "bhuwan123",
  postId: "",
  likes: "numbers",
  mediaLink: "Link to the media if used",
  caption: "message describing the post",
  taggedMembers: ["userId1", "userId2"],
  comments: [
    {
      userId: "",
      content: "messgae",
      timeStamps: "dateandtime of post",
    },
  ],
  timeStamps: "dateandtime of post",
  keywords: "keywords such as AI, ML and interests, Accounting for this post",
};

projectIdea = {
  userId: "userId of the user logging in",
  ideas: ["projectIdea1", "projectIdea2", "projectIdea3"],
};
//this is the collection of all the projects(projects) that the user is working on
projects = {
  projectId: "id of the project",
  projectCreatorId: "userID of project creator",
  projectMembersID: ["userId1", "userId2", "userId3"],
  projectName: "name of the project working on",
  description: "some description about the project",
  progressPercent: "to be decided",
  createdOn: "time when it was created",
  mediaLink: [], //link to the picture relevant to the project
  isOpenForCollaboration: false,
};

// topResearch = {
//to be added as a future feature
// }
