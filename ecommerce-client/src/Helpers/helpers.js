import axios from "axios";

export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
      localStorage.setItem("User", JSON.stringify(data));
      next();
  }
};

export const signout = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("User")
  };
    return axios.delete(`${process.env.REACT_APP_API_URL}/logout`,{ withCredentials: true })
    .then((response) => {
      console.log(response)
    })
    .catch(err => {
      console.log("Logout ERROR", err)
    });
  
};
  
export const isAuthenticated = () => {
  if (typeof window === "undefined") {
    return false
  };

  if (localStorage.getItem("User")) {
    return JSON.parse(localStorage.getItem("User"))
  } else {
    return false;
  }
}

