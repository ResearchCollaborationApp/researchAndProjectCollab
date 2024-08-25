export const userLoader = async () =>{
    try {
        const response = await fetch('/api/user', {
          credentials: 'include'
        });
        if (response.ok) {
          const userData = await response.json();
          return userData;
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
};

export const nobelLoader = async () =>{
  try {
    const response = await fetch("http://api.nobelprize.org/2.1/nobelPrizes?offset=10&limit=10&sort=asc");
    if (response.ok) {
      const nobelData = await response.json();
      return nobelData;
    } else {
      console.error('Failed to fetch nobel data');
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
}

export const boardsLoader = async () =>{
  try {
    const response = await fetch("/api/boards");
    if (response.ok) {
      const boardData = await response.json();
      return boardData;
    } else {
      console.error('Failed to fetch board data');
    }
  } catch (error) {
    console.error('Error fetching board data:', error);
  }
}


