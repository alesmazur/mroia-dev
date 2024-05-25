import * as yup from "yup";

const FormSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters")
    .matches(/^[A-Za-z ]*$/, "Name must not contain numbers")
    .test(
      "is-uppercase",
      "Name must start with an uppercase letter",
      (value) => (value && value.length > 0 ? /^[A-Z]/.test(value) : true),
    ),

  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),

  phone: yup
    .string()
    .required("Phone number is required")
    .test(
      "is-start-with-plus",
      "Phone number should start from plus",
      (value) => (value && value.length > 0 ? /^[+]/.test(value) : true),
    )
    .matches(/^[+\d\s()-]+$/, "Letters aren’t acceptable")
    .min(8, "Number cannot be less than 7 digits")
    .max(20, "Number cannot be more than 20 digits"),

  message: yup
    .string()
    .required("Message is required")
    .min(60, "The message cannot be less than 60 characters."),
});

export default FormSchema;
