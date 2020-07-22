import React, { Component } from "react";

class SignUp extends Component {
  state = {
    step: 1,
    userName: "",
    email: "",
    password: ""
  };

  nextStep = () => {
    const { step } = this.state.step;
    this.setState({ step: step + 1 });
    console.log("nextStep() triggered");
  };

  prevStep = () => {
    const { step } = this.state.step;
    this.setState({ step: step - 1 });
    console.log("prevStep() triggered");
  };

  render() {
    const { step } = this.state.step;

    switch (step) {
      case 1:
        return <UserDetail />;
      case 2:
        return <Review />;
      case 3:
        return <Confirm />;
    }
  }
}

export default SignUp;
