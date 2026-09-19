import { Server, Socket } from "socket.io"

interface CustomSocket extends Socket{
    room?: string
}

export function setupSocket(io: Server){
    io.use((socket: CustomSocket, next) => {
        const room = socket.handshake.auth.room || socket.handshake.query.room as string

        if(!room){
            return next(new Error("Invalid room"))
        }

        socket.room = room
        next()
    })
    
    io.on("connection", (socket: CustomSocket) => {
        socket.join(socket.room!)
        console.log("Socket connected: ", socket.id)

        socket.on("message", (data) => {
            console.log("Server side message", data)
            io.to(socket.room!).emit("message", data)
        })

        socket.on("disconnect", () => {
            console.log("A user disconnected: ", socket.id)
        })
    })
}