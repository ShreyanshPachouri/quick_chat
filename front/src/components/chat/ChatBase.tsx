"use client"

import { getSocket } from '@/src/lib/socket.config'
import { useEffect, useMemo } from 'react'
import { v4 as uuidV4 } from "uuid"
import { Button } from '../ui/button'

export default function ChatBase(){
    let socket = useMemo(() => {
        const socket = getSocket()
        return socket.connect()
    }, [])

    useEffect(() => {
    const handleMessage = (data: any) => {
        console.log("The socket message is: ", data);
    };

    socket.on("message", handleMessage);

    return () => {
        socket.off("message", handleMessage)
    };

}, []);

    const handleClick = () => {
        console.log("Hey, I am clicking " + uuidV4())
        socket.emit("message", { name: "Tushar", id: uuidV4()})
    }

    return(
        <div>
            <Button onClick = {handleClick}>Send Message</Button>
        </div>
    )
}