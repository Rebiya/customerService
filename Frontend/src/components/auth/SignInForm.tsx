import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginService from "../../services/AUTH/login.service";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import { ChevronLeftIcon, EyeCloseIcon, EyeIcon } from "../../icons";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Button from "../ui/button/Button";

export default function SignInForm() {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const [user_email, setEmail] = useState<string>("");
  const [user_pass, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      const data = await loginService.logIn(user_email.trim(), user_pass);

      if (data.status === "success" && data.accessToken) {
        // Store only the encoded token in localStorage
        localStorage.setItem("token", data.accessToken);

        // Decode token temporarily for setting user state
        const decodedToken: any = jwtDecode(data.accessToken);
        // console.log("Decoded Token After Login:", decodedToken);

        const userData = {
          user_id: decodedToken.user_id,
          user_email: decodedToken.user_email,
          user_first_name: decodedToken.user_first_name,
          user_last_name: decodedToken.user_last_name,
          user_phone_number: decodedToken.user_phone_number,
          role_id: decodedToken.role_id ?? -1,
          user_img: decodedToken.user_img,
        };

        // console.log("User Data After Login:", userData);
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
            navigate("/my profile");
            break;
          default:
            navigate("/");
        }

        window.location.reload();
      } else {
        toast.error("Login failed. Please try again.");
      }
    } catch (error) {
      // console.error("Login error:", error);
      toast.error("An error occurred while logging in.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col flex-1">
      <div className="w-full max-w-md pt-10 mx-auto">
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
              Sign In
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Enter your email and password to sign in!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label>
                Email <span className="text-error-500">*</span>
              </Label>
              <Input
                type="email"
                placeholder="info@gmail.com"
                value={user_email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <Label>
                Password <span className="text-error-500">*</span>
              </Label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={user_pass}
                  onChange={(e) => setPassword(e.target.value)}
                  required
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
            </div>
            <Link
              to="/forgot-password"
              className="font-medium text-blue-600 transition-colors hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 text-xs"
            >
              Forgot Password?
            </Link>

            <div>
              <Button
                type="submit"
                className="w-full"
                size="sm"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Sign In"}
              </Button>
            </div>
          </form>

          {/* Create Account Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-medium text-blue-600 transition-colors hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
