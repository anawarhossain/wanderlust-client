"use client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
} from "@heroui/react";
import { authClient } from "../lib/auth-client";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

const RegisterPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    console.log(userData);

    const { data, error } = await authClient.signUp.email({
      name: userData.name,
      email: userData.email,
      password: userData.password,
      callbackURL: "/",
    });
    console.log("sign up response:", { data, error });
    if (error) {
      alert("Error signing up" + error.message);
    }
    if (data) {
      alert(
        "Sign up successful! Please check your email to verify your account.",
      );
    }
  };

  return (
    <div className=" w-1/2 mx-auto h-screen flex justify-center items-center">
      <div className="space-y-5">
        <div>
          <h1 className="text-2xl text-center font-bold">
            Register Your account
          </h1>
          <p className="text-center text-sm text-muted">
            Start your adventure with Wanderlust
          </p>
        </div>

        <Form
          className="flex w-96 flex-col gap-4 border px-5 py-12 shadow-2xl space-y-3 rounded-lg"
          onSubmit={onSubmit}
        >
          <TextField isRequired name="name" type="text">
            <Label>Full Name</Label>
            <Input placeholder="John Doe" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>
          <Button className="w-full" type="submit">
            <Check />
            Submit
          </Button>
          <div className="w-full overflow-hidden flex justify-center items-center gap-3">
            <Separator />
            <h1 className="whitespace-nowrap">Or Sign Up</h1>
            <Separator />
          </div>
          <Button variant="outline" className="w-full">
            <FcGoogle />
            Sign Up With Google
          </Button>
          <p className="text-center">Already have an account? <Link href={'/signin'} className="text-sky-500 font-bold">Sign in</Link></p>
        </Form>
      </div>
    </div>
  );
};

export default RegisterPage;
