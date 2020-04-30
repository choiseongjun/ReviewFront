import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import Button from "../../components/common/Buttons/Button.js";
import { remcalc } from "../../lib/styles/utils";
import AuthWrapper from "../../components/auth/AuthWrapper";
import Login from "./Login";
import Register from "./Register";
import "./Modal.scss";

Modal.setAppElement("#root");

class AuthModal extends React.Component {
  constructor() {
    super();
    this.state = {
      showLoginModal: false,
      showRegisterModal: false,
    };

    this.handleOpenLoginModal = this.handleOpenLoginModal.bind(this);
    this.handleOpenRegisterModal = this.handleOpenRegisterModal.bind(this);
    this.handleCloseLoginModal = this.handleCloseLoginModal.bind(this);
    this.handleCloseRegisterModal = this.handleCloseRegisterModal.bind(this);
  }

  handleOpenLoginModal() {
    this.setState({ showLoginModal: true });
  }

  handleOpenRegisterModal() {
    this.setState({ showRegisterModal: true });
  }

  handleCloseLoginModal() {
    this.setState({ showLoginModal: false });
  }

  handleCloseRegisterModal() {
    this.setState({ showRegisterModal: false });
  }

  render() {
    return (
      <NavUser>
        <li className="log">
          <Button
            color="black"
            weight="normal"
            onClick={this.handleOpenLoginModal}
          >
            로그인
          </Button>
          <Modal
            isOpen={this.state.showLoginModal}
            contentLabel="로그인"
            onRequestClose={this.handleCloseLoginModal}
            className="Modal"
            overlayClassName="Overlay"
          >
            <AuthWrapper>
              <Login />
            </AuthWrapper>
          </Modal>
        </li>
        <li className="join">
          <Button
            color="black"
            weight="normal"
            onClick={this.handleOpenRegisterModal}
          >
            가입하기
          </Button>
          <Modal
            isOpen={this.state.showRegisterModal}
            contentLabel="로그인"
            onRequestClose={this.handleCloseRegisterModal}
            className="Modal"
            overlayClassName="Overlay"
          >
            <AuthWrapper>
              <Register />
            </AuthWrapper>
          </Modal>
        </li>
      </NavUser>
    );
  }
}

const props = {};

const NavUser = styled.ul`
  li {
    &:first-child {
      border-right: 1px solid ${palette.gray5};
    }
  }
`;

ReactDOM.render(<AuthModal {...props} />, document.getElementById("root"));

export default AuthModal;
