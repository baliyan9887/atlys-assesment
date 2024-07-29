import { useState } from "react";

interface FormValues {
  email: string;
  username: string;
  password: string;
}

const useSignUpForm = () => {
  const [values, setValues] = useState<FormValues>({
    email: "",
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState<{
    email?: string;
    username?: string;
    password?: string;
  }>({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });

    // Validate fields on change
    if (name === "email") {
      if (!value) {
        setErrors((prev) => ({ ...prev, email: "Email is required" }));
      } else {
        setErrors((prev) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { email, ...rest } = prev;
          return rest;
        });
      }
    }

    if (name === "username") {
      if (!value) {
        setErrors((prev) => ({ ...prev, username: "Username is required" }));
      } else {
        setErrors((prev) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { username, ...rest } = prev;
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
    const newErrors: { email?: string; username?: string; password?: string } =
      {};
    if (!values.email) newErrors.email = "Email is required";
    if (!values.username) newErrors.username = "Username is required";
    if (!values.password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Handle form submission logic here (e.g., API call)
    console.log("Form submitted:", values);
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
  };
};

export default useSignUpForm;
