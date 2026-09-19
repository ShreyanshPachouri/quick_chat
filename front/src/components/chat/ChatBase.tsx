"use client"

import { getSocket } from '@/src/lib/socket.config'
import { useEffect, useMemo } from 'react'
import { v4 as uuidV4 } from "uuid"
import { Button } from '../ui/button'

export default function ChatBase({ groupId }: { groupId: string }){
    let socket = useMemo(() => {
        const socket = getSocket()
        socket.auth = {
            room: groupId
        }

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
        socket.emit("message", { name: "Tushar", id: uuidV4()})
    }

    return(
        <div>
            <Button onClick = {handleClick}>Send Message</Button>
        </div>
    )
}