"use client";

import { User } from "next-auth";
import { LoginButton } from "./login-button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { LineChart, LogOut, User2 } from "lucide-react";

export const UserDropdown = ({
  onOpenChange,
  user,
}: {
  onOpenChange?: (open: boolean) => void;
  user?: User;
}) => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex justify-center">
        {user ? (
          <AccountMenu user={user} onOpenChange={onOpenChange} />
        ) : (
          <LoginButton />
        )}
      </div>
    </div>
  );
};

const AccountMenu = ({
  onOpenChange,
  user,
}: {
  onOpenChange?: (open: boolean) => void;
  user: User;
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-full gap-2 px-2 bg-white bg-opacity-0 lg:px-4 hover:bg-white hover:bg-opacity-5 w-fit"
        >
          <Image
            className="rounded-full"
            src={user.image ?? ""}
            alt="user avatar"
            height={26}
            width={26}
          />
          <p className="truncate">{user.name}</p>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        <DropdownMenuItem asChild>
          <Link
            href="/dashboard/races"
            className="flex items-center gap-1"
            onClick={() => onOpenChange?.(false)}
          >
            <LineChart className="w-4 h-4 mr-2" />
            <span>Dashboard</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href={`/users/${user.id}`}
            className="flex items-center gap-1"
            onClick={() => onOpenChange?.(false)}
          >
            <User2 className="w-4 h-4 mr-2" />
            <span>Profile</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="text-red-500 hover:text-white focus:bg-destructive hover:cursor-pointer"
          onClick={() => signOut({ callbackUrl: `${window.location.origin}` })}
        >
          <LogOut className="w-4 h-4 mr-2" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
