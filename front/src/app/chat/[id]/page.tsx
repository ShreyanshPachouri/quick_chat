import ChatBase from '@/src/components/chat/ChatBase'

export default async function chat ({ params }: { params: { id: string }}){
    const { id } = await params
    console.log("The group id is: ", id)

    return(
        <div>
            <h1>Hello, I am chat</h1>
            <ChatBase groupId = { id } />
        </div>
    )
}
