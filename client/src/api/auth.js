export async function signin(accountInfo) {
  console.log(JSON.stringify(accountInfo));
  try {
    const response = await fetch("http://localhost:3000/signin", {
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

export async function signup(accountInfo) {
  console.log(JSON.stringify(accountInfo));
  try {
    const response = await fetch("http://localhost:3000/signup", {
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
