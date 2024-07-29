import React from "react";
import { Container } from "../../ui";
import {
  Eye as ShowPasswordIcon,
  EyeOff as HidePasswordIcon,
} from "react-feather";
import useLoginForm from "../../hooks/useLoginForm";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

interface LoginProps {
  toggleAuth: () => void;
}

const Login: React.FC<LoginProps> = ({ toggleAuth }) => {
  const {
    values,
    errors,
    showPassword,
    handleChange,
    handleSubmit,
    togglePassword,
    successMessage,
    errorMessage,
  } = useLoginForm();
  const { loading } = useSelector((state: RootState) => state.auth);

  return (
    <Container className="min-w-[600px]" padding="xs">
      <header className="text-center">
        <p className="text-[14px] uppercase text-secondary">WELCOME BACK</p>
        <p className="text-[18px] text-white font-semibold mt-1">
          Log into your account
        </p>

        {successMessage ? (
          <p className="mt-4 text-green-500">{successMessage}</p>
        ) : (
          <p className="mt-4 text-red-500">{errorMessage}</p>
        )}
      </header>
      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="emailOrUsername" className="text-[14px]">
            Email or Username
          </label>
          <input
            id="emailOrUsername"
            name="emailOrUsername"
            type="text"
            placeholder="Enter your email or username"
            value={values.emailOrUsername}
            onChange={handleChange}
            className={`bg-transparent border rounded-md h-[48px] mt-2 text-[18px] p-3 border-[#35373B] focus:outline-none focus:border-white ${
              errors.emailOrUsername
                ? "border-red-500 focus:border-red-500"
                : ""
            }`}
          />
          {errors.emailOrUsername && (
            <p className="text-red-500 text-[12px] mt-1">
              {errors.emailOrUsername}
            </p>
          )}
        </div>

        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <label htmlFor="password" className="text-[14px]">
              Password
            </label>
            <a href="#" className="text-[14px] text-primary hover:underline">
              Forgot Password?
            </a>
          </div>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
              className={`bg-transparent border rounded-md h-[48px] text-[18px] mt-2 p-3 border-[#35373B] focus:outline-none focus:border-white w-full ${
                errors.password ? "border-red-500 focus:border-red-500" : ""
              }`}
            />
            <button
              type="button"
              onClick={togglePassword}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[18px] text-gray-400"
            >
              {showPassword ? <HidePasswordIcon /> : <ShowPasswordIcon />}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-[12px] mt-1">{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-button-primary text-white rounded-md disabled:bg-slate-500 h-[48px] mt-4 font-semibold text-[18px] hover:bg-primary-dark transition duration-300"
          disabled={loading}
        >
          {loading ? "Logging..." : "Log In"}
        </button>
        <p className="text-secondary text-[14px]">
          Not registered yet?
          <span
            onClick={toggleAuth}
            className="hover:underline ml-2 text-primary cursor-pointer"
          >
            Register →
          </span>
        </p>
      </form>
    </Container>
  );
};

export default Login;
