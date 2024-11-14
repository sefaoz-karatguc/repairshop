import Header from "@/components/Header";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const RSLayout = ({ children }: Props) => {
  return (
    <div className="mx-auto w-full max-w-7xl ">
      <Header />
      <div className="px-4 py-2">{children}</div>
    </div>
  );
};

export default RSLayout;
