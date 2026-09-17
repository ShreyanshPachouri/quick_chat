"use client"

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createChatSchema, createChatSchemaType } from "@/src/validations/groupChatValidation";
import { Input } from "@base-ui/react";

export default function CreateChat(){
    const[open, setOpen] = useState(false)
    const[loading, setLoading] = useState(false)

    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createChatSchemaType>({
    resolver: zodResolver(createChatSchema),
  });

  const onSubmit = (payload: createChatSchemaType) => {
    console.log("The chat payload is ", payload)
  }
    
    return(
            <Dialog open = { open } onOpenChange = { setOpen }>
                <DialogTrigger render={<Button />}>
                Create Group
                </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Create your new chat</DialogTitle>
                        </DialogHeader>
                        <form onSubmit = {handleSubmit(onSubmit)}>
                            <div className="mt-4">
                                <Input placeholder="Enter chat title" {...register("title")} />
                                <span className="text-red-400">{errors.title?.message}</span>
                            </div>
                            <div className="mt-4">
                                <Input placeholder="Enter passcode" {...register("passcode")} />
                                <span className="text-red-400">{errors.passcode?.message}</span>
                            </div>
                            <div className="mt-4">
                                <Button className='w-full' disabled={loading}>{loading ? "Processing" : "Submit"}</Button>
                            </div>
                        </form>
                    </DialogContent>
        </Dialog>
    )
}