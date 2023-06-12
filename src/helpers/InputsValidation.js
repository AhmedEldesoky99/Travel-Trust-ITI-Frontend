import { emailPattern } from "./regex";
import { phonePatterm } from "./regex";
import { nationalIdPattern } from "./regex";

export const ruleValidation = {
  username: {
    required: "Name is required",
    minLength: {
      value: 3,
      message: "your name should contain at least 3 characters",
    },
    maxLength: {
      value: 20,
      message: "your name exceed maximum length of 20 characters",
    },
  },
  email: {
    required: "Email is required",
    pattern: {
      value: emailPattern,
      message: "Please enter a valid email format",
    },
  },
  phone_Num: {
    required: "Phone number is required",
    pattern: {
      value: phonePatterm,
      message: "Please enter a valid phone number",
    },
  },
  national_ID: {
    required: "National Id is required",
    pattern: {
      value: nationalIdPattern,
      message: "Please enter a valid National Id",
    },
  },
  password: {
    required: "Password is required",
    minLength: {
      value: 6,
      message: "your password should contain at least 6 characters",
    },
  },
  confirm_password: {
    required: "Confirm password is required",
  },
  title: {
    required: "Title is required",
  },
  price_per_person: {
    required: "Price is required",
  },
  person_num: {
    required: "Number of persons is required",
  },
  description: {
    required: "Description is required",
  },
};
