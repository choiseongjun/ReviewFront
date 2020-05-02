import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../../components/auth/Modal";
import {
  changeField,
  initalizeForm,
  login,
  modalState,
} from "../../modules/auth";

function ModalContainer({ onClose }) {
  const { form, auth } = useSelector(({ auth }) => ({
    form: auth.login,
    auth: auth.auth,
  }));
  const dispatch = useDispatch();
  console.log("form", form, "auth", auth);

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(changeField({ form: "login", key: name, value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { userid, password } = form;
    dispatch(login({ userid, password }));
  };

  useEffect(() => {
    dispatch(initalizeForm("login"));
  }, [dispatch]);

  useEffect(() => {
    if (auth) {
      window.localStorage.setItem("user", JSON.stringify(auth));
      alert("로그인 성공");
      dispatch(modalState(false));
    }
  }, [auth, dispatch]);

  return <Modal onChange={onChange} onSubmit={onSubmit} onClose={onClose} />;
}

export default ModalContainer;
