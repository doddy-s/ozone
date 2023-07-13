export const isSignedin = () => {
  if (localStorage.getItem("userId")) return true;
  return false;
};
