export const REQUEST_USER = "requestUser";
export const USER_JOIN = "userjoin";
export const JOIN_ERROR = "joinerror";

export const userJoin = (data) => {
  return {
    type: USER_JOIN,
    payload: data,
  };
};

export const requestUser = () => {
  return {
    type: REQUEST_USER,
  };
};

export const joinError = (err) => {
  return {
    type: JOIN_ERROR,
    payload: err,
  };
};

export const UserSignup = (data, navigate) => {
  return async (dispatch) => {
    try {
      dispatch(requestUser());
      let responce = await fetch(
        "http://192.168.0.109:8000/ecommerce/signup",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      let user = await responce.json();

      if (user.message === "User Already exist") {
        dispatch(joinError(user.message));
      } else if (user) {
        dispatch(userJoin(user));
        localStorage.setItem("user", JSON.stringify(user.user));
        localStorage.setItem("auth", JSON.stringify(user.auth));
        navigate("/home");
      }
    } catch (error) {
      dispatch(joinError(error));
    }
  };
};

// login user
export const UserLogin = (data, navigate) => {
  return async (dispatch) => {
    try {
      dispatch(requestUser());
      let responce = await fetch("http://192.168.0.109:8000/ecommerce/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      let user = await responce.json();

      if (user.message) {
        dispatch(joinError(user.message));
      } else if (user) {
        dispatch(userJoin(user));
        localStorage.setItem("user", JSON.stringify(user.user));
        localStorage.setItem("auth", JSON.stringify(user.auth));
        navigate("/home");
      }
    } catch (error) {}
  };
};
