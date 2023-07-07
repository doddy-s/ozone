export const getCommunities = async () => {
  try {
    const response = await fetch(
      "http://localhost:3000/communities/by-member-count",
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
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getJoinedCommunities = async () => {
  try {
    const response = await fetch("http://localhost:3000/communities/joined", {
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
};

export const createCommunity = async (community) => {
  try {
    const response = await fetch("http://localhost:3000/communities/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(community),
      credentials: "include",
    });
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getCommunitiesDetails = async (communityId) => {
  try {
    const response = await fetch(
      `http://localhost:3000/communities/by-id/${communityId}`,
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
  } catch (error) {
    console.log(error);
    return null;
  }
}