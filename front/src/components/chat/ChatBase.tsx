"use client"

import { getSocket } from '@/src/lib/socket.config'
import { useEffect, useMemo, useState } from 'react'
import { v4 as uuidV4 } from "uuid"
import ChatSidebar from './ChatSidebar'
import ChatNav from './ChatNav'
import ChatUserDialog from './ChatUserDialog'

export default function ChatBase({ group, users }: { group: ChatGroupType, users: Array<GroupChatUserType> | [] }){
//     let socket = useMemo(() => {
//         const socket = getSocket()
//         socket.auth = {
//             room: groupId
//         }

//         return socket.connect()
//     }, [])

//     useEffect(() => {
//     const handleMessage = (data: any) => {
//         console.log("The socket message is: ", data);
//     };

//     socket.on("message", handleMessage);

//     return () => {
//         socket.off("message", handleMessage)
//     };

// }, []);

    const [open, setOpen] = useState(true)

    return(
        <div className = "flex">
            <ChatSidebar users = {users} />
            <div className = "w-full md:w-4/5 bg-gradient-to-b from-gray-50 to-white">
            {open ? <ChatUserDialog open = {open} setOpen = {setOpen} group = {group} /> : <ChatNav chatGroup = {group} users = {users}/>}
            </div>
        </div>
    )
}