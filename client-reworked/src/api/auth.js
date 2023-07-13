export async function signin(accountInfo) {
  try {
    const response = await fetch(import.meta.env.VITE_BE_HOST + "signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(accountInfo),
      credentials: "include",
    });
    return await response.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function signup(accountInfo) {
  console.log(JSON.stringify(accountInfo));
  try {
    const response = await fetch(import.meta.env.VITE_BE_HOST + "signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(accountInfo),
      credentials: "include",
    });
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function imagekitauth() {
  try {
    const response = await fetch(import.meta.env.VITE_BE_HOST + "imagekit", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    return await response.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function signout() {
  try {
    const response = await fetch(import.meta.env.VITE_BE_HOST + "signout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    return await response.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}
