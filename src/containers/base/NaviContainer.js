import React, { useEffect, useState, useCallback } from "react";
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

  const onClick = useCallback(() => {
    dispatch(modalState(true));
  }, [dispatch]);

  const onClose = useCallback(() => {
    dispatch(modalState(false));
  }, [dispatch]);

  const onLogout = useCallback(() => {
    window.sessionStorage.clear();
    setUser(false);
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    if (auth) {
      const userCheck = window.sessionStorage.getItem("user");
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
