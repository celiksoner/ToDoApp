import React from "react";
import Input from "../components/Input";
import { signup } from "../api/apiCalls";
import ButtonWithProgress from "../components/ButtonWithProgress";

class UserSignupPage extends React.Component {
  state = {
    userName: null,
    nickName: null,
    password: null,
    repeatPassword: null,
    errors: {},
  };

  //Örnek olarak tek bir field kodu
  //onChangeUsername = event => {
  //    this.setState({
  //        userName: event.target.value
  //    })
  //}

  onChange = (event) => {
    const { name, value } = event.target;
    const errors = { ...this.state.errors };
    errors[name] = undefined;
    if (name === "password" || name === "repeatPassword") {
      if (name === "password" && value !== this.state.repeatPassword) {
        errors.repeatPassword = "Password mismatch";
      } else if (name === "repeatPassword" && value !== this.state.password) {
        errors.repeatPassword = "Password mismatch";
      } else {
        errors.repeatPassword = undefined;
      }
    }
    this.setState({
      [name]: value,
      errors,
    });
  };

  onClickSignup = async (event) => {
    event.preventDefault();

    const { userName, nickName, password } = this.state;

    const body = {
      userName,
      nickName,
      password,
    };

    try {
      const response = await signup(body);
    } catch (error) {
      if (error.response.data.validationErrors) {
        this.setState({ errors: error.response.data.validationErrors });
      }
    }
  };

  render() {
    const { errors } = this.state;
    const { userName, nickName, password, repeatPassword } = errors;
    const { t, pendingApiCall } = this.props;

    return (
      <div className="container">
        <form>
          <h1 className="text-center">Sign Up</h1>
          <Input
            label="Username"
            name="userName"
            error={userName}
            onChange={this.onChange}
          />

          <Input
            label="Nickname"
            name="nickName"
            error={nickName}
            onChange={this.onChange}
          />

          <Input
            label="Password"
            name="password"
            type="password"
            error={password}
            onChange={this.onChange}
          />

          <Input
            label="Repeat Password"
            name="repeatPassword"
            type="password"
            error={repeatPassword}
            onChange={this.onChange}
          />

          {/* <div className="form-group">
            <label>Repeat Password</label>
            <input
              className="form-control"
              name="repeatPassword"
              type="password"
              onChange={this.onChange}
            />
          </div> */}

          <div className="text-center mt-3">
            <ButtonWithProgress
              onClick={this.onClickSignup}
              disabled={pendingApiCall || repeatPassword != undefined}
              pendingApiCall={pendingApiCall}
              text={"Sign Up"}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default UserSignupPage;
