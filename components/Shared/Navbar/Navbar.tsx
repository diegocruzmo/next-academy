"use client";

import { BellRing, LogIn, Search } from "lucide-react";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { Toggle } from "../Toggle";

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 border-b h-13">
      <SidebarTrigger />

      <div className="flex gap-4 items-center">
        <div className="flex gap-2 justify-between w-full max-w-sm items-center border-gray-300 rounded-md px-2 py-1">
          <Search className=" h-4 w-4" />
          <Input type="search" className="w-full " placeholder="Search..." />
        </div>

        <Button variant={"link"}>
          <BellRing />
        </Button>

        <Toggle />

        <SignedIn>
          <UserButton />
        </SignedIn>

        <SignedOut>
          <SignInButton>
            <Button variant={"link"}>
              <LogIn />
              Sign in
            </Button>
          </SignInButton>
        </SignedOut>
      </div>
    </div>
  );
};
