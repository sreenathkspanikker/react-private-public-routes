/* eslint-disable no-template-curly-in-string */
/* For validating antd form field validation */

export default {
  email: [
    {
      required: true,
      type: "email",
    },
  ],
  password: [
    {
      required: true,
      message: "Please input your password!",
    },
  ],
  text: [
    {
      required: true,
      message: "Field is required!",
    },
  ],
  number: [
    {
      required: true,
      type: "number",
    },
  ],
  validateMessages: {
    required: "${label} is required!",
    types: {
      email: "${label} is not validate email!",
      number: "${label} is not a validate number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  },
};
