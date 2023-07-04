export async function getPosts() {
  const response = await fetch("http://localhost:3000/posts/by-popularity");
  return await response.json();
}

export async function createPost(post) {
  const response = await fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
  return await response.json();
}
