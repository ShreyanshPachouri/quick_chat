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
import { Input } from "../ui/input";
import { CustomUser } from "@/src/app/api/auth/[...nextauth]/options";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";
import { CHAT_GROUP_URL } from "@/src/lib/apiEndPoints";

export default function CreateChat({ user }: { user: CustomUser }){
    const[open, setOpen] = useState(false)
    const[loading, setLoading] = useState(false)

    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createChatSchemaType>({
    resolver: zodResolver(createChatSchema),
  });

  const onSubmit =  async (payload: createChatSchemaType) => {
    try{
        setLoading(true)
        const { data } = await axios.post(CHAT_GROUP_URL, {...payload, user_id: user.id}, {
            headers: {
                Authorization: user.token
            }
        })

        if(data?.message){
            setLoading(false)
            setOpen(false)
            toast.success(data?.message)
        }
    }

    catch(error){
        setLoading(false)

        if(error instanceof AxiosError){
            toast.error(error.message)
        }

        else{
            toast.error("Something went wrong. Please try again.")
        }
    }
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
                                <Button type = "submit" className='w-full' disabled={loading}>{loading ? "Processing" : "Submit"}</Button>
                            </div>
                        </form>
                    </DialogContent>
        </Dialog>
    )
}