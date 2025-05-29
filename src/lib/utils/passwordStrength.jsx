const getPasswordStrength = (password) => {
  if (password.length < 6) return { label: "Weak", color: "text-red-500" };
  if (
    password.match(/[A-Z]/) &&
    password.match(/[0-9]/) &&
    password.length >= 8
  ) {
    return { label: "Strong", color: "text-green-500" };
  }
  return { label: "Medium", color: "text-yellow-500" };
};

export default getPasswordStrength;
