export async function getUserDetails() {
  try {
    const response = await fetch(import.meta.env.VITE_BE_HOST + "users/by-id", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getUserDetailsById(userId) {
  try {
    const response = await fetch(
      import.meta.env.VITE_BE_HOST + "users/by-id/" + userId,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}