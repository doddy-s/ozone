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
