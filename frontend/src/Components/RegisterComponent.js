import { Formik, Form} from "formik";
import * as Yup from "yup";
import FormControl from "../Components/Forms/FormControl";
import "../CSS/Register.css";

const RegisterForm = () => {
    const initialValues = {
      username:"",
      password: "",
      dni:"",
      email: "",
      date: null,
      telephone: ""
    };
  
    const validationSchema = Yup.object({
      username: Yup.string()
      .required("Field is required")
      .min(2, "Too Short")
      .max(20, "Too long")
      .matches(/^[aA-zZ]+$/, "Only alphabets are allowed for this field ")
      ,
      password: Yup.string()
      .required("Field is required")
      .min(2, "Too Short")
      .max(20, "Too long")
      ,
      dni: Yup.number("Only numbers")
      .test('len', 'Length too short', val => val.toString().length > 4)
      .test('len', 'Length too long', val => val.toString().length < 9)
      .required("Field is required")
      ,
      email: Yup.string()
      .email("Invalid email format")
      .required("Field is required")
      .max(40, "Too long")
      ,
      date: Yup.date()
      .required("Date is required")
      .nullable()
      ,
      telephone: Yup.number("Only numbers")
      .required("Field is required")
      .test('len', 'Length too short', val => val.toString().length > 5)
      .test('len', 'Length too long', val => val.toString().length < 16),
    });
  
    const onSubmit = (values) => {
      console.log("Form data", values);
    };

    return (
            <div className="registerMain">
                <h1 className="registerTitle">Register</h1>
                <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                >
                {(formik) => {
                    return (
                    <Form className="registerForm">
                        <FormControl
                            className="registerFormUser registerField"
                            control="input"
                            type="username"
                            name="username"
                            placeholder="Username"
                        />
                        <FormControl
                            className="registerFormPass registerField"
                            control="input"
                            type="password"
                            name="password"
                            placeholder="Password"
                        />
                        <FormControl
                            className="registerFormDni registerField"
                            control="input"
                            type="dni"
                            name="dni"
                            placeholder="DNI"
                        />     
                        <FormControl
                            className="registerFormEmail registerField"
                            control="input"
                            type="email"
                            name="email"
                            placeholder="E-mail"
                        />
                        <FormControl
                            className="registerFormDate registerField"
                            control="date"
                            type="date"
                            name="date"
                            placeholder="Birth Date"
                        />
                        <FormControl
                            className="registerFormTelephone registerField"
                            control="input"
                            type="telephone"
                            name="telephone"
                            placeholder="Telephone"
                        />                    
                        <button type="submit" disabled={!formik.isValid} className="registerButton">
                          Register
                        </button>
                    </Form>
                    );
                }}
                </Formik>
            </div>
    )}

export default RegisterForm