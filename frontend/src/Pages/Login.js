import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormControl from "../Components/Forms/FormControl";
import "../CSS/Login.css";
import loginBanner from "../Images/login_banner.png";

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Field is required"),
    password: Yup.string().required("Field is required"),
  });

  const onSubmit = (values) => {
    console.log("Form data", values);
  };

  return (
    <div className="loginContainer">
      <div className="loginWrapper">
        <div className="loginImageWrapper">
          <div className="loginSkew">
            <img src={loginBanner} alt="Banner for login" />
          </div>
        </div>
        <div className="loginFormWrapper">
          <div className="loginForm">
            <h1>Login</h1>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(formik) => {
                return (
                  <Form>
                    <FormControl
                      className="loginFormUser"
                      control="input"
                      type="email"
                      name="email"
                      placeholder="Username"
                    />
                    <FormControl
                      className="loginFormPass"
                      control="input"
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                    <button type="submit" disabled={!formik.isValid}>
                      Login
                    </button>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
