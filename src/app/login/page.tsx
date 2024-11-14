import { Button } from "@/components/ui/button";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import React from "react";

type Props = {};

const LoginPage = (props: Props) => {
  return (
    <main className="flex items-center justify-center w-screen h-screen gap-6 flex-col text-4xl">
      <h1>Repair Shop</h1>
      <Button asChild>
        <LoginLink>Sign In</LoginLink>
      </Button>
    </main>
  );
};

export default LoginPage;
