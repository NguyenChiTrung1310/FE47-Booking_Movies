import React, { useState } from "react";
import PropTypes from "prop-types";
// type rafce and press Tab to create hook function default
import { Container, Button, TextField, Typography } from "@material-ui/core";
import "./RegisterPage.scss";
import { useStyles } from "./../Register/useStyles";
//import Button from "./../../components/Button/Button";
const RegisterPage = () => {
  const classes = useStyles();

  const [account, setaccount] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");

  const handleChangeAccount = (e) => {
    const account_value = e.target.value;
    setaccount(account_value);
  };

  const handleChangePassword = (e) => {
    const password_value = e.target.value;
    setPassword(password_value);
  };

  const handleChangeFullName = (e) => {
    const fullname_value = e.target.value;
    setFullname(fullname_value);
  };

  const handleChangeEmail = (e) => {
    const email_value = e.target.value;
    setEmail(email_value);
  };

  const handleChangePhoneNmber = (e) => {
    const phoneNumber_value = e.target.value;
    setphoneNumber(phoneNumber_value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(
      `Account: ${account} Password:${password} Fullname:${fullname} Email: ${email} and password: ${password} Phone Number: ${phoneNumber}`
    );
  };
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography className="title" component="h3" variant="h3">
          Register
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            autoComplete="account"
            autoFocus
            className={classes.field}
            fullWidth
            id="account"
            label="Account"
            margin="normal"
            name="account"
            onChange={handleChangeAccount}
            required
            type="text"
            value={account}
            variant="outlined"
          />
          <TextField
            autoComplete="password"
            autoFocus
            className={classes.field}
            fullWidth
            id="password"
            label="Password"
            margin="normal"
            name="password"
            onChange={handleChangePassword}
            required
            value={password}
            type="text"
            variant="outlined"
          />
          <TextField
            autoComplete="fullname"
            autoFocus
            className={classes.field}
            fullWidth
            id="fullname"
            label="Fullname"
            margin="normal"
            name="fullname"
            onChange={handleChangeFullName}
            required
            value={fullname}
            type="text"
            variant="outlined"
          />
          <TextField
            autoComplete="email"
            autoFocus
            className={classes.field}
            fullWidth
            id="email"
            label="Email"
            margin="normal"
            name="email"
            onChange={handleChangeEmail}
            required
            value={email}
            type="text"
            variant="outlined"
          />
          <TextField
            autoComplete="phomeNumber"
            autoFocus
            className={classes.field}
            fullWidth
            id="phoneNumber"
            label="Phone Number"
            margin="normal"
            name="phoneNumber"
            onChange={handleChangePhoneNmber}
            required
            value={phoneNumber}
            type="text"
            variant="outlined"
          />
          <Button type="submit" variant="contained" color="primary">
            Create Account
          </Button>
        </form>
      </div>
    </Container>
  );
};

RegisterPage.propTypes = {
  onChange: PropTypes.func,
};

export { RegisterPage };
