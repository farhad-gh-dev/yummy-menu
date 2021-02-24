const usernamePattern = new RegExp(/^[a-zA-Z0-9._-]+$/);
const emailPattern = new RegExp(
  /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
);
const phoneNumberPattern = /^\d{10}$/;

const singUpValidation = (formData) => {
  let error = null;

  const inputNames = Object.keys(formData);

  for (const inputName of inputNames) {
    //check if input is empty
    if (!formData[inputName]) {
      error = { message: `${inputName} is required.` };
      break;
    }

    //Validation for: valid characters for username / min and max number of characters
    if (inputName === "username") {
      if (!usernamePattern.test(formData["username"])) {
        error = { message: "invalid username" };
        break;
      }
      if (formData["username"].length < 6) {
        error = { message: "username is too short" };
        break;
      }
      if (formData["username"].length > 36) {
        error = { message: "username is too long" };
        break;
      }
    }

    //Validation for: valid characters for email / min and max number of characters
    if (inputName === "email") {
      if (!emailPattern.test(formData["email"])) {
        error = { message: "invalid email address" };
        break;
      }

      if (formData["email"].length < 3) {
        error = { message: "email is too short" };
        break;
      }

      if (formData["email"].length > 254) {
        error = { message: "email is too long" };
        break;
      }
    }

    //Validation for: password strength / min number of characters
    if (inputName === "password") {
      if (formData["password"].length < 8) {
        error = { message: "password is too short" };
        break;
      }

      const passwordPattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])");
      if (!passwordPattern.test(formData["password"])) {
        error = {
          message:
            "weak password, your password should contain at least numbers, lowercase and uppercase characters",
        };
        break;
      }
    }
  }

  return {
    error,
  };
};

const signInValidation = (formData) => {
  let error = null;

  const inputNames = Object.keys(formData);

  for (const inputName of inputNames) {
    //check if input is empty
    if (!formData[inputName]) {
      error = {
        message: `${
          inputName !== "usernameOrEmail" ? inputName : "username or email"
        } is required.`,
      };
      break;
    }

    //Validation for: password strength / min number of characters
    if (inputName === "password") {
      if (formData["password"].length < 8) {
        error = { message: "invalid password" };
        break;
      }

      const passwordPattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])");
      if (!passwordPattern.test(formData["password"])) {
        error = {
          message: "invalid password",
        };
        break;
      }
    }

    //Validation for: min and max number of characters
    if (inputName === "usernameOrEmail") {
      if (formData["usernameOrEmail"].length < 3) {
        error = { message: "username or email address is invalid" };
        break;
      }

      if (formData["usernameOrEmail"].length > 254) {
        error = { message: "username or email is invalid" };
        break;
      }
    }
  }

  return {
    error,
  };
};

export {
  usernamePattern,
  emailPattern,
  phoneNumberPattern,
  signInValidation,
  singUpValidation,
};
