import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navigation from "../../components/base/Navigation";
import { modalState, logout } from "../../modules/auth";

function NaviContainer() {
  const [user, setUser] = useState(false);
  const { state, auth } = useSelector(({ auth }) => ({
    state: auth.modal_state,
    auth: auth.auth,
  }));
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(modalState(true));
  };

  const onClose = () => {
    dispatch(modalState(false));
  };

  const onLogout = () => {
    window.localStorage.clear();
    setUser(false);
    dispatch(logout());
  };

  useEffect(() => {
    if (auth) {
      const userCheck = window.localStorage.getItem("user");
      console.log("userCheck", userCheck);
      setUser(true);
    }
  }, [auth, user, setUser]);

  return (
    <Navigation
      user={user}
      state={state}
      onClick={onClick}
      onClose={onClose}
      onLogout={onLogout}
    />
  );
}

export default NaviContainer;
