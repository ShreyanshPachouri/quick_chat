import { z } from 'zod'

export const createChatSchema = z
.object({
    title: z.string().min(4, { message: "Chat title must be 4 characters long"})
                     .max(191, { message: "Chat title must be 191 characters long"}),
    passcode: z.string().min(4, { message: "Passcode must be 4 characters long"})
                        .max(25, { message: "Chat title must be 25 characters long"})
}).required()

export type createChatSchemaType = z.infer<typeof createChatSchema>