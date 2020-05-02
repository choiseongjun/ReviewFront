import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: rgba(0, 0, 0, 0.25);
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  background: white;
  padding: 1rem;
  width: 400px;
  height: auto;
`;

const Modal = ({ onChange, onSubmit, onClose }) => {
  return (
    <Container>
      <Content>
        <h1>LOGIN FORM</h1>
        <form onSubmit={onSubmit}>
          <input
            name="userid"
            placeholder="ID를 입력 해주세요"
            onChange={onChange}
          />
          <input
            name="password"
            placeholder="PASSWORD를 입력 해주세요"
            onChange={onChange}
          />
          <button type="submit">LOGIN</button>
          <button type="button" onClick={onClose}>
            닫기
          </button>
        </form>
      </Content>
    </Container>
  );
};

export default Modal;
