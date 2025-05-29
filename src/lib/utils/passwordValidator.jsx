const validatePassword = (password) => {
  const errors = [];

  if (!/[A-Za-z]/.test(password)) {
    errors.push("Include at least one letter (A-Z or a-z).");
  }

  if (!/\d/.test(password)) {
    errors.push("Include at least one digit (0-9).");
  }

  if (!/[^A-Za-z0-9]/.test(password)) {
    errors.push("Include at least one symbol (e.g., !, @, #, $).");
  }

  if (password.length < 8) {
    errors.push("Must be at least 8 characters long.");
  }

  if (/\s/.test(password)) {
    errors.push("Cannot contain spaces or whitespace characters.");
  }

  return errors.length > 0 ? errors : true;
};

export default validatePassword;
