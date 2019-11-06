export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
      localStorage.setItem("User", JSON.stringify(data));
      next();
  }
};