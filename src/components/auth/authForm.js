import React from "react";

function AuthForm({ onSubmit, onChange }) {
  return (
    <form onSubmit={onSubmit}>
      <input name="id" placeholder="id" onChange={onChange} />
      <input
        type="password"
        name="password"
        placeholder="password"
        onChange={onChange}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default AuthForm;
