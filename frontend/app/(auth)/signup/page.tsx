"use client";

import { SignUpForm } from "@/components/auth/signup-form";
import { AuthLayout } from "@/components/auth/auth-layout";

export default function SignUpPage() {
  return (
    <AuthLayout
      title="Create an account"
      description="Sign up to get started with our platform"
    >
      <SignUpForm />
    </AuthLayout>
  );
}