// Here is a component, NOT the main component.
// So the file must be named 'name.js', NOT 'name.jsx'

import React from "react";
import { Button } from "@material-ui/core";
import { useStyles } from "./useStyles";
import PropTypes from "prop-types";

const ButtonComponent = (props) => {
  const classes = useStyles();
  const { type } = props;
  return (
    <div>
      <Button
        className={classes.submit}
        color="primary"
        fullWidth
        type={type}
        variant="contained"
      >
        Sign in
      </Button>
    </div>
  );
};

ButtonComponent.propTypes = {
  type: PropTypes.string,
};

export default ButtonComponent;
