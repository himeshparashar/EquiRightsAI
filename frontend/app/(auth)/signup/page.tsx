"use client";

import { AuthLayout } from "@/components/auth/auth-layout";
import { SignUpForm } from "@/components/auth/signup-form";

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
