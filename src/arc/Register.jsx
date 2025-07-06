const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [isPasswordVisible, setIsPasswordVisible] = useState(false);
const [passwordDetails, setPasswordDetails] = useState(false);
const [passwordErrors, setPasswordErrors] = useState([]);

const [allFieldsFilled, setAllFieldsFilled] = useState(false);

const strength = getPasswordStrength(password);

const navigate = useNavigate();

const payload = {
  firstName,
  lastName,
  email,
  password,
};

const handleSubmit = async () => {
  try {
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      Toast({
        desciption: "All fields are required",
        color: "danger",
      });
      return;
    }

    if (password !== confirmPassword) {
      Toast({
        desciption: "Passwords do not match",
        color: "danger",
      });
      return;
    }
    if (passwordErrors.length > 0) {
      Toast({
        desciption: "Password does not meet requirements",
        color: "danger",
      });
      return;
    }
    const response = await axios.post(`${API_URL}/auth/register`, payload);

    if (response.status === 201) {
      Toast({
        desciption: "Registration successful",
        color: "success",
      });

      setTimeout(() => {
        Toast({
          desciption: "You will be redirected to login page in 3 seconds",
          color: "primary",
          duration: 3000,
        });

        setTimeout(() => {
          navigate("/auth/login");
        }, 3000);
      }, 2000);
    }
  } catch (error) {
    if (error.response && error.response.status === 409) {
      Toast({
        desciption: "Email is already registered",
        color: "danger",
      });
    } else {
      Toast({
        desciption: "An error occurred during registration",
        color: "danger",
      });
    }
    console.log(error);
  }
};

const resetFields = () => {
  setFirstName("");
  setLastName("");
  setEmail("");
  setPassword("");
  setConfirmPassword("");
};

useEffect(() => {
  const fieldsFilled =
    firstName.trim() &&
    lastName.trim() &&
    email.trim() &&
    password &&
    confirmPassword &&
    password === confirmPassword &&
    passwordErrors.length === 0;

  setAllFieldsFilled(fieldsFilled);
}, [firstName, lastName, email, password, confirmPassword, passwordErrors]);

return (
  <div className="flex flex-col items-center justify-center py-20 px-6 text-black">
    <div className="w-full md:w-[50%] h-full flex flex-col items-center justify-center py-10 px-6 rounded-lg shadow-lg border border-gray-200">
      <NavigationButtons />
      <div className="flex items-center gap-2 p-3 rounded-md bg-yellow-100 border border-yellow-300 text-yellow-800 text-sm font-semibold mb-2">
        <TriangleAlert size={20} className="text-yellow-600" />
        <span>
          Please enter a valid email address. We’ll send important updates
          there.
        </span>
      </div>

      <h1 className="text-4xl font-extrabold mb-10">Create Account</h1>
      <div className="flex flex-col w-full max-w-sm space-y-4 mb-4">
        <label className="font-bold">Full Name</label>
      </div>
      <div className="flex gap-4 w-full max-w-sm mb-4">
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          placeholder="First Name"
          className="p-3 w-1/2 rounded-lg bg-blue-50 border border-blue-300 outline-blue-500 focus:outline-blue-500 transition-all duration-300"
        />
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          placeholder="Last Name"
          className="p-3 w-1/2 rounded-lg bg-blue-50 border border-blue-300 outline-blue-500 focus:outline-blue-500 transition-all duration-300"
        />
      </div>
      <div className="flex flex-col w-full max-w-sm space-y-4 mb-4">
        <label htmlFor="email" className="font-bold">
          Email
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          placeholder="Enter your email"
          className="p-3 rounded-lg bg-blue-50 border border-blue-300 outline-blue-500 focus:outline-blue-500 transition-all duration-300"
        />
      </div>
      <div className="flex flex-col w-full max-w-sm space-y-2 mb-4">
        <div className="relative flex items-center gap-1">
          <label htmlFor="password" className="font-bold">
            Password
          </label>
          <div
            className="relative flex items-center gap-4"
            onMouseEnter={() => setPasswordDetails(true)}
            onMouseLeave={() => setPasswordDetails(false)}
          >
            <CircleHelp size={15} className="cursor-pointer" />
            <MoveLeft size={15} className="cursor-pointer animate-wiggleX" />
            {passwordDetails && (
              <div className="absolute top-full left-1 mt-2 z-10 bg-white border border-gray-300 shadow-lg rounded-md p-3 w-96">
                <PasswordDetails />
              </div>
            )}
          </div>
        </div>
        <div className="relative">
          <input
            value={password}
            onChange={(e) => {
              const value = e.target.value;
              setPassword(value);

              const result = validatePassword(value);
              setPasswordErrors(Array.isArray(result) ? result : []);
            }}
            type={isPasswordVisible ? "text" : "password"}
            name="password"
            placeholder="Create a password"
            className="p-3 pr-10 w-full rounded-lg bg-blue-50 border border-blue-300 outline-blue-500 focus:outline-blue-500 transition-all duration-300"
          />
          {isPasswordVisible ? (
            <Eye
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-blue-400 cursor-pointer"
              onClick={() => setIsPasswordVisible(false)}
            />
          ) : (
            <EyeOff
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-blue-400 cursor-pointer"
              onClick={() => setIsPasswordVisible(true)}
            />
          )}
        </div>
        <div className={`text-sm font-semibold ${strength.color}`}>
          {password !== "" && <div>Strength: {strength.label}</div>}
          {passwordErrors.length > 0 && (
            <ul className="text-sm text-red-500 font-medium space-y-1 mt-1">
              {passwordErrors.map((err, idx) => (
                <li key={idx}>• {err}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="flex flex-col w-full max-w-sm space-y-2 mb-8">
        <label htmlFor="confirmPassword" className="font-bold">
          Confirm Password
        </label>
        <input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          name="confirmPassword"
          placeholder="Re-enter your password"
          className="p-3 rounded-lg bg-blue-50 border border-blue-300 outline-blue-500 focus:outline-blue-500 transition-all duration-300"
        />
        {password.length > 0 && password !== confirmPassword && (
          <div className="text-red-500 text-sm font-semibold">
            Passwords do not match
          </div>
        )}
      </div>
      <button
        className={`p-3 w-full max-w-sm font-bold rounded-lg transition-all duration-300 border ${
          allFieldsFilled
            ? "bg-blue-100 border-blue-500 text-black hover:bg-blue-200 cursor-pointer"
            : "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed"
        }`}
        onClick={() => {
          if (allFieldsFilled) {
            handleSubmit();
            resetFields();
          }
        }}
        disabled={!allFieldsFilled}
      >
        Register
      </button>
    </div>
  </div>
);
