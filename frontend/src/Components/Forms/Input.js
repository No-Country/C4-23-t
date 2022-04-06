import { Field, ErrorMessage } from "formik";
import FormError from "./FormError";

const Input = (props) => {
  const { label, name, ...rest } = props;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={FormError} />
    </div>
  );
};

export default Input;
