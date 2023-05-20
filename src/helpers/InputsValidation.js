export const ruleValidation = {
    username: {
      required: "Name is required",
      minLength: { value: 5, message: "Min length is 5" },
      maxLength: { value: 20, message: "Max length is 20" },
    },
    email: {
      required: "Email is required",
      pattern: {
        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        message: "Please enter a valid email format",
      },
    },
    password: {
      required: "Password is required",
      minLength: { value: 5, message: "Min length is 5" },
    },
    confirm_password: {
      required: "Confirm Password is required",
    },
  };