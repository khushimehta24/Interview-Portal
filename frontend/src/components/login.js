import React from "react";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../styles/login.css";
const Login = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik.errors);
  return (
    <div className="outerDiv2">
      <div className="innerDiv2">
        <div className="loginHeader">LOGIN</div>
        <div className="userPass"> Username</div>
        <TextField
          id="username"
          name="username"
          type="username"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
          variant="outlined"
        />
        {formik.touched.username && formik.errors.username ? (
          <p className="error">{formik.errors.username}</p>
        ) : null}
        <div className="userPass">Password</div>
        <TextField
          variant="outlined"
          className="styledInput"
          id="password"
          name="password"
          type="password"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <p className="error">{formik.errors.password}</p>
        ) : null}
        <div className="dhaaText">
          <div className="dhaaText1">Don't have an account?</div>
          <div className="dhaaText2">Sign Up</div>
        </div>
        <Button
          className="signBttn"
          variant="contained"
          type="submit"
          onClick={formik.handleSubmit}
        >
          SIGN IN
        </Button>
      </div>
    </div>
  );
};

export default Login;