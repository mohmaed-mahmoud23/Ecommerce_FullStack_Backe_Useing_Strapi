import { selectLogin, userLogin } from "../app/Fetcher/LoginSlice";
import type { AppDispatch } from "@/app/store";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useState, type ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";
interface Iprop {
  isAsuntketde: String;
}
export function Login({ isAsuntketde }: Iprop) {
  const { loading } = useSelector(selectLogin);
  const disbatch = useDispatch<AppDispatch>();
  const [user, setUser] = useState({
    identifier: "",
    password: "",
  });

  const [showError, setShowError] = useState({
    identifier: false,
    password: false,
  });
  if (isAsuntketde) return <Navigate to={"/"} />;

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });

    setShowError({ ...showError, [name]: false });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailEmpty = user.identifier.trim() === "";
    const passwordEmpty = user.password.trim() === "";

    setShowError({
      identifier: emailEmpty,
      password: passwordEmpty,
    });

    if (!emailEmpty && !passwordEmpty) {
      console.log("🚀 Sent to API:", {
        identifier: user.identifier,
        password: user.password,
      });

      disbatch(userLogin(user));
    }
  };
  console.log(user);
  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-md flex-col gap-4 mx-auto mt-20"
    >
      {/* Email */}
      <div>
        <div className="mb-2 b lock">
          <Label htmlFor="email1">Your email</Label>
        </div>
        <TextInput
          name="identifier" // ✅ مهم جدًا يكون identifier
          onChange={onChangeHandler}
          value={user.identifier}
          id="identifier"
          type="email"
          placeholder="name@flowbite.com"
        />
        {showError.identifier && (
          <p className="text-sm text-red-500">Email is required</p>
        )}
      </div>

      {/* Password */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1">Your password</Label>
        </div>
        <TextInput
          name="password"
          value={user.password}
          onChange={onChangeHandler}
          id="password1"
          type="password"
        />
        {showError.password && (
          <p className="text-sm text-red-500">Password is required</p>
        )}
      </div>

      {/* Checkbox */}
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>

      {/* Submit */}
      <Button type="submit" color="blue" disabled={loading}>
        {loading ? (
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 animate-spin text-white"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Loading...
          </div>
        ) : (
          "Submit"
        )}
      </Button>
    </form>
  );
}

export default Login;
