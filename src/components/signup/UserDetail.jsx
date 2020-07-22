import React from "react";
import { TextField, Button } from "@material-ui/core";

export default function UserDetail({ userValues, nextStep, handleChange }) {
  return (
    <React.Fragment>
      <h1>UserDetail</h1>
      <TextField
        placeholder="Enter your username"
        floatingLabelText="Username"
        defaultValue={userValues.userName}
        onChange={handleChange("userName")}
      />
      <br />
      <TextField
        placeholder="Enter your password"
        floatingLabelText="Password"
        defaultValue={userValues.password}
        onChange={handleChange("password")}
      />
      <br />
      <TextField
        placeholder="Enter your email"
        floatingLabelText="Email"
        defaultValue={userValues.email}
        onChange={handleChange("email")}
      />
      <br />
      <Button
        color="primary"
        variant="contained"
        onClick={e => {
          e.preventDefault();
          nextStep();
        }}
      >
        Next
      </Button>
    </React.Fragment>
  );
}
