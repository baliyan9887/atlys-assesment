/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAsync } from "../store/authSlice";

interface FormValues {
  emailOrUsername: string;
  password: string;
}

const useLoginForm = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState<FormValues>({
    emailOrUsername: "",
    password: "",
  });
  const [errors, setErrors] = useState<{
    emailOrUsername?: string;
    password?: string;
  }>({});
  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });

    // Validate field on change
    if (name === "emailOrUsername") {
      if (!value) {
        setErrors((prev) => ({
          ...prev,
          emailOrUsername: "Email or Username is required",
        }));
      } else {
        setErrors((prev) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { emailOrUsername, ...rest } = prev;
          return rest;
        });
      }
    }

    if (name === "password") {
      if (!value) {
        setErrors((prev) => ({ ...prev, password: "Password is required" }));
      } else {
        setErrors((prev) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { password, ...rest } = prev;
          return rest;
        });
      }
    }
  };

  const validate = (): boolean => {
    const newErrors: { emailOrUsername?: string; password?: string } = {};
    if (!values.emailOrUsername)
      newErrors.emailOrUsername = "Email or Username is required";
    if (!values.password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const { emailOrUsername: email, password } = values;

    dispatch(loginAsync(email, password) as any).then(
      (res: { code: number; message: string }) => {
        if (res.code === 200) {
          setSuccessMessage(res.message);
          setValues({ emailOrUsername: "", password: "" });
        } else {
          setErrorMessage(res.message);
        }
      }
    );
    // Reset form or handle success here
  };

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return {
    values,
    errors,
    showPassword,
    handleChange,
    handleSubmit,
    togglePassword,
    errorMessage,
    successMessage,
  };
};

export default useLoginForm;
