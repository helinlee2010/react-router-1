import React from "react";
import { List, ListItemText, Button } from "@material-ui/core";

export default function Review({ userValues, prevStep, nextStep }) {
  return (
    <React.Fragment>
      <h1>Review your information</h1>
      <List>
        <ListItemText primary="Username" secondary={userValues.userName} />
      </List>
      <List>
        <ListItemText primary="Email" secondary={userValues.email} />
      </List>
      <Button
        onClick={e => {
          e.preventDefault();
          prevStep();
        }}
        color="default"
        variant="contained"
      >
        Edit
      </Button>
      <Button
        onClick={e => {
          e.preventDefault();
          nextStep();
        }}
        color="primary"
        variant="contained"
      >
        Confirm
      </Button>
    </React.Fragment>
  );
}
