export async function getUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error('Failed to fetch users');
    return response.json();
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}

export async function getUserPosts(userId) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    if (!response.ok) throw new Error('Failed to fetch posts');
    return response.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
}
