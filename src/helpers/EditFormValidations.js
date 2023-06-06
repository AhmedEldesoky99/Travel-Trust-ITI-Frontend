import { phonePatterm } from "./regex";

export const ruleEditValidation = {
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
    phone_Num: {
        pattern: {
            value: phonePatterm,
            message: "Please enter a valid phone number",
        },
    },
    city: {
        maxLength: {
            value: 20,
            message: "your city exceed maximum length of 20 characters",
        },
    }
};
