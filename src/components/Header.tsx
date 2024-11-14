import React from "react";
import { HomeIcon, File, UsersRound, LogOut } from "lucide-react";
import Link from "next/link";
import NavButton from "@/components/NavButton";
import { ThemeToggler } from "./ThemeToggler";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "./ui/button";
type Props = {};

const Header = (props: Props) => {
  return (
    <header className="animate-slide bg-background h-12 p-2 border-b sticky top-0 z-20">
      <div className="flex h-8 items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <NavButton href="/home" label="Home" icon={HomeIcon} />
          <Link
            href={"/home"}
            className="flex justify-center items-center gap-2 ml-0"
            title="Home"
          >
            <h1 className="hidden sm:block text-xl font-bold m-0 mt-1">
              Computer Repair Shop
            </h1>
          </Link>
        </div>
        <div className="flex items-center">
          <NavButton href="/tickets" label="Tickets" icon={File} />
          <NavButton href="/customers" label="Customer" icon={UsersRound} />
          <ThemeToggler />

          <Button
            variant={"ghost"}
            size={"icon"}
            aria-label="Log Out"
            title="Log Out"
            className="rounded-full"
            asChild
          >
            <LogoutLink>
              <LogOut />
            </LogoutLink>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
