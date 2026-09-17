import type { Request, Response } from "express";
import prisma from "../config/db.config.js";

class ChatGroupController{
    static async store(req: Request, res: Response){
        try{
            const body = req.body
            const user = req.user

            await prisma.chatGroup.create({
                data: {
                    title: body.title,
                    passcode: body.passcode,
                    user_id: user!.id
                }
            })

            return res.status(201).json({ message: "Chat group created successfully" })
        }

        catch(error){
            console.log("Error in ChatGroupController class ", error)
            res.status(500).json({ message: "Something went wrong. Please try again."})
        }
    }

    static async index(req: Request, res: Response){
        try{
            const user = req.user

            const groups = await prisma.chatGroup.findMany({
                where: {
                    user_id: user!.id
                },

                orderBy: {
                    created_at: "desc"
                }
            })

            return res.status(200).json({ message: "Chat groups fetched successfully", data: groups})
        }

        catch(error){
            console.log("Error in ChatGroupController class ", error)
            res.status(500).json({ message: "Something went wrong. Please try again."})
        }
    }

    static async show(req: Request, res: Response){
        try{
            const { id } = req.params 

            const groups = await prisma.chatGroup.findUnique({
                where: {
                    id: id
                }
            })

            return res.status(200).json({ message: "Chat group fetched successfully", data: groups})
        }

        catch(error){
            console.log("Error in ChatGroupController class ", error)
            res.status(500).json({ message: "Something went wrong. Please try again."})
        }
    }

    static async update(req: Request, res: Response){
        try{
            const body = req.body
            const { id } = req.params

            await prisma.chatGroup.update({
                data: {
                    title: body.title,
                    passcode: body.passcode
                },

                where: {
                    id: id
                }
            })

            return res.status(200).json({ message: "Chat group updated successfully" })
        }

        catch(error){
            console.log("Error in ChatGroupController class ", error)
            res.status(500).json({ message: "Something went wrong. Please try again."})
        }
    }

    static async destroy(req: Request, res: Response){
        try{
            const { id } = req.params 

            await prisma.chatGroup.delete({
                where: {
                    id: id
                }
            })

            return res.status(200).json({ message: "Chat group deleted successfully"})
        }

        catch(error){
            console.log("Error in ChatGroupController class ", error)
            res.status(500).json({ message: "Something went wrong. Please try again."})
        }
    }
}

export default ChatGroupController