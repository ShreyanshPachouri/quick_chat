"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import UserAvatar from "../common/UserAvatar";
import dynamic from "next/dynamic";

const LogoutModal = dynamic(() => import("../auth/LogoutModal"));

export default function ProfileMenu({
  image,
  name,
}: {
  image?: string;
  name: string;
}) {
  const [logoutOpen, setLogoutOpen] = useState(false);

  return (
    <>
      {logoutOpen && (
        <LogoutModal open={logoutOpen} setOpen={setLogoutOpen} />
      )}

      <DropdownMenu>
        <DropdownMenuTrigger>
          <UserAvatar name={name} image={image} />
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>

            <DropdownMenuItem>Profile</DropdownMenuItem>

            <DropdownMenuItem onClick={() => setLogoutOpen(true)}>
              Logout
            </DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}