import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronLeftIcon, EyeCloseIcon, EyeIcon } from "../../icons";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Checkbox from "../form/input/Checkbox";
import signupService from "../../services/AUTH/signup.service";
import { useAuth } from "../../context/AuthContext";
import { jwtDecode } from "jwt-decode";

export default function SignUpForm() {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const [user_email, setEmail] = useState<string>("");
  const [user_pass, setPassword] = useState<string>("");
  const [first_name, setFirstName] = useState<string>("");
  const [phone_number, setPhoneno] = useState<string>("");
  const [last_name, setLastName] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const [errors, setErrors] = useState<any>({}); // State for tracking errors
  const [loading, setLoading] = useState<boolean>(false);

  const validateInputs = () => {
    const newErrors: any = {};
    if (!first_name) newErrors.first_name = "First name is required.";
    if (!last_name) newErrors.last_name = "Last name is required.";
    if (!user_email) newErrors.user_email = "Email is required.";
    if (!user_pass) newErrors.user_pass = "Password is required.";
    if (!phone_number) newErrors.phone_number = "Phone number is required.";
    if (!isChecked)
      newErrors.isChecked = "You must agree to the terms and conditions.";

    // Basic email validation
    if (user_email && !/\S+@\S+\.\S+/.test(user_email)) {
      newErrors.user_email = "Please enter a valid email address.";
    }

    // Basic phone number validation (check if it's a valid format)
    if (phone_number && !/^\+?[1-9]\d{1,14}$/.test(phone_number)) {
      newErrors.phone_number = "Please enter a valid phone number.";
    }

    return newErrors;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validateInputs();
    setErrors(validationErrors);

    // If there are validation errors, don't submit the form
    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);

    try {
      const data = await signupService.signUp(
        first_name.trim(),
        last_name.trim(),
        user_email.trim(),
        user_pass,
        phone_number.trim()
      );

      if (data.status === "success" && data.accessToken) {
        // Store the encoded token in localStorage
        localStorage.setItem("token", data.accessToken);

        // Decode token to get user data
        const decodedToken: any = jwtDecode(data.accessToken);
        // console.log("Decoded Token After SignUp:", decodedToken);

        const userData = {
          user_id: decodedToken.user_id,
          user_email: decodedToken.user_email,
          user_first_name: decodedToken.user_first_name,
          user_last_name: decodedToken.user_last_name,
          user_phone_number: decodedToken.user_phone_number,
          role_id: decodedToken.role_id ?? -1,
          user_img: decodedToken.user_img,
          uuid: decodedToken.uuid,
        };

        // console.log("User Data After SignUp:", userData);
        setUser(userData);

        // Navigate based on role
        switch (userData.role_id) {
          case 3:
            navigate("/admin");
            break;
          case 1:
            navigate("/");
            break;
          case 2:
            navigate("/my-profile");
            break;
          default:
            navigate("/");
        }

        window.location.reload();
      } else {
        setErrors({ general: "Sign up failed. Please try again." });
      }
    } catch (error) {
      // console.error("Sign up error:", error);
      setErrors({ general: "An error occurred while signing up." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col flex-1 w-full overflow-y-auto lg:w-1/2 no-scrollbar">
      <div className="w-full max-w-md mx-auto mb-5 sm:pt-10">
        <Link
          to="/"
          className="inline-flex items-center text-sm text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
        >
          <ChevronLeftIcon className="size-5" />
          Back to home page
        </Link>
      </div>
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div>
          <div className="mb-5 sm:mb-8">
            <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
              Sign Up
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Enter your details to create an account!
            </p>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* First Name */}
                  <div className="sm:col-span-1">
                    <Label>
                      First Name<span className="text-error-500">*</span>
                    </Label>
                    <Input
                      type="text"
                      id="fname"
                      name="fname"
                      placeholder="John"
                      value={first_name}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    {errors.first_name && (
                      <p className="text-sm text-red-500">
                        {errors.first_name}
                      </p>
                    )}
                  </div>
                  {/* Last Name */}
                  <div className="sm:col-span-1">
                    <Label>
                      Last Name<span className="text-error-500">*</span>
                    </Label>
                    <Input
                      type="text"
                      id="lname"
                      name="lname"
                      placeholder="Doe"
                      value={last_name}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                    {errors.last_name && (
                      <p className="text-sm text-red-500">{errors.last_name}</p>
                    )}
                  </div>
                </div>
                {/* Email */}
                <div>
                  <Label>
                    Email<span className="text-error-500">*</span>
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="John@gmail.com"
                    value={user_email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.user_email && (
                    <p className="text-sm text-red-500">{errors.user_email}</p>
                  )}
                </div>
                {/* Password */}
                <div>
                  <Label>
                    Password<span className="text-error-500">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      placeholder="fdf43f/'r4.@$h"
                      type={showPassword ? "text" : "password"}
                      value={user_pass}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                    >
                      {showPassword ? (
                        <EyeIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
                      ) : (
                        <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
                      )}
                    </span>
                  </div>
                  {errors.user_pass && (
                    <p className="text-sm text-red-500">{errors.user_pass}</p>
                  )}
                </div>
                {/* Phone Number */}
                <div>
                  <Label>
                    Phone Number<span className="text-error-500">*</span>
                  </Label>
                  <Input
                    type="text"
                    id="phoneno"
                    name="phoneno"
                    placeholder="+251993044432"
                    value={phone_number}
                    onChange={(e) => setPhoneno(e.target.value)}
                  />
                  {errors.phone_number && (
                    <p className="text-sm text-red-500">
                      {errors.phone_number}
                    </p>
                  )}
                </div>
                {/* Checkbox */}
                <div className="flex items-center gap-3">
                  <Checkbox
                    className="w-5 h-5"
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                  />
                  <p className="inline-block font-normal text-gray-500 dark:text-gray-400">
                    By creating an account you agree to the{" "}
                    <span className="text-blue-700 dark:text-white/90">
                      Terms and Conditions,
                    </span>{" "}
                    and our{" "}
                    <span className="text-blue-700 dark:text-white">
                      Privacy Policy
                    </span>
                  </p>
                </div>
                {errors.isChecked && (
                  <p className="text-sm text-red-500">{errors.isChecked}</p>
                )}
                {errors.general && (
                  <p className="text-sm text-red-500">{errors.general}</p>
                )}
                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 mt-4 text-sm font-semibold text-white transition-colors duration-300 bg-blue-600 rounded-md disabled:bg-gray-400 hover:bg-blue-800 mb-6"
                  >
                    {loading ? "Creating Account..." : "Create Account"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
