"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";
import { ButtonHTMLAttributes } from "react";
type Props = {
  title: string;
  className?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | undefined;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const BackButton = ({ title, className, variant, ...props }: Props) => {
  const router = useRouter();
  return (
    <Button
      title={title}
      variant={variant}
      className={className}
      onClick={router.back}
      {...props}
    >
      {title}
    </Button>
  );
};

export default BackButton;
