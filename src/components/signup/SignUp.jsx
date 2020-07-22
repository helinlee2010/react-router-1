import React, { Component } from "react";
import UserDetail from "./UserDetail";
import Review from "./Review";
import Confirm from "./Confirm";

class SignUp extends Component {
  state = {
    step: 1,
    userName: "",
    email: "",
    password: ""
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
    console.log("nextStep() triggered");
  };

  prevStep = () => {
    const { step } = this.state.step;
    this.setState({ step: step - 1 });
    console.log("prevStep() triggered");
  };

  // Handle Text field changes
  handleChange = location => e => {
    //console.log(this.state);

    // Use [] for Computed Property Name
    this.setState({ [location]: e.target.value });
  };

  render() {
    // Deconstructuring the state
    const { step } = this.state;
    const { userName, email, password } = this.state;
    const userValues = { userName, email, password };

    switch (step) {
      case 1:
        return (
          <UserDetail
            nextStep={this.nextStep}
            userValues={userValues}
            handleChange={this.handleChange}
          />
        );
      case 2:
        return (
          <Review
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            userValues={userValues}
          />
        );
      case 3:
        return <Confirm />;
      default:
        console.log("switch step");
    }
  }
}

export default SignUp;
