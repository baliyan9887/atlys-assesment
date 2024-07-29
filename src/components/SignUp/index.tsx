import React from "react";
import { Container } from "../../ui";
import {
  Eye as ShowPasswordIcon,
  EyeOff as HidePasswordIcon,
} from "react-feather";
import useSignUpForm from "../../hooks/useSignupForm";

interface SignUpProps {
  toggleAuth: () => void;
}

const SignUp: React.FC<SignUpProps> = ({ toggleAuth }) => {
  const {
    values,
    errors,
    showPassword,
    handleChange,
    handleSubmit,
    togglePassword,
  } = useSignUpForm();

  return (
    <Container className="min-w-[600px]" padding="xs">
      <header className="text-center">
        <p className="text-[14px] uppercase text-secondary">SIGN UP</p>
        <p className="text-[18px] text-white font-semibold mt-1">
          Create an account to continue
        </p>
      </header>
      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-[14px]">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            className={`bg-transparent border rounded-md h-[48px] mt-2 text-[18px] p-3 border-[#35373B] focus:outline-none focus:border-white ${
              errors.email ? "border-red-500 focus:border-red-500" : ""
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-[12px] mt-1">{errors.email}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="username" className="text-[14px]">
            Username
          </label>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Choose a preferred username"
            value={values.username}
            onChange={handleChange}
            className={`bg-transparent border rounded-md h-[48px] mt-2 text-[18px] p-3 border-[#35373B] focus:outline-none focus:border-white ${
              errors.username ? "border-red-500 focus:border-red-500" : ""
            }`}
          />
          {errors.username && (
            <p className="text-red-500 text-[12px] mt-1">{errors.username}</p>
          )}
        </div>

        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <label htmlFor="password" className="text-[14px]">
              Password
            </label>
          </div>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Choose a strong password"
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
          className="w-full bg-button-primary text-white rounded-md h-[48px] mt-4 font-medium text-[18px] hover:bg-primary-dark transition duration-300"
        >
          Continue
        </button>
        <p className="text-secondary text-[14px]">
          Already have an account?
          <span
            onClick={toggleAuth}
            className="hover:underline ml-2 text-primary cursor-pointer"
          >
            Login →
          </span>
        </p>
      </form>
    </Container>
  );
};

export default SignUp;
