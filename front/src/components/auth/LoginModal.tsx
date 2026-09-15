"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import Image from "next/image";

export default function LoginModal() {
  return (
  <Dialog>
  <DialogTrigger render={<Button />}>
    Getting started
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle className = 'text-2xl'>Welcome to Quick Chat</DialogTitle>
      <DialogDescription>
         QuickChat makes it effortless to create secure chat links and start
        conversations in seconds.
      </DialogDescription>
    </DialogHeader>

    <Button variant = "outline">
        <Image
            src="/images/google.png"
            className=" mr-4"
            width={25}
            height={25}
            alt="google"
          />
          Continue with Google
    </Button>
  </DialogContent>
</Dialog>
  );
}