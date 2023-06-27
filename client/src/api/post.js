export async function getPosts() {
  const response = await fetch("http://localhost:3000/posts/by-popularity");
  return await response.json();
}
