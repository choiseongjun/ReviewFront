import React from "react";
import AuthForm from "../components/auth/authForm";
import { useDispatch, useSelector } from "react-redux";
import { login, input } from "../modules/auth";

export default function AuthContainer() {
  const { form } = useSelector(({ auth }) => ({ form: auth.login }));
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    const { id, password } = form;
    dispatch(login({ id, password }));
  };

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(input({ key: name, value }));
  };

  return <AuthForm onChange={onChange} onSubmit={onSubmit} />;
}
