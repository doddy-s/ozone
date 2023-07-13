export async function getPostsByJoinedCommunities() {
  const response = await fetch(
    "http://localhost:3000/posts/by-joined-communities",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }
  );
  const { data } = await response.json();
  return data;
}

export async function getPosts() {
  const response = await fetch(
    import.meta.env.VITE_BE_HOST + "posts/by-popularity",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const { data } = await response.json();
  return data;
}

export async function getPostById(postId) {
  const response = await fetch(
    "http://localhost:3000/posts/by-id/" +
      new URLSearchParams({
        postId: postId,
      }),
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const { data } = await response.json();
  return data;
}

export async function createPost(post) {
  const response = await fetch("http://localhost:3000/posts/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
    credentials: "include",
  });
  return await response.json();
}
