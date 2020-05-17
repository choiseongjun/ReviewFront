import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../../components/auth/Modal";
import {
  changeField,
  initalizeForm,
  login,
  register,
  modalState,
} from "../../modules/auth";

function ModalContainer({ onClose }) {
  const [type, setType] = useState("login");
  const [error, setError] = useState(null);
  const { form, auth, authError } = useSelector(({ auth }) => ({
    form: auth[type],
    auth: auth.auth,
    authError: auth.authError,
  }));
  const dispatch = useDispatch();

  const onChange = useCallback(
    (e) => {
      const { value, name } = e.target;
      dispatch(changeField({ form: type, key: name, value }));
    },
    [dispatch, type],
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (type === "login") {
        const { userid, password } = form;
        dispatch(login({ userid, password }));
      } else {
        //회원가입 유효성체크
        const { userid, email, name, password, passwordConfirm } = form;
        if (password !== passwordConfirm) {
          alert("비밀번호를 다시 확인해주세요.");
          return;
        } else {
          dispatch(register({ userid, email, name, password }));
        }
      }
    },
    [dispatch, form, type],
  );

  const onChangeForm = useCallback(() => {
    setType("register");
    dispatch(initalizeForm(type));
  }, [dispatch, type]);

  useEffect(() => {
    dispatch(initalizeForm(type));
  }, [dispatch, type]);

  useEffect(() => {
    if (auth) {
      window.localStorage.setItem("user", JSON.stringify(auth));
      alert("로그인 성공");
      dispatch(modalState(false));
    }
    if (authError) {
      setError("다시 시도해주세요.");
    }
  }, [auth, dispatch]);

  return (
    <Modal
      type={type}
      error={error}
      onChange={onChange}
      onSubmit={onSubmit}
      onClose={onClose}
      onChangeForm={onChangeForm}
    />
  );
}

export default ModalContainer;
